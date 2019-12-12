import * as Koa from 'koa';
import config from './config';
import loadMiddlewares from './middleware/loadMiddleware';

const app = new Koa();

loadMiddlewares(app);

app.listen(config.port, () => {
  console.log(`DogJun Blog Server is running on port ${config.port}... 🍺`);
});
