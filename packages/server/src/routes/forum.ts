import { Router } from 'express'
import { forumController } from '../controllers/forum'

export const forumRouter = Router()

forumRouter.get('/', forumController().getForumCategories)
forumRouter.get('/getTopics/:id', forumController().getForumTopics)
forumRouter.get('/getPosts/:id', forumController().getForumPosts)

forumRouter.post('/addPost/', forumController().addForumPost)
forumRouter.post('/addTopic/', forumController().addForumTopic)
