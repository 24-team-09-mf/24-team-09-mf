import type { Response, Request } from 'express'
import { literal } from 'sequelize'

import { CategoriesModel } from '../models/forumCategories'
import { TopicsModel } from '../models/forumTopics'
import { PostsModel } from '../models/forumPosts'
import { UsersModel } from '../models/users'
import { checkUser } from '../utils/checkUser'
import { EmojiModel, PostEmojisModel } from '../models/forumEmoji'
import sanitizeHtml from 'sanitize-html'

export function forumController() {
  return {
    async getForumCategories(_: Request, res: Response) {
      try {
        const data = await CategoriesModel.findAll({
          attributes: [
            'id',
            'title',
            'description',
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
                {
                  model: PostsModel,
                  attributes: ['createdAt'],
                  limit: 1,
                  order: [['id', 'DESC']],
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
            'parent_id',
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
            {
              model: PostsModel,
              attributes: ['createdAt'],
              limit: 1,
              order: [['id', 'DESC']],
            },
          ],
          where: {
            parent_id: req.params.id,
          },
          order: [['createdAt', 'ASC']],
        })
        if (data.length === 0) throw new Error('Ресурс не найден')
        return res.status(200).send(data)
      } catch (e) {
        if (e instanceof Error) {
          if (e.message === 'Ресурс не найден') {
            return res.status(404).send('Ресурс не найден')
          }
        }
        return res.status(500).send(e)
      }
    },

    async getForumPosts(req: Request, res: Response) {
      try {
        const data = await TopicsModel.findAll({
          attributes: ['title'],
          include: [
            {
              model: PostsModel,
              attributes: ['id', 'message', 'createdAt'],
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
                      attributes: ['emoji_name'],
                    },
                  ],
                },
              ],
            },
          ],
          where: {
            id: req.params.id,
          },
          order: [[PostsModel, 'createdAt', 'ASC']],
        })
        if (data.length === 0) throw new Error('Ресурс не найден')
        return res.status(200).send(data)
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async addForumPost(req: Request, res: Response) {
      const { id, message, user } = req.body
      const userDB = await checkUser(user)
      try {
        const post = await PostsModel.create({
          message: sanitizeHtml(message),
          parent_id: id,
          user_id: userDB.id,
        })
        return res.status(201).json({
          ...post.dataValues,
          user: {
            user_id: userDB.user_id,
            login: userDB.login,
            avatar: userDB.avatar,
          },
        })
      } catch (e) {
        if (e instanceof Error) {
          if (e.message === 'Ресурс не найден') {
            return res.status(404).send('Ресурс не найден')
          }
        }
        return res.status(500).send(e)
      }
    },

    async addForumTopic(req: Request, res: Response) {
      try {
        const { id, title, message, user } = req.body
        const userDB = await checkUser(user)
        const topic = await TopicsModel.create({
          title: sanitizeHtml(title),
          parent_id: id,
          user_id: userDB.id,
        })
        await PostsModel.create({
          message: sanitizeHtml(message),
          parent_id: topic.id,
          user_id: userDB.id,
        })
        return res.status(201).json({
          ...topic.dataValues,
          title: title,
          postsCount: 1,
          posts: [
            {
              createdAt: topic.dataValues.createdAt,
            },
          ],
          user: {
            user_id: userDB.user_id,
            login: userDB.login,
          },
        })
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async addEmoji(req: Request, res: Response) {
      const { postId, emojiId, user } = req.body
      const userDB = await checkUser(user)
      try {
        const check = await PostEmojisModel.findOne({
          where: {
            post_id: postId,
            emoji_id: emojiId,
            user_id: userDB.id
          }
        })
        if (!check) {
          const emoji = await PostEmojisModel.create({
            post_id: postId,
            emoji_id: emojiId,
            user_id: userDB.id,
          })
          return res.status(201).json({
            ...emoji.dataValues,
            user: {
              user_id: userDB.user_id
            },
            success: true
          })
        } else return res.status(201).json({ success: false })
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async deleteEmoji(req: Request, res: Response) {
      const { postId, emojiId, user } = req.body
      const userDB = await checkUser(user)
      try {
        const emoji = await PostEmojisModel.findOne({
          where: {
            post_id: postId,
            emoji_id: emojiId,
            user_id: userDB.id,
          }
        })
        if (emoji) {
          await emoji.destroy()
          return res.status(200).json(emoji)
        } else {
          return res.status(404).send('Ресурс не найден')
        }
      } catch (e) {
        return res.status(500).send(e)
      }
    },

    async getEmoji(req: Request, res: Response) {
      try {
        const { emojiName } = req.params

        const emoji = await EmojiModel.findOne({
          where: {
            emoji_name: emojiName
          }
        })

        if (emoji) {
          return res.status(200).json(emoji)
        } else {
          return res.status(404).send('Ресурс не найден')
        }
      } catch (e) {
        return res.status(500).send(e)
      }
    }
  }
}
