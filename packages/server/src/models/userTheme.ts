import {
  DataType,
  Model,
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BelongsTo,
  Index,
} from 'sequelize-typescript'

import { UsersModel } from './users'
import { SiteThemeModel } from './themes'

@Table({ timestamps: false, paranoid: true, modelName: 'user_themes' })
export class UserThemeModel extends Model {
  @ForeignKey(() => SiteThemeModel)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'theme_id',
    onDelete: 'CASCADE',
  })
  @ForeignKey(() => UsersModel)
  @AllowNull(false)
  @Index
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
    onDelete: 'CASCADE',
  })
  user_id: number

  @BelongsTo(() => SiteThemeModel, 'theme_id')
  theme: SiteThemeModel
}
