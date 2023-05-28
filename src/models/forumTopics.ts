import {
  DataType,
  Model,
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript'
import { CategoriesModel } from './forumCategories'
import { UsersModel } from './users'

@Table({ modelName: 'topics' })
export class TopicsModel extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  title: string

  @AllowNull(false)
  @ForeignKey(() => CategoriesModel)
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
