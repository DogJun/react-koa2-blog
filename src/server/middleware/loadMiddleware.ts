import { resolve } from 'path';
import * as render from 'koa-swig';
import * as serve from 'koa-static';
import { historyApiFallback } from 'koa2-connect-history-api-fallback';
import config from '../config';
import bodyParser = require('body-parser');

const { createContainer, Lifetime } = require('awilix');
const { scopePerRequest, loadControllers } = require('awilix-koa');

// 初始化IOC
const initIOC = app => {
  // 创建IOC容器
  const container = createContainer();
  // 每一次请求都是一个new model
  app.use(scopePerRequest(container));
  // 装饰所有的service(models), 并将services代码注入到controllers
  container.loadModules([resolve(__dirname, '../service/*.ts')], {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SCOPED,
    },
  });
};

// 配置渲染
const initRender = app => {
  // 配置swig（前端模版）
  app.context.render = render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    varControls: ['[[', ']]'],
    writeBody: false,
  });
  // 配置静态文件目录
  app.use(serve(config.staticDir));
};

// 配置路由
const initController = app => {
  app.use(
    loadControllers(resolve(__dirname, '../controller/*.ts'), {
      cwd: __dirname,
    }),
  );
  app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }));
};

export default function load(app) {
  app.use(bodyParser());
  initIOC(app);
  initController(app);
  initRender(app);
}
