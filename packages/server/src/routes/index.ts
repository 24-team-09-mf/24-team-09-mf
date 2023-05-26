import { Router } from 'express'
import { forumRouter } from './forum'
import { themeRouter } from './themes'

export const apiRouter = Router()

apiRouter.use('/forum', forumRouter)
apiRouter.use('/theme', themeRouter)

