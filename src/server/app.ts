import * as bodyParser from 'koa-bodyparser'
import { InversifyKoaServer } from 'inversify-koa-utils'
import { Container, buildProviderModule } from './ioc/ioc'
import 'reflect-metadata'
const container = new Container()
// create server
const server = new InversifyKoaServer(container)
container.load(buildProviderModule())
server.setConfig(app => {
  // add body parser
  app.use(bodyParser({}))
})

const app = server.build()
app.listen(3000)
