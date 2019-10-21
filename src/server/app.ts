import * as bodyParser from 'koa-bodyparser';
import { InversifyKoaServer } from 'inversify-koa-utils';
import { Container, buildProviderModule } from './ioc/ioc';
import 'reflect-metadata';
import './ioc/inversify.config';
// set up container
const container = new Container();
// create server
// 核心，告诉container，你用我方式去找 @provide @injectable
container.load(buildProviderModule());
const server = new InversifyKoaServer(container);
server.setConfig(app => {
  // add body parser
  app.use(bodyParser({}));
});

const app = server.build();
app.listen(9000);
