module.exports = {
  // watch: true,
  devtool: 'source-map',

  entry: `${__dirname}/docs/sources/app.js`,

  output: {
    filename: 'vendor.js',
    path: `${__dirname}/docs/`,
  },
}
