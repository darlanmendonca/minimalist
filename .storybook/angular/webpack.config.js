const path = require('path')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../../'),
  })

  // storybookBaseConfig.module.rules.push({
  //   test: /\.ts$/,
  //   loaders: ['ts-loader'],
  //   include: path.resolve(__dirname, '../../'),
  // })

  storybookBaseConfig.module.rules.push({
    test: /.ts$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
        },
      },
    ],
    include: [path.resolve(__dirname, '../../')],
    enforce: 'pre',
  })

  return storybookBaseConfig
}
