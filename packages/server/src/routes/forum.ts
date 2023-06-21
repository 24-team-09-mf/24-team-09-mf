import { Router } from 'express'
import { forumController } from '../controllers/forum'

export const forumRouter = Router()

forumRouter.get('/', forumController().getForumCategories)
forumRouter.get('/topics/:id', forumController().getForumTopics)
forumRouter.get('/posts/:id', forumController().getForumPosts)
forumRouter.get('/emojis/:emojiName', forumController().getEmoji)

forumRouter.post('/post/', forumController().addForumPost)
forumRouter.post('/topic/', forumController().addForumTopic)

forumRouter.post('/emoji/', forumController().addEmoji)
forumRouter.delete('/emoji/:emojiName', forumController().deleteEmoji)
