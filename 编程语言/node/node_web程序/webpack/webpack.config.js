const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  devtool: 'source-map',
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};