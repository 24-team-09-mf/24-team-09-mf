import { Router, type Request, type Response } from 'express'
import { getTheme, postTheme } from '../controllers/themes'
import { checkUser } from '../utils/checkUser'

export const themeRouter = Router()
  .get(
    '/',
    async (req: Request, res: Response, next): Promise<Response | void> => {
      const {  user } = req.body
      try {
        const userId = await checkUser(user)
        const userTheme = await getTheme(userId.dataValues.id)

        if (userTheme?.theme.theme_name) {
          return res.status(200).json(userTheme.theme.theme_name)
        }
        return res.status(404).json('для пользователя тема не задана')
      } catch (e) {
        next(e)
      }
    }
  )

  .post(
    '/',
    async (req: Request, res: Response, next): Promise<Response | void> => {
      const {  user } = req.body
      try {
        const {
          data: { theme_name },
        } = req.body

        const userId = await checkUser(user)

        const userTheme = await postTheme(theme_name, userId.dataValues.id)

        if (userTheme) {
          return res.status(201).json(userTheme)
        }

        return res.status(422).json('unknown data')
      } catch (e) {
        next(e)
      }
    }
  )
