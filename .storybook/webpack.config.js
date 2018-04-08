const path = require('path');

const paths = {
  SRC: path.resolve(__dirname, '../src'),
  ROOT: path.resolve(__dirname, '../'),
}

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, paths.ROOT),
  })

  return storybookBaseConfig
}
