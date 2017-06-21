/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let password // page object defined in method setPageObject
let component

describe('mn-password (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnPassword = window.customElements.get('mn-password')
      component = new MnPassword()
      expect(component).to.be.instanceof(MnPassword)
    })

    it('should work with document.createElement()', () => {
      const MnPassword = window.customElements.get('mn-password')
      component = document.createElement('mn-password')
      expect(component).to.be.instanceof(MnPassword)
    })
  })

  describe('component', () => {
    it('should have the .mn-input class', () => {
      expect(component).to.have.class('mn-input')
    })

    it('should have the .mn-password class', () => {
      expect(component).to.have.class('mn-password')
    })

    it('should contain a input property', () => {
      expect(component).to.have.property('input')
    })

    it('should contain a input child', () => {
      expect(component).to.contain('input')
      expect(component.querySelectorAll('input')).to.have.length(1)
    })
  })

  describe('input', () => {
    it('should have type password by default', () => {
      expect(component.input).to.have.attribute('type', 'password')
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
      password.setProperty('value', undefined)
      expect(component).to.have.value('')
    })

    it('should get empty string when it is setted with null', () => {
      password.setProperty('value', null)
      expect(component).to.have.value('')
    })

    it('should setter and getter as string', () => {
      password.setProperty('value', 'test')
      expect(component).to.have.value('test')
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      password.setAttribute('value', 'test')
      expect(component).to.have.value('test')
    })

    it('should set property value when attribute is removed', () => {
      password.removeAttribute('value')
      expect(component).to.have.value('')
    })
  })

  describe('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      password.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(component)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      password.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(component)
    })

    it('should undefine form getter (name) if component name was removed', () => {
      password.setAttribute('name', 'test')
      password.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      password.setAttribute('name', 'test')
      password.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      password.setAttribute('name', 'test')
      password.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      password.setAttribute('name', 'test')
      password.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(component)
    })
  })

  describe('property placeholder', () => {
    it('should set the placeholder text in label', () => {
      password.setProperty('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should set the placeholder text in label', () => {
      password.setProperty('placeholder', 'test')
      password.setProperty('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set emtpy text if is undefined', () => {
      password.setProperty('placeholder', undefined)
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute placeholder', () => {
    it('should define a label as placeholder', () => {
      password.setAttribute('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should change the text', () => {
      password.setAttribute('placeholder', 'test')
      password.setAttribute('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set empty text if is undefined', () => {
      expect(component).to.contain('label').with.text('')
    })

    it('should set empty text to label when attribute is removed', () => {
      password.setAttribute('placeholder', 'test')
      password.removeAttribute('placeholder')
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute disabled', () => {
    it('should define attribute in child password', () => {
      password.setAttribute('disabled')
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child password', () => {
      password.removeAttribute('disabled')
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
    it('should be invalid if validate without fill value', () => {
      password.setAttribute('required')
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be valid if validate with filled value', () => {
      password.setAttribute('required')
      password.writeText('test')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })
  })

  describe('attribute pattern', () => {
    it('should ignore validation if value and required dont exist', () => {
      password.setAttribute('pattern', '^a')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('pattern')
    })

    it('should be invalid if value is not setted', () => {
      password.setAttribute('required')
      password.setAttribute('pattern', '^t') // starts with t
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be valid if value is setted', () => {
      password.setAttribute('required', '')
      password.setAttribute('pattern', '^t') // starts with t
      password.writeText('test')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('pattern')
    })
  })

  describe('attribute autofocus', () => {
    it('should set attribute on child input', () => {
      password.setAttribute('autofocus')
      expect(component.input).to.have.attribute('autofocus')
    })

    it('should unset attribute from child input', () => {
      password.setAttribute('autofocus')
      password.removeAttribute('autofocus')
      expect(component.input).to.not.have.attribute('autofocus')
    })
  })

  describe('password visibility', () => {
    it('should be hidden by default', () => {
      expect(component.input).to.have.attribute('type', 'password')
    })

    it('should have a button to show/hide password', () => {
      expect(component).to.contain('button')
    })

    it('should have a property button', () => {
      expect(component).to.have.property('button')
    })

    it('should display password on button click', () => {
      password.clickInButtonToShowPassword()
      expect(component.input).to.have.attribute('type', 'text')
    })

    it('should hide password on consecutively button click', () => {
      password.clickInButtonToShowPassword()
      password.clickInButtonToHidePassword()
      expect(component.input).to.have.attribute('type', 'password')
    })

    it('should hide password on blur', () => {
      password.clickInButtonToShowPassword()
      component.input.dispatchEvent(new Event('blur'))
      expect(component.input).to.have.attribute('type', 'password')
    })

    it.skip('should hide button in desktop browsers', () => {
      // need to be implemented
    })

    it.skip('should display button in mobile browsers, only on focus', () => {
      // need to be implemented
    })
  })

  describe('multiples spaces', () => {
    it('should keep typed value', () => {
      password.writeText('  test')
      expect(component).to.have.value('  test')
    })

    it('should keep value defined by property value', () => {
      password.setProperty('value', '  test')
      expect(component).to.have.value('  test')
    })
  })
})

function loadComponent() {
  // require('minimalist').password
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

  component = document.createElement('mn-password')

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const PasswordPageObject = require('./password.po.js')
  password = new PasswordPageObject(component)
}
