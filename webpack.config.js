const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './hotsite/app.js',
    index: './index.js',
  },
  output: {
    path: require('path').resolve(__dirname, 'docs'),
    filename: '[name].js',
  },
  watch: true,
  stats: 'errors-only',
  plugins: [
    new Uglify()
  ],
}
