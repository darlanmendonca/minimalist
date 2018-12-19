const HtmlWebpackPlugin = require('html-webpack-plugin')
const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './hotsite/app.js',
  },
  output: {
    path: require('path').resolve(__dirname, 'docs'),
    filename: '[name].js',
  },
  stats: 'errors-only',
  plugins: [
    new Uglify(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'hotsite/index.pug',
      inject: false
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        loader: ['html-loader?attrs=false', 'pug-html-loader']
      },
    ],
  }
}
