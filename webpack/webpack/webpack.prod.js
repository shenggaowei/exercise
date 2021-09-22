const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  optimization: {
    minimizer: [],
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].svr.js'
  },
  mode: 'production',
  module: {
    rules: [
      // 解析js文件
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      // 解析css文件
      { test: /\.css$/, use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }] },
      // 解析sass文件
      { test: /\.(scss|sass)$/, use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
      // 解析字体或者文件
      // { test: /.(jpg|png|gif|jpeg)/, use: [ { loader: 'file-loader' } ]},
      // { test: /.(woff|woff2|eot|ttf|otf)/, use: [ { loader: 'file-loader'} ] },
      { test: /.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|otf)/, use: [{ loader: 'file-loader', options: { name: 'img/[name]_[hash:8].[ext]' } }] }, // contenthash
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['main'],
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
  ]
};