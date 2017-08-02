module.exports = KarmaConfig

function KarmaConfig(config) {
  const {argv} = require('yargs')
  const browsers = [
    'Chrome',
    'Safari',
    'Firefox',
    'Nightmare',
    'browserstack:chrome',
    'browserstack:safari',
    'browserstack:firefox',
    'browserstack:edge',
  ]

  if (process.env.BROWSER_STACK_ENV) {
    const browserStackBrowsers = browsers.filter(browser => browser.startsWith('browserstack'))
    console.log(`Testing specs in ${browserStackBrowsers.length} browsers (${browserStackBrowsers.join(', ')})`)
  }

  config.set({
    basePath: '',
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    singleRun: true,

    browsers,

    files: [
      'node_modules/angular/index.js',
      'index.js',
      'angular.js',
      'webcomponents/**/*.directive.js',
      'webcomponents/**/*.scss',
      'index.spec.js',
      'angular.spec.js',
      'webcomponents/**/*.spec.js',
      'webcomponents/**/*.directive.spec.js',
    ],

    preprocessors: {
      '**/*.js': ['webpack', 'sourcemap'],
      'webcomponents/**/*.scss': ['scss'],
    },

    webpack: {
      devtool: 'inline-source-map',
    },

    webpackServer: {
      noInfo: true,
    },

    customLaunchers: {
      'browserstack:chrome': {
        base: 'BrowserStack',
        browser: 'chrome',
        'browser_version': '57',
        os: 'Windows',
        'os_version': '10',
      },
      'browserstack:firefox': {
        base: 'BrowserStack',
        browser: 'firefox',
        'browser_version': '53',
        os: 'Windows',
        'os_version': '10',
      },
      'browserstack:safari': {
        base: 'BrowserStack',
        browser: 'safari',
        'browser_version': '10',
        os: 'OS X',
        'os_version': 'Sierra',
      },
      'browserstack:edge': {
        base: 'BrowserStack',
        browser: 'edge',
        'browser_version': '15',
        os: 'Windows',
        'os_version': '10',
      },
    },

    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
    },

    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 4 * 60 * 1000,
    captureTimeout : 4 * 60 * 1000,

    frameworks: [
      'mocha',
      'detectBrowsers',
    ],

    client: {
      captureConsole: true,

      mocha: {
        grep: argv.grep,
      },
    },

    reporters: [
      'mocha',
    ],

    mochaReporter: {
      output: 'autowatch',
    },

    detectBrowsers: {
      enabled: argv.browsers === 'all',
      usePhantomJS: false,
      postDetection(availableBrowsers) {
        const runnableBrowsers = availableBrowsers.filter(browser => browsers.indexOf(browser) > -1)
        console.log(`Testing specs in ${runnableBrowsers.length} browsers (${runnableBrowsers.join(', ')})`)
        return runnableBrowsers
      },
    }
  })
}
