const { join, resolve } = require('path')
const merge = require('webpack-merge')
const args = require('yargs-parser')(process.argv.slice(2))
const mode = args.mode || 'development'
console.log(mode)
const mergeConfig = require(`./config/webpack.${mode}.js`)
const baseConfig = {
  entry: resolve('src/client/index.tsx'),
  output: {
    path: join(__dirname, './dist/assets'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  }
}
console.log( merge(baseConfig, mergeConfig))
module.exports = merge(baseConfig, mergeConfig)