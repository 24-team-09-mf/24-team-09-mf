import { UsersModel } from '../models/users'

export async function checkUser(user: any) {
  let userId = await UsersModel.findOne({
    attributes: ['id'],
    where: {
      user_id: user.id,
    },
  })
  if (!userId) {
    userId = await UsersModel.create({
      user_id: user.id,
      login: user.login,
      avatar: user.avatar,
    })
  }
  return userId
}
