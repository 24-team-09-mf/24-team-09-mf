import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { CategoriesModel } from './src/models/forumCategories'
import { TopicsModel } from './src/models/forumTopics'
import { PostsModel } from './src/models/forumPosts'
import { UsersModel } from './src/models/users'
import { EmojiModel } from './src/models/forumEmoji'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
  models: [CategoriesModel, TopicsModel, PostsModel, UsersModel, EmojiModel],
}

export const sequelize = new Sequelize(sequelizeOptions)

export async function dbConnect() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
