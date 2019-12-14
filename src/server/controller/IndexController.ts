import { route, GET } from 'awilix-koa'
import { User } from '../model/User'
@route('/')
@route('/index')
export default class IndexController {
  private indexService
  constructor({ indexService }) {
    console.log('indexService', indexService)
    this.indexService = indexService
  }
  @route('/')
  @GET()
  private async index(ctx): Promise<any> {
    const result: User = await this.indexService.getUser('0')
    ctx.body = await ctx.render('index', { data: result.email })
  }
}
