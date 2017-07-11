/* global describe, it, before, beforeEach */
const {expect} = require('chai')
   .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))

let radio // page object defined in method setPageObject
let component
let form
let stark
let lannister

describe('mn-radio (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnRadio = window.customElements.get('mn-radio')
      component = new MnRadio()
      expect(component).to.be.instanceof(MnRadio)
    })

    it('should work with document.createElement()', () => {
      const MnRadio = window.customElements.get('mn-radio')
      component = document.createElement('mn-radio')
      expect(component).to.be.instanceof(MnRadio)
    })
  })

  describe('component', () => {
    it('should have the .mn-radio class', () => {
      expect(component).to.have.class('mn-radio')
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
    it('should have type radio by default', () => {
      expect(component.input).to.have.attribute('type', 'radio')
    })
  })

  describe('property checked', () => {
    it('should be false if dont have checked attribute', () => {
      expect(component.checked).to.be.false
      expect(component.input.checked).to.be.false
    })

    it('should be true if have a checked attribute', () => {
      radio.setProperty('checked', true)

      expect(component.checked).to.be.true
      expect(component.input.checked).to.be.true
    })
  })

  describe('propety value', () => {
    it('should return undefined by default', () => {
      expect(component.value).to.be.undefined
    })

    it('should return checked value', () => {
      stark.checked = true
      expect(component.value).to.be.equal('stark')
    })

    it('should accept single value as setter', () => {
      component.value = 'stark'
      expect(component.value).to.be.equal('stark')
    })

    it('should accept undefined as setter', () => {
      component.value = 'stark'
      component.value =  undefined

      expect(component.value).to.be.undefined
    })

    it('should evaluate value as string', () => {
      stark.setAttribute('value', 'stark')
      stark.checked = true

      expect(component.value).to.be.equal('stark')
    })

    it('should evaluate value as number', () => {
      stark.setAttribute('value', '0')
      stark.checked = true

      expect(component.value).to.be.equal(0)
    })

    it('should evaluate value as array', () => {
      stark.setAttribute('value', '[0, 1]')
      stark.checked = true

      expect(component.value).to.deep.equal([0, 1])
    })

    it('should evaluate value as object', () => {
      stark.setAttribute('value', '{name: "stark"}')
      stark.checked = true

      expect(component.value).to.deep.equal({name: 'stark'})
    })

    it('should evaluate value as JSON', () => {
      stark.setAttribute('value', '{"name": "stark"}')
      stark.checked = true

      expect(component.value).to.deep.equal({name: 'stark'})
    })
  })

  describe.skip('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      const {formID} = window
      expect(formID.house).to.be.equal(component)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      const {formName} = window
      expect(formName.house).to.be.equal(component)
    })

    it('should undefine form getter (name) if component name was removed', () => {
      radio.removeAttribute('name')
      const {formName} = window
      expect(formName.house).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      radio.removeAttribute('name')
      const {formID} = window
      expect(formID.house).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      radio.setAttribute('name', 'house2')
      const {formName} = window
      expect(formName.house2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      radio.setAttribute('name', 'house2')
      const {formID} = window
      expect(formID.house2).to.be.equal(component)
    })
  })

  describe.skip('attribute placeholder', () => {
    it('should define before conent as placeholder', () => {
      radio.setAttribute('placeholder', 'test')
      // expect(component).to.contain('label').with.text('test')
    })
  })

  describe.skip('attribute readonly', () => {
    it('should define attribute in child input', () => {
      radio.setAttribute('readonly')
      expect(component).to.contain('input').to.have.attribute('readonly')
    })

    it('should remove attribute from child input', () => {
      radio.removeAttribute('readonly')
      expect(component).to.contain('input').not.have.attribute('readonly')
    })
  })

  describe.skip('attribute disabled', () => {
    it('should define attribute in child input', () => {
      radio.setAttribute('disabled')
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child input', () => {
      radio.removeAttribute('disabled')
      expect(component.input).to.not.have.attribute('disabled')
    })
  })

  describe.skip('method validate()', () => {

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
  form = document.createElement('form')
  form.setAttribute('name', 'formName')
  form.setAttribute('id', 'formID')

  stark = document.createElement('mn-radio')
  stark.setAttribute('name', 'house')
  stark.setAttribute('value', 'stark')
  form.appendChild(stark)

  // lannister
  lannister = document.createElement('mn-radio')
  lannister.setAttribute('name', 'house')
  lannister.setAttribute('value', 'lannister')
  form.appendChild(lannister)

  component = stark

  document.body.appendChild(form)
}

function setPageObject() {
  const RadioPageObject = require('./radio.po.js')
  radio = new RadioPageObject(component)
}
