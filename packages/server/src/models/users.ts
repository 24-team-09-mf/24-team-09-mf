import { DataType, Model, Table, Column, AllowNull } from 'sequelize-typescript'

@Table({ modelName: 'users' })
export class UsersModel extends Model {
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  login: string

  @AllowNull(true)
  @Column(DataType.STRING)
  avatar: string
}
