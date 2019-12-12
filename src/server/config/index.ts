import { join } from 'path';
const ENV = process.env.NODE_ENV;

const config = {
  env: ENV,
  viewDir: join(__dirname, '..', 'views'),
  staticDir: join(__dirname, '..', 'assets'),
  port: ENV === 'development' ? 8081 : 80,
};

export default config;
