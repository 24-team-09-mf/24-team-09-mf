import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { CategoriesModel } from './src/models/forumCategories'
import { TopicsModel } from './src/models/forumTopics'
import { PostsModel } from './src/models/forumPosts'
import { UsersModel } from './src/models/users'
import { EmojiModel, PostEmojisModel } from './src/models/forumEmoji'
import { SiteThemeModel } from './src/models/themes'
import { UserThemeModel } from './src/models/userTheme'

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
  POSTGRES_HOST,
} = process.env

const sequelizeOptions: SequelizeOptions = {
  host: POSTGRES_HOST || 'localhost',
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
  models: [
    CategoriesModel,
    TopicsModel,
    PostsModel,
    UsersModel,
    EmojiModel,
    PostEmojisModel,
    SiteThemeModel,
    UserThemeModel,
  ],
}

export const sequelize = new Sequelize(sequelizeOptions)

export async function dbConnect() {
  try {
    await sequelize.authenticate()
    await sequelize.sync().then(async () => {
      const CategoriesCount = await CategoriesModel.count()
      if (!CategoriesCount) {
        await CategoriesModel.create({
          title: 'Сообщество',
          description: 'Обсуждение игры',
        })
        await CategoriesModel.create({
          title: 'Поддержка',
          description:
            'Возникли затруднения с установкой игры, игровым процессом или учетной записью? Приглашаем на форум службы поддержки',
        })

        await UsersModel.create({
          user_id: 532132,
          login: 'test 0001',
          avatar:
            'https://ya-praktikum.tech/api/v2/resources/e1092287-ff24-410f-965d-0bf50bd35955/56c760b9-598e-42ad-acc8-d02afed05c21_61492-derevo_minimalizm_vodoem_holm.jpg',
        })

        await TopicsModel.create({
          title: 'Предложения по улучшению игры',
          parent_id: 1,
          user_id: 1,
        })

        await PostsModel.create({
          message: 'Оставляйте свои предложения и вопросы',
          parent_id: 1,
          user_id: 1,
        })
      }

      const EmojiCount = await EmojiModel.count()
      if (!EmojiCount) {
        await EmojiModel.create({
          emoji_name: 'poop',
        })
        await EmojiModel.create({
          emoji_name: 'cat',
        })
        await EmojiModel.create({
          emoji_name: 'robot',
        })
      }

      const ThemesCount = await SiteThemeModel.count()
      if (!ThemesCount) {
        await SiteThemeModel.create({
          title: 'dark',
        })
        await SiteThemeModel.create({
          title: 'light',
        })
      }
    })
    console.log(
      '\x1b[36m%s\x1b[0m',
      'Connection has been established successfully.'
    )
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', error)
  }
}
