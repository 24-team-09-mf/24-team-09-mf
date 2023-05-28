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
    console.log(
      '\x1b[36m%s\x1b[0m',
      'Connection has been established successfully.'
    )
  } catch (error) {
    console.error('\x1b[31m%s', error)
  }
}
