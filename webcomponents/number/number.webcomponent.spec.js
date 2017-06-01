const {describe, it, before, beforeEach} = require('mocha')
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let number // page object defined in method setPageObject
let component

describe('mn-number (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

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

    it('should contain a input property', () => {
      expect(component).to.have.property('input')
    })

    it('should contain a input child', () => {
      expect(component.querySelectorAll('input')).to.have.length(1)
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

  describe('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      number.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(component)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      number.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(component)
    })

    it('should undefine form getter (name) if component name was removed', () => {
      number.setAttribute('name', 'test')
      number.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      number.setAttribute('name', 'test')
      number.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      number.setAttribute('name', 'test')
      number.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      number.setAttribute('name', 'test')
      number.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(component)
    })
  })

  describe('property placeholder', () => {
    it('should set the placeholder text in label', () => {
      number.setProperty('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should set the placeholder text in label', () => {
      number.setProperty('placeholder', 'test1')
      number.setProperty('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set emtpy text if is undefined', () => {
      number.setProperty('placeholder', undefined)
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute placeholder', () => {
    it('should define a label as placeholder', () => {
      number.setAttribute('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should change the text', () => {
      number.setAttribute('placeholder', 'test')
      number.setAttribute('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set empty text if is undefined', () => {
      expect(component).to.contain('label').with.text('')
    })

    it('should set empty text to label when attribute is removed', () => {
      number.setAttribute('placeholder', 'test')
      number.removeAttribute('placeholder')
      // number.SetAndRemoveAttribute('placeholder', 'test')
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute readonly', () => {
    it('should define attribute in child number', () => {
      number.setAttribute('readonly', 'readonly')
      expect(component).to.contain('input').to.have.attribute('readonly')
    })

    it('should remove attribute from child input', () => {
      number.removeAttribute('readonly')
      expect(component).to.contain('input').not.have.attribute('readonly')
    })
  })

  describe('attribute disabled', () => {
    it('should define attribute in child input', () => {
      number.setAttribute('disabled')
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child input', () => {
      number.setAttribute('disabled')
      number.removeAttribute('disabled')
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
    it('should be invalid if typed nothing', () => {
      number.setAttribute('required')
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be invalid if typed an invalid value', () => {
      number.setAttribute('required')
      number.typeValue('test')
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should validate if typed 0', () => {
      number.setAttribute('required')
      number.typeValue(0)
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })

    it('should validate if valid typed a number', () => {
      number.setAttribute('required')
      number.typeValue(1)
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })
  })

  describe('property value', () => {
    it('should return undefined by default', () => {
      expect(component).to.have.value(undefined)
    })

    it('should get undefined when it is setted some string', () => {
      component.value = 'teste'
      expect(component).to.have.value(undefined)
    })

    it('should get number when it is setted numbers', () => {
      component.value = 123
      expect(component).to.have.value(123)
    })

    it('should get number when it is setted string', () => {
      component.value = '123'
      expect(component).to.have.value(123)
    })

    it('should get undefined when it is setted empty string', () => {
      component.value = ''
      expect(component).to.have.value(undefined)
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      number.setAttribute('value', 123)
      expect(component).to.have.value(123)
    })

    it('should set value as number when value is string', () => {
      number.setAttribute('value', '123')
      expect(component).to.have.value(123)
    })

    it('should set property value when attribute is removed', () => {
      number.removeAttribute('value')
      expect(component).to.have.value(undefined)
    })

    it('should set undefined if found strings', () => {
      number.setAttribute('value', '2')
      component.value = '123a'
      expect(component).to.have.value(undefined)
    })

    it('should set undefined if attribute is null', () => {
      number.setAttribute('value', '2')
      component.value = ''
      expect(component).to.have.value(undefined)
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

  describe('attribute min', () => {
    it('should apply attribute min to label', () => {
      number.setAttribute('min', '0')
      expect(component.label).to.have.attribute('min', '0')
    })

    it('should be invalid if filled with invalid value', () => {
      number.setAttribute('min', '0')
      number.setAttribute('required')
      component.value = -10
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('min')
    })

    it('should be valid if filled with valid value', () => {
      number.setAttribute('min', '0')
      number.setAttribute('required')
      component.value = 1
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('min')
    })
  })

  describe('attribute max', () => {
    it('should apply attribute max to label', () => {
      number.setAttribute('max', '100')
      expect(component.label).to.have.attribute('max', '100')
    })

    it('should be invalid if filled with invalid value', () => {
      number.setAttribute('max', '100')
      number.setAttribute('required')
      component.value = 101
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('max')
    })

    it('should be valid if filled with valid value', () => {
      number.setAttribute('max', '100')
      number.setAttribute('required')
      component.value = 100
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('max')
    })
  })

  describe('attribute step', () => {
    it('should increment without value on ArrowUp, using default step', () => {
      component.input.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowUp'}))
      expect(component).to.have.value(1)
    })

    it('should increment value on ArrowUp using default step', () => {
      component.value = 10
      component.input.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowUp'}))
      expect(component).to.have.value(11)
    })

    it('should increment using step', () => {
      number.setAttribute('step', '10')
      component.value = 10
      component.input.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowUp'}))
      expect(component).to.have.value(20)
    })
  })

  describe('attribute currency', () => {
    it('should have 2 decimal places by default', () => {
      number.setAttribute('currency')
      component.value = '10'
      expect(component.input).to.have.value('10,00')
    })

    it('should be displayed numbers as decimal places', () => {
      number.setAttribute('currency', 3)
      component.value = '10,000'
      expect(component.input).to.have.value('10,000')
    })

    it('should replace dot by comma', () => {
      number.setAttribute('currency', 2)
      component.value = '10.70'
      expect(component.input).to.have.value('10,70')
    })
  })

  describe('attribute decimal', () => {
    it('should get value with decimal places by default', () => {
      number.setAttribute('decimal')
      component.value = '10.1'
      expect(component.input).to.have.value('10,10')
    })

    it('should be displayed numbers as decimal places', () => {
      number.setAttribute('decimal', '3')
      component.value = '10'
      expect(component.input).to.have.value('10,000')
    })

    it('should replace dot by comma', () => {
      number.setAttribute('decimal', '2')
      component.value = '10.70'
      expect(component.input).to.have.value('10,70')
    })
  })

  describe('attribute percentage', () => {
    it('should set string when value is string', () => {
      number.setAttribute('percentage')
      number.typeValue('0')
      expect(component.mask).to.have.text('0 %')
      expect(component.input).to.have.value('0')
      expect(component).to.have.value(0)
    })

    it('should set undefined when value is invalid', () => {
      number.setAttribute('percentage')
      number.typeValue('t1')
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('')
      expect(component).to.have.value(undefined)
    })

    it('should set undefined when string is empty', () => {
      number.setAttribute('percentage')
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('')
      expect(component).to.have.value(undefined)
    })

    it('should set value in percentage when setted decimal value', () => {
      number.setAttribute('percentage')
      number.setValue(0.01)
      expect(component.mask).to.have.text('1 %')
      expect(component.input).to.have.value('1')
      expect(component).to.have.value(0.01)
    })

    it('should set value in percentage when setted integer value', () => {
      number.setAttribute('percentage')
      number.setValue(1)
      expect(component.input).to.have.value('100')
      expect(component.mask).to.have.text('100 %')
      expect(component).to.have.value(1)
    })

    it('should receive numbers above hundreds', () => {
      number.setAttribute('percentage')
      number.setValue(1182)
      expect(component.input).to.have.value('118200')
      expect(component.mask).to.have.text('118200 %')
      expect(component).to.have.value(1182)
    })

    it('should receive math expressions', () => {
      number.setAttribute('percentage')
      number.setValue('1*2')
      expect(component.input).to.have.value('200')
      expect(component.mask).to.have.text('200 %')
      expect(component).to.have.value(2)
    })

    it('should set decimal value when value is string numeric', () => {
      number.setAttribute('percentage')
      number.typeValue('1')
      expect(component.input).to.have.value('1')
      expect(component.mask).to.have.text('1 %')
      expect(component).to.have.value(0.01)
    })

    it('should set new value when value is changed', () => {
      number.setAttribute('percentage')
      number.typeValue('1')
      number.typeValue('2')
      expect(component.mask).to.have.text('2 %')
      expect(component.input).to.have.value('2')
      expect(component).to.have.value(0.02)
    })
  })
})

function loadComponent() {
  require('minimalist').number
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

  component = document.createElement('mn-number')

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const NumberPageObject = require('./number.po.js')
  number = new NumberPageObject(component)
}
