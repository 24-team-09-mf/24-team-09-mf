import { Router } from 'express'
import { forumRouter } from './forum'
import { themeRouter } from './themes'
import checkAuth from '../middlewares/checkAuth'

export const apiRouter = Router()

checkAuth(apiRouter)

apiRouter.use('/forum', forumRouter);
apiRouter.use('/theme', themeRouter)
