/* global describe, it */
const {expect} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))

// let code
let component

describe('mn-code (webcomponent)', () => {
  // beforeEach(createComponent)
  // beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnCode = window.customElements.get('mn-code')
      component = new MnCode()
      expect(component).to.be.instanceof(MnCode)
    })

    it('should work with document.createElement()', () => {
      const MnCode = window.customElements.get('mn-code')
      component = document.createElement('mn-code')
      expect(component).to.be.instanceof(MnCode)
    })
  })
})

// function createComponent() {
//   component = document.createElement('mn-code')
//   component.id = 'menu'

//   document.body.appendChild(component)
// }

// function setPageObject() {
//   const CodePageObject = require('./code.po.js')
//   code = new CodePageObject(component)
// }
