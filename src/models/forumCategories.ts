import {
  DataType,
  Model,
  Table,
  Column,
  AllowNull,
  Length,
  HasMany,
} from 'sequelize-typescript'
import { TopicsModel } from './forumTopics'

@Table({ modelName: 'categories' })
export class CategoriesModel extends Model {
  @AllowNull(false)
  @Length({ min: 3, max: 255 })
  @Column(DataType.STRING)
  title: string

  @AllowNull(true)
  @Column(DataType.STRING)
  description: string

  @HasMany(() => TopicsModel, 'parent_id')
  topics: Array<TopicsModel>
}
