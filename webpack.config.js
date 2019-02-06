const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SassPlugin = require('sass-webpack-plugin')
const Uglify = require('uglifyjs-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const docTemplates = glob
  .sync('src/**/*.template.pug')
  .map(template => (new HtmlWebpackPlugin({
    filename: path.basename(template).replace('.pug', '.html'),
    template,
  })))

const hotsiteTemplates = glob
  .sync('hotsite/**/*.template.pug')
  .map(template => (new HtmlWebpackPlugin({
    filename: path.basename(template).replace('.pug', '.html'),
    template,
  })))

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
    ...docTemplates,
    ...hotsiteTemplates,
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
      single: true,
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
