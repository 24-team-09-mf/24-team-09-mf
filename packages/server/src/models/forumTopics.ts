import {
  DataType,
  Model,
  Table,
  Column,
  AllowNull,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript'
import { UsersModel } from './users'
import { PostsModel } from './forumPosts'

@Table({ modelName: 'topics' })
export class TopicsModel extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  title: string

  @HasMany(() => PostsModel, {
    foreignKey: 'parent_id',
    as: 'posts',
  })
  parent_id: number

  @BelongsTo(() => UsersModel, {
    foreignKey: 'user_id',
    as: 'user',
  })
  user_id: number
}
