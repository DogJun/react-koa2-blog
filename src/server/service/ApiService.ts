import { IApi } from '../interface/IApi'

export default class ApiService implements IApi {
  private safeRequest
  constructor({ safeRequest }) {
    this.safeRequest = safeRequest
  }
  public getInfo(url, arg, callback) {
    return this.safeRequest.fetch(url, arg, callback)
  }
}
