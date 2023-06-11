import { IStoreServices } from '@/store/store'
import { SignIn } from '@/store/user/types'

export class ApiService {
  constructor(private _service: IStoreServices['user']) {}
  getUser() {
    return this._service.getUser()
  }
  signIn(signInData: SignIn) {
    return this._service.signIn(signInData)
  }
  logout() {
    return this._service.logout()
  }
}
