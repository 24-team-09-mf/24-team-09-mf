import {
  DataType,
  Model,
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript'

import { UsersModel } from './users'
import { SiteThemeModel } from './themes'

@Table({ timestamps: false, paranoid: true, modelName: 'user_themes' })
export class UserThemeModel extends Model {
  @AllowNull(false)
  @ForeignKey(() => SiteThemeModel)
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
