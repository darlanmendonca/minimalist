/* global describe, it, before, beforeEach */
const {expect} = require('chai')
   .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))

let checkbox // page object defined in method setPageObject
let component
let form
let stark
let lannister

describe('mn-checkbox (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

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
      checkbox.setProperty('checked', true)

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
      checkbox.setProperty('value', 'stark')

      expect(component.value).to.deep.equal(['stark'])
    })

    it('should accept array as setter', () => {
      checkbox.setProperty('value', ['lannister'])

      expect(component.value).to.deep.equal(['lannister'])
    })

    it('should accept undefined as setter', () => {
      checkbox.setProperty('value', 'stark')
      checkbox.setProperty('value', undefined)

      expect(component.value).to.deep.equal([])
    })

    it('should apply only existing values', () => {
      checkbox.setProperty('value', ['stark', 'lannister', 'targaryen'])

      expect(component.value).to.deep.equal(['stark', 'lannister'])
    })

    it('should evaluate value as string', () => {
      const option = document.createElement('mn-checkbox')
      option.setAttribute('name', 'option')
      option.setAttribute('value', 'test')
      form.appendChild(option)
      option.checked = true
      component = option

      expect(component.value).to.deep.equal(['test'])
    })

    it('should evaluate value as number', () => {
      const option = document.createElement('mn-checkbox')
      option.setAttribute('name', 'option')
      option.setAttribute('value', '5')
      form.appendChild(option)
      option.checked = true
      component = option

      expect(component.value).to.deep.equal([5])
    })

    it('should evaluate value as array', () => {
      const option = document.createElement('mn-checkbox')
      option.setAttribute('name', 'option')
      option.setAttribute('value', '[1, 2]')
      form.appendChild(option)
      option.checked = true
      component = option

      expect(component.value).to.deep.equal([[1, 2]])
    })

    it('should evaluate value as object', () => {
      const option = document.createElement('mn-checkbox')
      option.setAttribute('name', 'option')
      option.setAttribute('value', '{name: \'snow\'}')
      form.appendChild(option)
      option.checked = true
      component = option

      expect(component.value).to.deep.equal([{name: 'snow'}])
    })

    it('should evaluate value as JSON', () => {
      const option = document.createElement('mn-checkbox')
      option.setAttribute('name', 'option')
      option.setAttribute('value', '{"name": "snow"}')
      form.appendChild(option)
      option.checked = true
      component = option

      expect(component.value).to.deep.equal([{"name": "snow"}]) // eslint-disable-line quotes
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
      checkbox.removeAttribute('name')
      const {formName} = window
      expect(formName.house).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      checkbox.removeAttribute('name')
      const {formID} = window
      expect(formID.house).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      checkbox.setAttribute('name', 'house2')
      const {formName} = window
      expect(formName.house2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      checkbox.setAttribute('name', 'house2')
      const {formID} = window
      expect(formID.house2).to.be.equal(component)
    })
  })

  describe.skip('attribute placeholder', () => {
    it('should define before conent as placeholder', () => {
      checkbox.setAttribute('placeholder', 'test')
      // expect(component).to.contain('label').with.text('test')
    })
  })

  describe.skip('attribute readonly', () => {
    it('should define attribute in child input', () => {
      checkbox.setAttribute('readonly')
      expect(component).to.contain('input').to.have.attribute('readonly')
    })

    it('should remove attribute from child input', () => {
      checkbox.removeAttribute('readonly')
      expect(component).to.contain('input').not.have.attribute('readonly')
    })
  })

  describe.skip('attribute disabled', () => {
    it('should define attribute in child input', () => {
      checkbox.setAttribute('disabled')
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child input', () => {
      checkbox.removeAttribute('disabled')
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

function setPageObject() {
  const CheckboxPageObject = require('./checkbox.po.js')
  checkbox = new CheckboxPageObject(component)
}
