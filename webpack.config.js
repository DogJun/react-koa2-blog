const { join, resolve } = require('path')
 
module.exports = {
  entry: resolve('src/page/index.tsx'),
  output: {
    path: join(__dirname, './dist/assets'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [reolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}