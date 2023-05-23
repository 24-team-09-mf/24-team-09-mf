import { Router } from 'express'
import { forumRouter } from './forum'

export const apiRouter = Router()

apiRouter.use('/forum', forumRouter)
