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
  emoji_name: string
}

@Table({ modelName: 'post_emojis' })
export class PostEmojisModel extends Model {
  @AllowNull(false)
  @ForeignKey(() => PostsModel)
  @Column({
    type: DataType.INTEGER,
    field: 'post_id',
    onDelete: 'CASCADE',
  })
  post_id: number

  @AllowNull(false)
  @ForeignKey(() => EmojiModel)
  @Column({
    type: DataType.INTEGER,
    field: 'emoji_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  emoji_id: number

  @AllowNull(false)
  @ForeignKey(() => UsersModel)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
    onDelete: 'CASCADE',
  })
  user_id: number

  @BelongsTo(() => PostsModel, {
    foreignKey: 'post_id',
    as: 'post',
  })
  post: PostsModel

  @BelongsTo(() => EmojiModel, {
    foreignKey: 'emoji_id',
    as: 'emoji',
  })
  emoji: EmojiModel

  @BelongsTo(() => UsersModel, {
    foreignKey: 'user_id',
    as: 'user',
  })
  user: UsersModel
}
