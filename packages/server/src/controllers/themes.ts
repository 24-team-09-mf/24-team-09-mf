import type { Response, Request } from 'express'
import { SiteThemeModel } from '../models/themes'
import { UserThemeModel } from '../models/userTheme'
import { UsersModel } from '../models/users'
import { literal } from 'sequelize'
import { checkUser } from '../utils/checkUser'

export function themeController() {
  const THEME_ERROR = 'для пользователя нет темы'
  
  return {
    async getSiteThemes(_: Request, res: Response) {
      try {
        const data = await SiteThemeModel.findAll({
          attributes: [
            'id',
            'title',
            [
              literal(
                '(select count(themes.id) from themes where "themes"."parent_id" = "site_themes"."id")'
              ),
              'themesCount',
            ],
          ],
          include: [
            {
              model: UserThemeModel,
              attributes: ['id', 'user_id'],
              limit: 1,
              order: [['id', 'DESC']],
              include: [
                {
                  model: UsersModel,
                  attributes: ['user_id', 'login'],
                },
              ],
            },
          ],
          order: [['createdAt', 'ASC']],
        })
        return res.status(200).send(data)
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async getUserTheme(req: Request, res: Response) {
      try {
        const data = await UserThemeModel.findOne({
          attributes: ['id'],
          include: [
            {
              model: UsersModel,
              attributes: ['user_id', 'login'],
            },
          ],
          where: {
            parent_id: req.params.id,
          },
          order: [['createdAt', 'ASC']],
        })
        if (data && data) {
          return res.status(200).json(data)
        }
        return res.status(404).json(THEME_ERROR)
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async addUserTheme(req: Request, res: Response) {
      try {
        const { id, title, user } = req.body
        const userId = await checkUser(user)
        const theme = await UserThemeModel.create({
          title: title,
          parent_id: id,
          user_id: userId.dataValues.id,
        })

        return res.status(201).json(theme)
      } catch (e) {
        return res.status(500).send(e)
      }
    },
  }
}
