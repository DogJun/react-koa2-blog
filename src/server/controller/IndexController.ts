import {
  interfaces,
  controller,
  TAGS,
  httpGet,
  TYPE,
  inject,
  provideThrowable,
  Router,
} from '../ioc/ioc';
import { User } from '../model/User';

@controller('/')
@provideThrowable(TYPE.Controller, 'IndexController')
export default class IndexController implements interfaces.Controller {
  private indexService;
  constructor(@inject(TAGS.IndexService) indexService) {
    this.indexService = indexService;
  }
  @httpGet('/')
  private async index(ctx: Router.IRouterContext): Promise<any> {
    const result: User = this.indexService.getUser(0);
    // ctx.body = await ctx.render('index', {data: result.email})
    ctx.body = result.email;
  }
}
