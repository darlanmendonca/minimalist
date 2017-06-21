/* global describe, it, before, beforeEach */
const {expect} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))

// let form
let component

describe('mn-form (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  // beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnForm = window.customElements.get('mn-form')
      component = new MnForm()
      expect(component).to.be.instanceof(MnForm)
    })

    it('should work with document.createElement()', () => {
      const MnForm = window.customElements.get('mn-form')
      component = document.createElement('mn-form')
      expect(component).to.be.instanceof(MnForm)
    })
  })

  describe('component', () => {
    it('should have the .mn-form class', () => {
      expect(component).to.have.class('mn-form')
    })
  })
})

function loadComponent() {
  // require('minimalist').form
}

function cleanView() {
  const form = document.querySelector('mn-form')

  if (form) {
    form.parentNode.removeChild(form)
  }
}

function createComponent() {
  component = document.createElement('mn-form')

  document.body.appendChild(component)
}

// function setPageObject() {
//   const FormPageObject = require('./action-sheet.po.js')
//   form = new FormPageObject(component)
// }
