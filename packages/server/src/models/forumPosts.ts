import {
  DataType,
  Model,
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript'
import { TopicsModel } from './forumTopics'
import { UsersModel } from './users'

@Table({ modelName: 'posts' })
export class PostsModel extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  message: string

  @AllowNull(false)
  @ForeignKey(() => TopicsModel)
  @Column({
    type: DataType.INTEGER,
    field: 'parent_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  parent_id: number

  @BelongsTo(() => UsersModel, {
    foreignKey: 'user_id',
    as: 'user',
  })
  user_id: number
}
