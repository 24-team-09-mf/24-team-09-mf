import { Router, type Request, type Response } from 'express'
import { getTheme, postTheme } from '../controllers/themes'

export const themeRouter = Router()
  .get(
    '/',
    async (_: Request, res: Response, next): Promise<Response | void> => {
      try {
        const userId = res.locals.user.id
        const userTheme = await getTheme(userId)

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
      try {
        const {
          data: { theme_name },
        } = req.body

        const userId = res.locals.user.id

        const userTheme = await postTheme(theme_name, userId)

        if (userTheme) {
          return res.status(201).json(userTheme)
        }

        return res.status(422).json('unknown data')
      } catch (e) {
        next(e)
      }
    }
  )
