module.exports = MnPasswordCustomElement()

const {describe, it, before, beforeEach} = require('mocha')
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let component

describe('mn-number (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnNumber = window.customElements.get('mn-number')
      component = new MnNumber()
      expect(component).to.be.instanceof(MnNumber)
    })

    it('should work with document.createElement()', () => {
      const MnNumber = window.customElements.get('mn-number')
      component = document.createElement('mn-number')
      expect(component).to.be.instanceof(MnNumber)
    })
  })

  describe('component', () => {
    it('should have the .mn-number class', () => {
      expect(component).to.have.class('mn-number')
    })

    it('should contain a number property', () => {
      expect(component).to.have.property('input')
    })

    it('should contain a number child', () => {
      expect(component.querySelectorAll('input')).to.have.length(1)
    })
  })

  describe('number', () => {
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
      expect(component).to.have.style('display', 'inline-block')
    })

    it('should have a relative position', () => {
      expect(component).to.have.style('position', 'relative')
    })

    it('should have a margin', () => {
      expect(component).to.have.style('margin', '1.5em 0px 1em')
    })
  })

  describe('property value', () => {
    it('should return empty string when it is undefined', () => {
      expect(component).to.have.value('')
    })

    it('should get empty string when it is setted with undefined', () => {
      component.value = undefined
      expect(component).to.have.value('')
    })

    it('should get empty string when it is setted with null', () => {
      component.value = null
      expect(component).to.have.value('')
    })

    it('should setter and getter as string', () => {
      component.value = 'test'
      expect(component).to.have.value('test')
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      component.setAttribute('value', 'test')
      expect(component).to.have.value('test')
    })

    it('should set property value when attribute is removed', () => {
      component.removeAttribute('value')
      expect(component).to.have.value('')
    })
  })

  describe('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      component.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(component)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      component.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(component)
    })

    it('should undefine form getter (name) if component name was removed', () => {
      component.setAttribute('name', 'test')
      component.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      component.setAttribute('name', 'test')
      component.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      component.setAttribute('name', 'test')
      component.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      component.setAttribute('name', 'test')
      component.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(component)
    })
  })

  describe('property placeholder', () => {
    it('should set the placeholder text in label', () => {
      component.placeholder = 'test'
      expect(component).to.contain('label').with.text('test')
    })

    it('should set the placeholder text in label', () => {
      component.placeholder = 'test'
      component.placeholder = 'test2'
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set emtpy text if is undefined', () => {
      component.placeholder = undefined
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute placeholder', () => {
    it('should define a label as placeholder', () => {
      component.setAttribute('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should change the text', () => {
      component.setAttribute('placeholder', 'test')
      component.setAttribute('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set empty text if is undefined', () => {
      expect(component).to.contain('label').with.text('')
    })

    it('should set empty text to label when attribute is removed', () => {
      component.setAttribute('placeholder', 'test')
      component.removeAttribute('placeholder')
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute readonly', () => {
    it('should define attribute in child number', () => {
      component.setAttribute('readonly', 'readonly')
      expect(component).to.contain('input').to.have.attribute('readonly')
    })

    it('should remove attribute from child input', () => {
      component.removeAttribute('readonly')
      expect(component).to.contain('input').not.have.attribute('readonly')
    })
  })

  describe('attribute disabled', () => {
    it('should define attribute in child input', () => {
      component.disabled = true
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child input', () => {
      component.disabled = false
      expect(component.input).to.not.have.attribute('disabled')
    })
  })

  describe('method validate()', () => {
    it('should be called on event keyup, if have a parent form.submitted', () => {
      component.closest('form').classList.add('submitted')
      const validate = spy.on(component, 'validate')
      component.input.dispatchEvent(new Event('keyup'))
      expect(validate).to.have.been.called()
    })

    it('should not called on event keyup, if not have a parent form.submitted', () => {
      const validate = spy.on(component, 'validate')
      component.input.dispatchEvent(new Event('keyup'))
      expect(validate).to.not.have.been.called
    })
  })

  describe('attribute required', () => {
    it('should be invalid if validate without fill value', () => {
      component.setAttribute('required', '')
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be valid if validate with filled value', () => {
      component.setAttribute('required', '')
      component.value = 'test'
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })
  })

  describe('attribute pattern', () => {
    it('should ignore validation if it dont have value and required', () => {
      component.setAttribute('pattern', '^a')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('pattern')
    })

    it('should be invalid if dont have a valid value', () => {
      component.setAttribute('required', '')
      component.setAttribute('pattern', '^t') // starts with t
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be valid if have a valid value', () => {
      component.setAttribute('required', '')
      component.setAttribute('pattern', '^t') // starts with t
      component.value = 'test'
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('pattern')
    })
  })

  describe('attribute autofocus', () => {
    it('should set attribute on child number', () => {
      component.autofocus = true
      expect(component.input).to.have.attribute('autofocus')
    })

    it('should unset attribute from child number', () => {
      component.autofocus = true
      component.autofocus = false
      expect(component.input).to.not.have.attribute('autofocus')
    })
  })
})

function loadComponent() {
  require('minimalist').input
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

  component = document.createElement('mn-input')

  form.appendChild(component)
  document.body.appendChild(form)
}

function MnPasswordCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  const MnNumber = require('./number.class.js')
  window.customElements.define('mn-number', MnNumber)
  return window.customElements.get('mn-number')
}
