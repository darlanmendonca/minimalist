const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    app: './hotsite/app.js',
    index: './app.js',
  },
  output: {
    path: require('path').resolve(__dirname, 'docs'),
    filename: '[name].js',
  },
  watch: true,
  devtool: 'sourcemap',
  stats: 'errors-only',
  plugins: [
    new Uglify()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader'],
      },
    ],
  },
}
