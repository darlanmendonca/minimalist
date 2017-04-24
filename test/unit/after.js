const {after} = require('mocha')

after(function () {
  delete global.window
  delete global.document
})
