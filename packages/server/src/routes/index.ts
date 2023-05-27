import { Router } from 'express'
import { forumRouter } from './forum'
import checkAuth from '../middlewares/checkAuth'

export const apiRouter =  Router()
apiRouter.use('/forum', (...args) => checkAuth(forumRouter, ...args))
