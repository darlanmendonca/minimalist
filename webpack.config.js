const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './hotsite/app.js',
  output: {
    path: require('path').resolve(__dirname, 'docs'),
    filename: 'vendor.js',
  },
  watch: true,
  devtool: 'sourcemap',
  stats: 'errors-only',
  plugins: [
    new Uglify()
  ],
}
