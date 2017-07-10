/* global describe, it, before, beforeEach */
const {expect} = require('chai')
   .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))

// let checkbox // page object defined in method setPageObject
let component
let form
let stark
let lannister

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

  describe('property checked', () => {
    it('should be false if dont have checked attribute', () => {
      expect(component.checked).to.be.false
      expect(component.input.checked).to.be.false
    })

    it('should be true if have a checked attribute', () => {
      component.checked = true

      expect(component.checked).to.be.true
      expect(component.input.checked).to.be.true
    })
  })

  describe('propety value', () => {
    it('should get a array by default', () => {
      expect(component.value).to.be.an('array')
    })

    it('should get a false if has a single option with boolean value unchecked', () => {
      const terms = document.createElement('mn-checkbox')
      terms.setAttribute('name', 'terms')
      terms.setAttribute('value', 'true')
      form.appendChild(terms)
      component = terms

      expect(component.value).to.be.false
    })

    it('should get true if has a single option with boolean value checked', () => {
      const terms = document.createElement('mn-checkbox')
      terms.setAttribute('name', 'terms')
      terms.setAttribute('value', 'true')
      form.appendChild(terms)
      terms.checked = true
      component = terms

      expect(component.value).to.be.true
    })

    it('should get a array with checked options', () => {
      stark.checked = true
      lannister.checked = true
      expect(component.value).to.deep.equal(['stark', 'lannister'])
    })

    it('should accept single value as setter', () => {
      component.value = 'stark'

      expect(component.value).to.deep.equal(['stark'])
    })

    it('should accept array as setter', () => {
      component.value = ['lannister']

      expect(component.value).to.deep.equal(['lannister'])
    })

    it('should accept undefined as setter', () => {
      component.value = 'stark'
      component.value = undefined

      expect(component.value).to.deep.equal([])
    })

    it('should apply only existing values', () => {
      component.value = ['stark', 'lannister', 'targaryen']

      expect(component.value).to.deep.equal(['stark', 'lannister'])
    })
  })

  // describe('attribute value', () => {
  //   it('should return false to single checkbox', () => {
  //     expect(component).to.have.value(false)
  //   })

  //   it('should return true to single checkbox', () => {
  //     component.setAttribute('value', true)
  //     expect(component).to.have.value(true)
  //   })

  //   it('should change between true and false', () => {
  //     component.setAttribute('value', false)
  //     component.setAttribute('value', true)
  //     expect(component).to.have.value(true)
  //   })

  //   it('should not change value attribute if is checked', () => {
  //     component.setAttribute('value', false)
  //     component.setAttribute('checked', true)
  //     expect(component).to.have.value(false)
  //   })
  // })
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
  form = document.createElement('form')
  form.setAttribute('name', 'formName')
  form.setAttribute('id', 'formID')

  stark = document.createElement('mn-checkbox')
  stark.setAttribute('name', 'house')
  stark.setAttribute('value', 'stark')
  form.appendChild(stark)

  // lannister
  lannister = document.createElement('mn-checkbox')
  lannister.setAttribute('name', 'house')
  lannister.setAttribute('value', 'lannister')
  form.appendChild(lannister)

  component = stark

  document.body.appendChild(form)
}

// function setPageObject() {
//   const CheckBoxPageObject = require('./checkbox.po.js')
//   checkbox = new CheckBoxPageObject(component)
// }
