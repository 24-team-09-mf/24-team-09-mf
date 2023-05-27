import {
  DataType,
  Model,
  Table,
  Column,
  AllowNull,
  Unique,
  Index,
  HasMany,
} from 'sequelize-typescript'

import { UserThemeModel } from './userTheme'

@Table({ modelName: 'site_themes' })
export class SiteThemeModel extends Model {
  @Index
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  title: string

  @HasMany(() => UserThemeModel, 'parent_id')
  themes: Array<UserThemeModel>
}
