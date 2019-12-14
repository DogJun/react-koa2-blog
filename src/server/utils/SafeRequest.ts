import * as fetch from 'node-fetch'
import { ISafeRequest } from '../interface/ISafeRequest'

export default class SafeRequest implements ISafeRequest {
  public async fetch(
    url: string,
    arg?: Record<string, any>,
    callback?: Function,
  ): Promise<Record<string, any>> {
    let result = { code: 'error' }
    await fetch(url)
      .then(res => res.json())
      .then(json => (result = json))
    return result
  }
}
