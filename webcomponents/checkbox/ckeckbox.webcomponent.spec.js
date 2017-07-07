/* global describe, it, before, beforeEach */
const {expect} = require('chai')
   .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))

// let checkbox // page object defined in method setPageObject
let component

describe('mn-checkbox (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  // beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnCheckbox = window.customElements.get('mn-checkbox')
      component = new MnCheckbox()
      expect(component).to.be.instanceof(MnCheckbox)
    })

    it('should work with document.createElement()', () => {
      const MnCheckbox = window.customElements.get('mn-checkbox')
      component = document.createElement('mn-checkbox')
      expect(component).to.be.instanceof(MnCheckbox)
    })
  })

  describe('component', () => {
    it('should have the .mn-checkbox class', () => {
      expect(component).to.have.class('mn-checkbox')
    })

    it('should contain a input property', () => {
      expect(component).to.have.property('input')
    })


    it('should contain a input child', () => {
      expect(component).to.contain('input')
      expect(component.querySelectorAll('input')).to.have.length(1)
    })

    it('should contain a label property', () => {
      expect(component).to.have.property('label')
    })

    it('should contain a label child', () => {
      expect(component).to.contain('label')
      expect(component.querySelectorAll('label')).to.have.length(1)
    })
  })

  describe('input', () => {
    it('should have type checkbox by default', () => {
      expect(component.input).to.have.attribute('type', 'checkbox')
    })
  })

  // all style specs need to be refactor, to better organization and readability
  describe('css style', () => {
    it('should have a inline-block display', () => {
      expect(component).to.have.style('display', 'inline-block')
    })

    it('should have a width', () => {
      expect(component).to.have.style('width', '100%')
    })

    it('should have a height', () => {
      expect(component).to.have.style('height', '100%')
    })

    it('should have a height', () => {
      expect(component).to.have.style('height', '100%')
    })

    it('should have a border', () => {
      expect(component).to.have.style('border', '2px solid')
    })

    it('should have a relative position', () => {
      expect(component).to.have.style('position', 'relative')
    })

    it('should have a border-radius', () => {
      expect(component).to.have.style('border-radius', '3px')
    })

    it('should have a box-sizing', () => {
      expect(component).to.have.style('box-sizing', 'border-box')
    })

    it('should have a transition', () => {
      expect(component).to.have.style('transition', 'background .2s ease')
    })
  })
})

function loadComponent() {
  // require('minimalist').input
}

function cleanView() {
  const form = document.querySelector('form')

  if (form) {
    form.parentNode.removeChild(form)
  }
}

function createComponent() {
  const form = document.createElement('form')
  form.setAttribute('name', 'formName')
  form.setAttribute('id', 'formID')

  component = document.createElement('mn-checkbox')

  form.appendChild(component)
  document.body.appendChild(form)
}

// function setPageObject() {
//   const CheckBoxPageObject = require('./checkbox.po.js')
//   checkbox = new CheckBoxPageObject(component)
// }
