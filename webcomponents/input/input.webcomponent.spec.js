/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let input // page object defined in method setPageObject
let component

describe('mn-input (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnInput = window.customElements.get('mn-input')
      component = new MnInput()
      expect(component).to.be.instanceof(MnInput)
    })

    it('should work with document.createElement()', () => {
      const MnInput = window.customElements.get('mn-input')
      component = document.createElement('mn-input')
      expect(component).to.be.instanceof(MnInput)
    })
  })

  describe('component', () => {
    it('should have the .mn-input class', () => {
      expect(component).to.have.class('mn-input')
    })

    it('should contain a input property', () => {
      expect(component).to.have.property('input')
    })

    it('should contain a input child', () => {
      expect(component.querySelectorAll('input')).to.have.length(1)
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
    it('should return empty string when it is undefined', () => {
      expect(component).to.have.value('')
    })

    it('should get empty string when it is setted with undefined', () => {
      input.setProperty('value', undefined)
      expect(component).to.have.value('')
    })

    it('should get empty string when it is setted with null', () => {
      input.setProperty('value', null)
      expect(component).to.have.value('')
    })

    it('should setter and getter as string', () => {
      input.setProperty('value', 'test')
      expect(component).to.have.value('test')
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      input.setAttribute('value', 'test')
      expect(component).to.have.value('test')
    })

    it('should set property value when attribute is removed', () => {
      input.removeAttribute('value')
      expect(component).to.have.value('')
    })
  })

  describe('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      input.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(component)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      input.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(component)
    })

    it('should undefine form getter (name) if component name was removed', () => {
      input.setAttribute('name', 'test')
      input.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      input.setAttribute('name', 'test')
      input.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      input.setAttribute('name', 'test')
      input.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      input.setAttribute('name', 'test')
      input.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(component)
    })
  })

  describe('property placeholder', () => {
    it('should set the placeholder text in label', () => {
      input.setProperty('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should set the placeholder text in label', () => {
      input.setProperty('placeholder', 'test')
      input.setProperty('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set emtpy text if is undefined', () => {
      component.placeholder = undefined
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute placeholder', () => {
    it('should define a label as placeholder', () => {
      input.setAttribute('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should change the text', () => {
      input.setAttribute('placeholder', 'test')
      input.setAttribute('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set empty text if is undefined', () => {
      expect(component).to.contain('label').with.text('')
    })

    it('should set empty text to label when attribute is removed', () => {
      input.setAttribute('placeholder', 'test')
      input.removeAttribute('placeholder')
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute readonly', () => {
    it('should define attribute in child input', () => {
      input.setAttribute('readonly')
      expect(component).to.contain('input').to.have.attribute('readonly')
    })

    it('should remove attribute from child input', () => {
      input.removeAttribute('readonly')
      expect(component).to.contain('input').not.have.attribute('readonly')
    })
  })

  describe('attribute maxlength', () => {
    it('should define attribute in child input', () => {
      input.setAttribute('maxlength', '2')
      expect(component).to.contain('input').with.attribute('maxlength', '2')
    })

    it('should update attribute in child input', () => {
      input.setAttribute('maxlength', '2')
      input.setAttribute('maxlength', '3')
      expect(component).to.contain('input').with.attribute('maxlength', '3')
    })

    it('should remove attribute from child input', () => {
      input.setAttribute('maxlength', '2')
      input.removeAttribute('maxlength')
      expect(component).to.contain('input').to.not.have.attribute('maxlength')
    })
  })

  describe('attribute disabled', () => {
    it('should define attribute in child input', () => {
      input.setAttribute('disabled')
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child input', () => {
      input.removeAttribute('disabled')
      expect(component.input).to.not.have.attribute('disabled')
    })
  })

  describe('attribute autocapitalize', () => {
    it('should be off by default', () => {
      expect(component.input).to.have.attribute('autocapitalize', 'off')
    })

    it('should turn on autocapitalize ', () => {
      input.setAttribute('autocapitalize', 'on')
      expect(component.input).to.have.attribute('autocapitalize', 'on')
    })

    it('should turn off autocapitalize', () => {
      input.setAttribute('autocapitalize', 'off')
      expect(component.input).to.have.attribute('autocapitalize', 'off')
    })

    it('should autocapitalize characters', () => {
      input.setAttribute('autocapitalize', 'characters')
      expect(component.input).to.have.attribute('autocapitalize', 'characters')
    })

    it('should change the attribute', () => {
      input.setAttribute('autocapitalize', 'on')
      input.setAttribute('autocapitalize', 'off')
      expect(component.input).to.have.attribute('autocapitalize', 'off')
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
      input.setAttribute('required')
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be valid if setted a valid value', () => {
      input.setAttribute('required')
      input.writeText('test')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })

    it('should be valid if typed a valid value', () => {
      input.setAttribute('required')
      input.writeText('test')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })

    it('should validate if attribute was removed', () => {
      input.setAttribute('required')
      input.removeAttribute('required')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })
  })

  describe('attribute pattern', () => {
    it('should ignore validation if it dont have value and required', () => {
      input.setAttribute('pattern', '^a')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('pattern')
    })

    it('should be invalid if dont have a valid value', () => {
      input.setAttribute('required')
      input.setAttribute('pattern', '^t') // starts with t
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be valid if have a valid value', () => {
      input.setAttribute('required')
      input.setAttribute('pattern', '^t') // starts with t
      input.writeText('test')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('pattern')
    })
  })

  describe('attribute autofocus', () => {
    it('should set attribute on child input', () => {
      input.setAttribute('autofocus')
      expect(component.input).to.have.attribute('autofocus')
    })

    it('should unset attribute from child input', () => {
      input.setAttribute('autofocus')
      input.removeAttribute('autofocus')
      expect(component.input).to.not.have.attribute('autofocus')
    })
  })

  describe('remove multiples spaces', () => {
    it('should trim spaces before and after string', () => {
      input.writeText('  test   ')
      expect(component).to.have.value('test')
      expect(component.input).to.have.value('test')
    })

    it('should works when set property value', () => {
      input.setProperty('value', '    test   test      test   ')
      expect(component).to.have.value('test test test')
      expect(component.input).to.have.value('test test test')
    })

    it('should works when type a value', () => {
      input.writeText('    test   test      test   ')
      expect(component).to.have.value('test test test')
      expect(component.input).to.have.value('test test test')
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

  component = document.createElement('mn-input')

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const InputPageObject = require('./input.po.js')
  input = new InputPageObject(component)
}
