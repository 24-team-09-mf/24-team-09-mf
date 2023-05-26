import { Router } from 'express'
import { forumController } from '../controllers/forum'

export const forumRouter = Router()

forumRouter.get('/', forumController().getForumCategories)
forumRouter.get('/topics/:id', forumController().getForumTopics)
forumRouter.get('/posts/:id', forumController().getForumPosts)

forumRouter.post('/post/', forumController().addForumPost)
forumRouter.post('/topic/', forumController().addForumTopic)
