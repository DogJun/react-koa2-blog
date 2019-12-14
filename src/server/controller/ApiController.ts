import { route, GET } from 'awilix-koa'

@route('/api')
export default class ApiController {
  private apiService
  constructor({ apiService }) {
    this.apiService = apiService
  }
  @route('/test')
  @GET()
  private async test(ctx) {
    const result: Promise<Record<string, any>> = await this.apiService.getInfo(
      'https://api.github.com/users/github',
    )
    ctx.body = result
  }
}
