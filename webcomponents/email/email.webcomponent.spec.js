/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let email // page object defined in method setPageObject
let component

describe('mn-email (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnEmail = window.customElements.get('mn-email')
      component = new MnEmail()
      expect(component).to.be.instanceof(MnEmail)
    })

    it('should work with document.createElement()', () => {
      const MnEmail = window.customElements.get('mn-email')
      component = document.createElement('mn-email')
      expect(component).to.be.instanceof(MnEmail)
    })
  })

  describe('component', () => {
    it('should have the .mn-input class', () => {
      expect(component).to.have.class('mn-input')
    })

    it('should have the .mn-email class', () => {
      expect(component).to.have.class('mn-email')
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
    it('should have type email by default', () => {
      expect(component.input).to.have.attribute('type', 'email')
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
      email.setProperty('value', undefined)
      expect(component).to.have.value('')
    })

    it('should get empty string when it is setted with null', () => {
      email.setProperty('value', null)
      expect(component).to.have.value('')
    })

    it('should setter and getter as string', () => {
      email.setProperty('value', 'test')
      expect(component).to.have.value('test')
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      email.setAttribute('value', 'test')
      expect(component).to.have.value('test')
    })

    it('should set property value when attribute is removed', () => {
      email.removeAttribute('value')
      expect(component).to.have.value('')
    })
  })

  describe('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      email.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(component)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      email.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(component)
    })

    it('should undefine form getter (name) if component name was removed', () => {
      email.setAttribute('name', 'test')
      email.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      email.setAttribute('name', 'test')
      email.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      email.setAttribute('name', 'test')
      email.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      email.setAttribute('name', 'test')
      email.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(component)
    })
  })

  describe('attribute pattern', () => {
    it('should have a pattern by default', () => {
      expect(component).to.have.attribute('pattern', '^.+@.+$')
    })

    it('should accept other pattern', () => {
      component.setAttribute('pattern', '.+')
      expect(component).to.have.attribute('pattern', '.+')
    })
  })

  describe('property placeholder', () => {
    it('should set the placeholder text in label', () => {
      email.setProperty('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should set the placeholder text in label', () => {
      email.setProperty('placeholder', 'test')
      email.setProperty('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set emtpy text if is undefined', () => {
      email.setProperty('placeholder', undefined)
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute placeholder', () => {
    it('should define a label as placeholder', () => {
      email.setAttribute('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should change the text', () => {
      email.setAttribute('placeholder', 'test')
      email.setAttribute('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set empty text if is undefined', () => {
      expect(component).to.contain('label').with.text('')
    })

    it('should set empty text to label when attribute is removed', () => {
      email.setAttribute('placeholder', 'test')
      email.removeAttribute('placeholder')
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute disabled', () => {
    it('should define attribute in child email', () => {
      email.setAttribute('disabled')
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child email', () => {
      email.removeAttribute('disabled')
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

    it('should be invalid if type a invalid email', () => {
      component.value = 'test'
      component.validate()
      expect(component).to.have.class('invalid')
    })

    it('should be valid if type a valid email', () => {
      component.value = 'test@gmail.com'
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })
  })

  describe('attribute required', () => {
    it('should be invalid if validate without fill value', () => {
      email.setAttribute('required')
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be valid if validate with filled value', () => {
      email.setAttribute('required')
      email.writeText('test@gmail.com')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })
  })

  describe('attribute pattern', () => {
    it('should ignore validation if value and required dont exist', () => {
      email.setAttribute('pattern', '^a')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('pattern')
    })

    it('should be invalid if value is not setted', () => {
      email.setAttribute('required')
      email.setAttribute('pattern', '^t') // starts with t
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be valid if value is setted', () => {
      email.setAttribute('required', '')
      email.setAttribute('pattern', '^t') // starts with t
      email.writeText('test')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('pattern')
    })
  })

  describe('attribute autofocus', () => {
    it('should set attribute on child input', () => {
      email.setAttribute('autofocus')
      expect(component.input).to.have.attribute('autofocus')
    })

    it('should unset attribute from child input', () => {
      email.setAttribute('autofocus')
      email.removeAttribute('autofocus')
      expect(component.input).to.not.have.attribute('autofocus')
    })
  })

  describe('remove multiples spaces', () => {
    it('should trim spaces before and after string', () => {
      email.writeText('  test   ')
      expect(component).to.have.value('test')
      expect(component.input).to.have.value('test')
    })
  })
})

function loadComponent() {
  // require('minimalist').email
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

  component = document.createElement('mn-email')

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const EmailPageObject = require('./email.po.js')
  email = new EmailPageObject(component)
}
