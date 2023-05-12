import { User } from '@/store/user/types'

export interface IUserService {
  getUser(): Promise<User>
}

export class UserService {
  constructor(private _service: IUserService) {}
  getUser() {
    return this._service.getUser()
  }
}
