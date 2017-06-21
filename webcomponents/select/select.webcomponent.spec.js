/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let select // page object defined in method setPageObject
let component

describe('mn-select (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnSelect = window.customElements.get('mn-select')
      component = new MnSelect()
      expect(component).to.be.instanceof(MnSelect)
    })

    it('should work with document.createElement()', () => {
      const MnSelect = window.customElements.get('mn-select')
      component = document.createElement('mn-select')
      expect(component).to.be.instanceof(MnSelect)
    })
  })

  describe('component', () => {
    it('should have the .mn-select class', () => {
      expect(component).to.have.class('mn-select')
    })

    it('should contain a input property', () => {
      expect(component).to.have.property('input')
    })

    it('should contain a input child', () => {
      expect(component.querySelectorAll('input')).to.have.length(1)
    })

    it('should contain a menu property', () => {
      expect(component).to.have.property('menu')
    })

    it('should contain a menu child', () => {
      expect(component.querySelectorAll('menu')).to.have.length(1)
    })

    it('should contain div.option inside menu', () => {
      expect(component.menu.querySelectorAll('div.option')).to.have.length(3)
    })
  })

  describe('input', () => {
    it('should have autocomplete off by default', () => {
      expect(component.input).to.have.attribute('autocomplete', 'off')
    })

    it('should have spellcheck off by default', () => {
      expect(component.input).to.have.attribute('spellcheck', 'off')
    })
  })

  // all style specs need to be refactor, to better organization and readability
  describe('css style', () => {
    it('should have a inline-block display', () => {
      expect(component).to.have.style('display', 'flex')
    })

    it('should have a relative position', () => {
      expect(component).to.have.style('position', 'relative')
    })

    it('should have a margin', () => {
      expect(component).to.have.style('margin', '1.5em 0px 1em')
    })
  })

  describe('property value', () => {
    it('should be undefined by default', () => {
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.text('')
    })

    it('should be undefined when set a invalid value', () => {
      select.setProperty('value', 'teste')
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.text('')
    })

    it('should be undefined when set a empty string', () => {
      select.setProperty('value', '')
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.text('')
    })

    it('should be undefined when set undefined', () => {
      select.setProperty('value', undefined)
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.text('')
    })

    it('should be undefined when set null', () => {
      select.setProperty('value', null)
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.text('')
    })

    it('should be a string when set by option value', () => {
      select.setProperty('value', 'stark')
      expect(component).to.have.value('stark')
      expect(component.input).to.have.value('Stark')
    })

    it('should be a string when set by option text', () => {
      select.setProperty('value', 'Stark')
      expect(component).to.have.value('stark')
      expect(component.input).to.have.value('Stark')
    })

    it('should be a string when set by option text without value', () => {
      select.addOption('Baratheon')
      select.setProperty('value', 'Baratheon')
      expect(component).to.have.value('Baratheon')
      expect(component.input).to.have.value('Baratheon')
    })

    it('should keep value if enter and delete part of filter', () => {
      select.setProperty('value', 'Stark')
      select.writeText('St')
      expect(component).to.have.value('stark')
      expect(component.input).to.have.value('Stark')
    })

    it('should be undefined if enter and delete filter completely', () => {
      select.setProperty('value', 'Stark')
      select.writeText('')
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.value('')
    })

    it('should evaluate to number when set option with numeric string value', () => {
      select.addOption('Test', '5')
      select.setProperty('value', 'Test')
      expect(component).to.have.value(5)
      expect(component.input).to.have.value('Test')
    })

    it('should evaluate to number when set option with numeric string text', () => {
      select.addOption('5')
      select.setProperty('value', '5')
      expect(component).to.have.value(5)
      expect(component.input).to.have.value('5')
    })

    it('should evaluate to number when set number instead string', () => {
      select.addOption('5')
      select.setProperty('value', 5)
      expect(component).to.have.value(5)
      expect(component.input).to.have.value('5')
    })

    it('should evaluate to boolean true', () => {
      select.addOption('Test', 'true')
      select.setProperty('value', 'Test')
      expect(component).to.have.value(true)
      expect(component.input).to.have.value('Test')
    })

    it('should evaluate to boolean false', () => {
      select.addOption('Test', 'false')
      select.setProperty('value', 'Test')
      expect(component).to.have.value(false)
      expect(component.input).to.have.value('Test')
    })

    it('should evaluate string object', () => {
      select.addOption('Test', '{name: \'targaryen\'}')
      select.setProperty('value', 'Test')
      expect(component.value).to.deep.equal({name: 'targaryen'})
      expect(component.input).to.have.value('Test')
    })

    it('should evaluate json object', () => {
      select.addOption('Test', '{"name": "targaryen"}')
      select.setProperty('value', 'Test')
      expect(component.value).to.deep.equal({name: 'targaryen'})
      expect(component.input).to.have.value('Test')
    })

    it('should evaluate array', () => {
      select.addOption('Test', '[1, "2"]')
      select.setProperty('value', 'Test')
      expect(component.value).to.deep.equal([1, '2'])
      expect(component.input).to.have.value('Test')
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      select.setAttribute('value', 'lannister')
      expect(component).to.have.value('lannister')
      expect(component.input).to.have.value('Lannister')
    })

    it('should set property value when attribute is removed', () => {
      select.setAttribute('value', 'Lannister')
      select.removeAttribute('value')
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.value('')
    })
  })

  describe('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      select.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(component)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      select.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(component)
    })

    it('should undefine form getter (name) if component name was removed', () => {
      select.setAttribute('name', 'test')
      select.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      select.setAttribute('name', 'test')
      select.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      select.setAttribute('name', 'test')
      select.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      select.setAttribute('name', 'test')
      select.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(component)
    })
  })

  describe('property placeholder', () => {
    it('should set the placeholder text in label', () => {
      select.setProperty('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should set the placeholder text in label', () => {
      select.setProperty('placeholder', 'test')
      select.setProperty('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set emtpy text if is undefined', () => {
      component.placeholder = undefined
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute placeholder', () => {
    it('should define a label as placeholder', () => {
      select.setAttribute('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should change the text', () => {
      select.setAttribute('placeholder', 'test')
      select.setAttribute('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set empty text if is undefined', () => {
      expect(component).to.contain('label').with.text('')
    })

    it('should set empty text to label when attribute is removed', () => {
      select.setAttribute('placeholder', 'test')
      select.removeAttribute('placeholder')
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute readonly', () => {
    it('should define attribute in child input', () => {
      select.setAttribute('readonly')
      expect(component).to.contain('input').to.have.attribute('readonly')
    })

    it('should remove attribute from child input', () => {
      select.removeAttribute('readonly')
      expect(component).to.contain('input').not.have.attribute('readonly')
    })
  })

  describe('attribute disabled', () => {
    it('should define attribute in child input', () => {
      select.setAttribute('disabled')
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child input', () => {
      select.removeAttribute('disabled')
      expect(component.input).to.not.have.attribute('disabled')
    })
  })

  describe('method validate()', () => {
    it('should be called on event change, if have a parent form.submitted', () => {
      component.closest('form').classList.add('submitted')
      const validate = spy.on(component, 'validate')
      component.input.dispatchEvent(new Event('change'))
      expect(validate).to.have.been.called()
    })

    it('should not called on event change, if not have a parent form.submitted', () => {
      const validate = spy.on(component, 'validate')
      component.input.dispatchEvent(new Event('change'))
      expect(validate).to.not.have.been.called
    })
  })

  describe('attribute required', () => {
    it('should be invalid if typed nothing', () => {
      select.setAttribute('required')
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be valid if setted a valid value', () => {
      select.setAttribute('required')
      select.setProperty('value', 'Stark')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })

    it('should be valid if typed a valid value', () => {
      select.setAttribute('required')
      select.setProperty('value', 'Lannister')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })

    it('should validate if attribute was removed', () => {
      select.setAttribute('required')
      select.removeAttribute('required')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })
  })
})

function loadComponent() {
  // require('minimalist').select
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

  component = document.createElement('mn-select')

  const options = [
    'Stark',
    'Lannister',
    'Targaryen',
  ]

  options.forEach(value => {
    const option = document.createElement('option')
    option.textContent = value
    option.setAttribute('value', value.toLowerCase())
    component.appendChild(option)
  })

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const SelectPageObject = require('./select.po.js')
  select = new SelectPageObject(component)
}
