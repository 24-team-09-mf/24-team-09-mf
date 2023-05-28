import { Router } from 'express'
import { forumController } from '../controllers/forum'

export const forumRouter = Router()

forumRouter.get('/', forumController().getForumCategories)
forumRouter.get('/topic/:id', forumController().getForumTopics)
forumRouter.get('/post/:id', forumController().getForumPosts)

forumRouter.post('/post/', forumController().addForumPost)
forumRouter.post('/topic/', forumController().addForumTopic)
