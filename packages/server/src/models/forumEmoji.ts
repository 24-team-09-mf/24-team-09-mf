import {
  DataType,
  Model,
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript'
import { PostsModel } from './forumPosts'
import { UsersModel } from './users'

@Table({ modelName: 'emoji' })
export class EmojiModel extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  emoji: string
  count: number

  @AllowNull(false)
  @ForeignKey(() => PostsModel)
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
