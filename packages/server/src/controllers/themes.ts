import type { Response, Request } from 'express'
import { SiteThemeModel } from '../models/themes'
import { UserThemeModel } from '../models/userTheme'
import { UsersModel } from '../models/users'
import { literal } from 'sequelize'

export function themeController() {
  return {
    async getSiteThemes(_: Request, res: Response) {
      try {
        const data = await SiteThemeModel.findAll({
          attributes: [
            'id',
            'theme_name',
            [
              literal(
                '(select count(user_themes.id) from user_themes where "user_themes"."parent_id" = "site_themes"."id")'
              ),
              'userThemesCount',
            ],
          ],
          include: [
            {
              model: UserThemeModel,
              attributes: ['id', 'theme_name', 'user_id'],
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
  }
}
