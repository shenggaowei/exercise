const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].svr.js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      // 解析js文件
      { test: /\.js$/, exclude: /node_modules/, use: [{ loader: "babel-loader" }] },
      // 解析css文件
      { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
      // 解析sass文件
      { test: /\.(scss|sass)$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
      // 解析字体或者文件
      // { test: /.(jpg|png|gif|jpeg)/, use: [ { loader: 'file-loader' } ]},
      // { test: /.(woff|woff2|eot|ttf|otf)/, use: [ { loader: 'file-loader'} ] },
      { test: /.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|otf)/, use: [{ loader: 'url-loader', options: { limit: 10240 } }] },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    })
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  }
};