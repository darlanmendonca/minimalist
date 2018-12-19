const HtmlWebpackPlugin = require('html-webpack-plugin')
const SassPlugin = require('sass-webpack-plugin')
const Uglify = require('uglifyjs-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'hotsite/index.pug',
    }),
    new SassPlugin('./hotsite/app.scss', {
      sourceMap: true,
      sass: {outputStyle: 'compressed'},
      autoprefixer: false,
    }),
    new SassPlugin({'./src/index.scss': 'vendor.css'}, {
      sourceMap: true,
      sass: {outputStyle: 'compressed'},
      autoprefixer: false,
    }),
    new Uglify(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['docs']},
      ui: false,
      notify: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: [
          'html-loader',
          'pug-html-loader',
        ]
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  }
}
