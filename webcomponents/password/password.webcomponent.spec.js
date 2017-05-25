const {describe, it, before, beforeEach} = require('mocha')
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let element

describe('mn-password (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createElement)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnPassword = window.customElements.get('mn-password')
      element = new MnPassword()
      expect(element).to.be.instanceof(MnPassword)
    })

    it('should work with document.createElement()', () => {
      const MnPassword = window.customElements.get('mn-password')
      element = document.createElement('mn-password')
      expect(element).to.be.instanceof(MnPassword)
    })
  })

  describe('element', () => {
    it('should have the .mn-input class', () => {
      expect(element).to.have.class('mn-input')
    })

    it('should have the .mn-password class', () => {
      expect(element).to.have.class('mn-password')
    })

    it('should contain a input child', () => {
      // expect(element).to.contain('password').with.length(1)
      // the length above count childrens of elements, not amount of passwords
      // need to be refactor, chai-dom dont offer a counter yet
      expect(element).to.contain('input')
      expect(element.querySelectorAll('input')).to.have.length(1)
    })

    it('should have type password in child input', () => {
      expect(element.querySelector('input')).to.have.attribute('type', 'password')
    })
  })

  // all style specs need to be refactor, to better organization and readability
  describe('css style', () => {
    it('should have a inline-block display', () => {
      expect(element).to.have.style('display', 'inline-block')
    })

    it('should have a relative position', () => {
      expect(element).to.have.style('position', 'relative')
    })

    it('should have a margin', () => {
      expect(element).to.have.style('margin', '1.5em 0px 1em')
    })
  })

  describe('property value', () => {
    it('should return empty string when it is undefined', () => {
      expect(element).to.be.value('')
    })

    it('should get empty string when it is setted with undefined', () => {
      element.value = undefined
      expect(element).to.have.value('')
    })

    it('should get empty string when it is setted with null', () => {
      element.value = null
      expect(element).to.have.value('')
    })

    it('should setter and getter as string', () => {
      element.value = 'test'
      expect(element).to.have.value('test')
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      element.setAttribute('value', 'test')
      expect(element).to.have.value('test')
    })

    it('should set property value when attribute is removed', () => {
      element.removeAttribute('value')
      expect(element).to.have.value('')
    })
  })

  describe('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      element.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(element)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      element.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(element)
    })

    it('should undefine form getter (name) if element name was removed', () => {
      element.setAttribute('name', 'test')
      element.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if element name was removed', () => {
      element.setAttribute('name', 'test')
      element.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if element name changed', () => {
      element.setAttribute('name', 'test')
      element.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(element)
    })

    it('should redefine form getter (id) if element name changed', () => {
      element.setAttribute('name', 'test')
      element.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(element)
    })
  })

  describe('property placeholder', () => {
    it('should set the placeholder text in label', () => {
      element.placeholder = 'test'
      expect(element).to.contain('label').with.text('test')
    })

    it('should set the placeholder text in label', () => {
      element.placeholder = 'test'
      element.placeholder = 'test2'
      expect(element).to.contain('label').with.text('test2')
    })

    it('should set emtpy text if is undefined', () => {
      element.placeholder = undefined
      expect(element).to.contain('label').with.text('')
    })
  })

  describe('attribute placeholder', () => {
    it('should define a label as placeholder', () => {
      element.setAttribute('placeholder', 'test')
      expect(element).to.contain('label').with.text('test')
    })

    it('should change the text', () => {
      element.setAttribute('placeholder', 'test')
      element.setAttribute('placeholder', 'test2')
      expect(element).to.contain('label').with.text('test2')
    })

    it('should set empty text if is undefined', () => {
      expect(element).to.contain('label').with.text('')
    })

    it('should set empty text to label when attribute is removed', () => {
      element.setAttribute('placeholder', 'test')
      element.removeAttribute('placeholder')
      expect(element).to.contain('label').with.text('')
    })
  })

  describe('attribute disabled', () => {
    it('should define attribute in child password', () => {
      element.disabled = true
      // expect(element).to.contain('password').to.have.attribute('disabled')
      // need to be refactore because by 'to contain' is not possible to get the password child
      expect(element.querySelector('input')).to.have.attribute('disabled')
    })

    it('should remove attribute from child password', () => {
      element.disabled = false
      // expect(element).to.contain('password').not.have.attribute('disabled')
      // need to be refactore because by 'to contain' is not possible to get the password child('autocapitalize', 'off')
      expect(element.querySelector('input')).not.to.have.attribute('disabled')
    })
  })

  describe('method validate()', () => {
    it('should be called on event keyup, if have a parent form.submitted', () => {
      element.closest('form').classList.add('submitted')
      const validate = spy.on(element, 'validate')
      element.querySelector('input').dispatchEvent(new Event('keyup'))
      expect(validate).to.have.been.called()
    })

    it('should not called on event keyup, if not have a parent form.submitted', () => {
      const validate = spy.on(element, 'validate')
      element.querySelector('input').dispatchEvent(new Event('keyup'))
      expect(validate).to.not.have.been.called
    })
  })

  describe('attribute required', () => {
    it('should be invalid if validate without fill value', () => {
      element.setAttribute('required', '')
      element.validate()
      expect(element).to.have.class('invalid')
      expect(element).to.have.class('required')
    })

    it('should be valid if validate with filled value', () => {
      element.setAttribute('required', '')
      element.value = 'test'
      element.validate()
      expect(element).to.not.have.class('invalid')
      expect(element).to.not.have.class('required')
    })
  })

  describe('attribute pattern', () => {
    it('should ignore validation if value and required dont exist', () => {
      element.setAttribute('pattern', '^a')
      element.validate()
      expect(element).to.not.have.class('invalid')
      expect(element).to.not.have.class('pattern')
    })

    it('should be invalid if value is not setted', () => {
      // regex to check if element starts with letter t
      element.setAttribute('required', '')
      element.setAttribute('pattern', '^t')
      element.validate()
      expect(element).to.have.class('invalid')
      expect(element).to.have.class('required')
    })

    it('should be valid if value is setted', () => {
      // regex to check if element starts with letter t
      element.setAttribute('required', '')
      element.setAttribute('pattern', '^t')
      element.value = 'test'
      element.validate()
      expect(element).to.not.have.class('invalid')
      expect(element).to.not.have.class('pattern')
    })
  })

  describe('attribute autofocus', () => {
    it('should set attribute on child input', () => {
      element.autofocus = true
      expect(element.input).to.have.attribute('autofocus')
    })

    it('should unset attribute from child input', () => {
      element.autofocus = true
      element.autofocus = false
      expect(element.input).to.not.have.attribute('autofocus')
    })
  })

  describe('password visibility', () => {
    it('should be hidden by default', () => {
      expect(element.querySelector('input')).to.have.attribute('type', 'password')
    })

    it('should have a button to show/hide password', () => {
      expect(element).to.contain('button')
    })

    it('should display password on button click', () => {
      element.querySelector('button').click()
      expect(element.querySelector('input')).to.have.attribute('type', 'text')
    })

    it('should hide password on consecutive button click', () => {
      element.querySelector('button').click()
      element.querySelector('button').click()
      expect(element.querySelector('input')).to.have.attribute('type', 'password')
    })

    it('should hide password on blur', () => {
      element.querySelector('button').click()
      element.querySelector('input').dispatchEvent(new Event('blur'))
      expect(element.querySelector('input')).to.have.attribute('type', 'password')
    })

    it.skip('should hide button in desktop browsers', () => {
      // need to be implemented
    })

    it.skip('should display button in mobile browsers, only on focus', () => {
      // need to be implemented
    })
  })
})

function loadComponent() {
  require('minimalist').password
  // or
  // const {password} = require('minimalist')
}

function cleanView() {
  const form = document.querySelector('form')

  if (form) {
    form.parentNode.removeChild(form)
  }
}

function createElement() {
  const form = document.createElement('form')
  form.setAttribute('name', 'formName')
  form.setAttribute('id', 'formID')

  element = document.createElement('mn-password')

  form.appendChild(element)
  document.body.appendChild(form)
}
