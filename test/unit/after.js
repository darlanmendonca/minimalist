const {after} = require('mocha')

after(deleteDOM)

function deleteDOM() {
  delete global.window
  delete global.document
}
