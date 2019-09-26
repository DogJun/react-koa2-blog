const { join, resolve } = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const args = require('yargs-parser')(process.argv.slice(2))
const mode = args.mode || 'development'
const isProd = mode == "production" ? true : false;

console.log(mode)
const mergeConfig = require(`./config/webpack.${mode}.js`)
const baseConfig = {
  entry: resolve('src/client/index.tsx'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: [resolve("src")],
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1 
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 小于 10kB(10240字节）的内联文件
              limit: 10 * 1024,
              name: isProd
                ? "images/[name].[hash:5].[ext]"
                : "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@components': resolve('src/client/components'),
      '@page': resolve('src/client/page'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProd
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css",
      chunkFilename: isProd
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css"
    })
  ]
}
module.exports = merge(baseConfig, mergeConfig)