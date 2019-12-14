import { Context } from 'koa'
import { Logger } from 'log4js'
const errorHandler = {
  error(app) {
    interface KOAContext extends Context {
      logger: Logger
    }
    // 500
    app.use(async (ctx: KOAContext, next: () => Promise<any>) => {
      try {
        await next()
      } catch (error) {
        ctx.logger.error(error)
        console.error(error)
        ctx.status = error.status || 500
        ctx.body = error || '请求出错'
      }
    })
    // 400
    app.use(async (ctx: KOAContext, next: () => Promise<any>) => {
      await next()
      if (ctx.status !== 404) return
      ctx.logger.error(ctx)
      ctx.status = 404
      ctx.body =
        '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="http://yoursite.com/yourPage.html" homePageName="回到我的主页"></script>'
    })
  },
}

export default errorHandler
