const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  output: {
    filename: "[name].bundule.js"
  },
  devServer: {
    hot: true,
    contentBase: join(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "DogJun's Blog",
      filename: "index.html",
      template: resolve(__dirname, "../src/client/index-dev.html")
    }),
  ]
}