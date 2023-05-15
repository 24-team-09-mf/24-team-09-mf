import { IStoreServices } from '@/store/store'

export class UserService {
  constructor(private _service: IStoreServices['user']) {}
  getUser() {
    return this._service.getUser()
  }
}
