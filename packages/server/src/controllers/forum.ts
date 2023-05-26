import type { Response, Request } from 'express'
import { CategoriesModel } from '../models/forumCategories'
import { TopicsModel } from '../models/forumTopics'
import { literal } from 'sequelize'
import { PostsModel } from '../models/forumPosts'
import { UsersModel } from '../models/users'
import { checkUser } from '../utils/checkUser'
import { EmojiModel, PostEmojisModel } from '../models/forumEmoji'

export function forumController() {
  return {
    async getForumCategories(_: Request, res: Response) {
      try {
        const data = await CategoriesModel.findAll({
          attributes: [
            'id',
            'title',
            [
              literal(
                '(select count(topics.id) from topics where "topics"."parent_id" = "categories"."id")'
              ),
              'topicsCount',
            ],
          ],
          include: [
            {
              model: TopicsModel,
              attributes: ['id', 'title', 'user_id'],
              limit: 1,
              order: [['id', 'DESC']],
              include: [
                {
                  model: UsersModel,
                  attributes: ['user_id', 'login'],
                },
              ],
            },
          ],
          order: [['createdAt', 'ASC']],
        })
        return res.status(200).send(data)
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async getForumTopics(req: Request, res: Response) {
      try {
        const data = await TopicsModel.findAll({
          attributes: [
            'id',
            'title',
            [
              literal(
                '(select count(posts.id) from posts where "posts"."parent_id" = "topics"."id")'
              ),
              'postsCount',
            ],
          ],
          include: [
            {
              model: UsersModel,
              attributes: ['user_id', 'login'],
            },
          ],
          where: {
            parent_id: req.params.id,
          },
          order: [['createdAt', 'ASC']],
        })
        return res.status(200).send(data)
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async getForumPosts(req: Request, res: Response) {
      try {
        const data = await PostsModel.findAll({
          attributes: [
            'id',
            'message',
          ],
          include: [
            {
              model: UsersModel,
              attributes: ['user_id', 'login', 'avatar'],
            },
            {
              model: PostEmojisModel,
              attributes: ['id', 'user_id'],
              include: [
                {
                  model: EmojiModel,
                  attributes: ['emoji_name']
                }
              ]
            },
          ],
          where: {
            parent_id: req.params.id,
          },
          order: [['createdAt', 'ASC']],
        })
        return res.status(200).send(data)
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async addForumPost(req: Request, res: Response) {
      const { id, message, user } = req.body
      const userId = await checkUser(user)
      try {
        const post = await PostsModel.create({
          message: message,
          parent_id: id,
          user_id: userId.dataValues.id,
        })
        return res.status(201).json(post)
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async addForumTopic(req: Request, res: Response) {
      try {
        const { id, title, message, user } = req.body
        const userId = await checkUser(user)
        const topic = await TopicsModel.create({
          title: title,
          parent_id: id,
          user_id: userId.dataValues.id,
        })
        await PostsModel.create({
          message: message,
          parent_id: topic.id,
          user_id: userId.dataValues.id,
        })
        return res.status(201).json(topic)
      } catch (e) {
        return res.status(500).send(e)
      }
    },
  }
}
