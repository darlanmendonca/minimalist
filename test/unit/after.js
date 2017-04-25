const {after} = require('mocha')

after(deleteDOM)

function deleteDOM() {
  delete global.document
  delete global.window
  delete global.NodeList
  delete global.HTMLElement
}
