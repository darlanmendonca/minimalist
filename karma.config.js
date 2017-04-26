module.exports = KarmaConfig

function KarmaConfig(config) {
  config.set({
    basePath: '',
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    singleRun: true,

    browsers: ['Nightmare'],

    frameworks: [
      'browserify',
      'mocha',
    ],

    files: ['sources/**/*.unit.spec.js'],

    exclude: [],

    preprocessors: {
      'sources/**/*.js': [
        'browserify',
      ],
    },

    client: {
      captureConsole: true,
    },

    reporters: [
      'mocha',
    ],

    browserify: {
      debug: false,
      transform: [
        ['babelify', {presets: ['es2015']}],
      ],
    },

    mochaReporter: {
      output: 'autowatch',
    },
  })
}
