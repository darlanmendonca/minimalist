/* global describe, it, before, beforeEach */
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
      number.setAttribute('required')
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should be invalid if typed an invalid value', () => {
      number.setAttribute('required')
      number.writeText('test')
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('required')
    })

    it('should validate if typed 0', () => {
      number.setAttribute('required')
      number.writeText(0)
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })

    it('should validate if typed a valid number', () => {
      number.setAttribute('required')
      number.writeText(1)
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })

    it('should validate if attribute was removed', () => {
      number.setAttribute('required', '')
      number.removeAttribute('required')
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('required')
    })

    it('should validate if value string is accept', () => {
      number.setProperty('required', '')
      number.writeText('1')
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
      number.setProperty('value', 'teste')
      expect(component).to.have.value(undefined)
    })

    it('should get number when it is setted numbers', () => {
      number.setProperty('value', 123)
      expect(component).to.have.value(123)
    })

    it('should get number when it is setted string', () => {
      number.setProperty('value', '123')
      expect(component).to.have.value(123)
    })

    it('should get undefined when it is setted empty string', () => {
      number.setProperty('value', '')
      expect(component).to.have.value(undefined)
    })
  })

  describe('attribute value', () => {
    it('should accept number as value', () => {
      number.setAttribute('value', 123)
      expect(component).to.have.value(123)
    })

    it('should accept float number as value', () => {
      number.setAttribute('value', '123.5')
      expect(component).to.have.value(123.5)
    })

    it('should unset value when remove attribute', () => {
      number.removeAttribute('value')
      expect(component).to.have.value(undefined)
    })

    it('should set undefined if enter a invalid number', () => {
      number.setAttribute('value', '2')
      number.writeText('123a')
      expect(component).to.have.value(undefined)
    })

    it('should set undefined if type nothing', () => {
      number.setAttribute('value', '2')
      number.writeText('')
      expect(component).to.have.value(undefined)
    })
  })

  describe('attribute autofocus', () => {
    it('should set attribute on child number', () => {
      number.setAttribute('autofocus')
      expect(component.input).to.have.attribute('autofocus')
    })

    it('should unset attribute from child number', () => {
      number.setAttribute('autofocus')
      number.removeAttribute('autofocus')
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
      number.writeText(-10)
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('min')
    })

    it('should be valid if filled with valid value', () => {
      number.setAttribute('min', '0')
      number.setAttribute('required')
      number.writeText(1)
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
      number.writeText(101)
      component.validate()
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('max')
    })

    it('should be valid if filled with valid value', () => {
      number.setAttribute('max', '100')
      number.setAttribute('required')
      number.writeText(100)
      component.validate()
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('max')
    })
  })

  describe('attribute step', () => {
    it('should increment without value on ArrowUp, using default step', () => {
      number.pressArrowUp()
      expect(component).to.have.value(1)
    })

    it('should increment value on ArrowUp using default step', () => {
      number.writeText(10)
      number.pressArrowUp()
      expect(component).to.have.value(11)
    })

    it('should increment using step', () => {
      number.setAttribute('step', '10')
      number.writeText(10)
      number.pressArrowUp()
      expect(component).to.have.value(20)
    })
  })

  describe('attribute currency', () => {
    it('should display number with 2 float precision', () => {
      number.setAttribute('currency')
      number.writeText('10')
      expect(component.input).to.have.value('10,00')
      expect(component).to.have.value(10)
    })

    it('should display number with 2 float precision defined', () => {
      number.setAttribute('currency')
      number.setAttribute('precision', 3)
      number.writeText('10.000')
      expect(component.input).to.have.value('10,000')
    })

    it('should replace dot by comma', () => {
      number.setAttribute('currency')
      number.writeText('10.70')
      expect(component.input).to.have.value('10,70')
    })
  })

  describe('attribute precision', () => {
    it('should be display integer number with precision defined', () => {
      number.setAttribute('precision', '3')
      number.writeText('10')
      expect(component.input).to.have.value('10,000')
      expect(component).to.have.value(10)
    })

    it('should be display float numbers with precision defined', () => {
      number.setAttribute('precision', '3')
      number.writeText('10.5')
      expect(component.input).to.have.value('10,500')
      expect(component).to.have.value(10.5)
    })
  })

  describe('attribute percentage', () => {
    it('should set string when value is string', () => {
      number.setAttribute('percentage')
      number.writeText('0')
      expect(component.mask).to.have.text('0 %')
      expect(component.input).to.have.value('0')
      expect(component).to.have.value(0)
    })

    it('should set undefined when value is invalid', () => {
      number.setAttribute('percentage')
      number.writeText('t1')
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
      number.writeText(1)
      expect(component.mask).to.have.text('1 %')
      expect(component.input).to.have.value('1')
      expect(component).to.have.value(0.01)
    })

    it('should set value in percentage when setted integer value', () => {
      number.setAttribute('percentage')
      number.writeText(100)
      expect(component.mask).to.have.text('100 %')
      expect(component.input).to.have.value('100')
      expect(component).to.have.value(1)
    })

    it('should receive numbers above hundreds', () => {
      number.setAttribute('percentage')
      number.writeText(1182)
      expect(component.mask).to.have.text('1182 %')
      expect(component.input).to.have.value('1182')
      expect(component).to.have.value(11.82)
    })

    it('should receive math expressions', () => {
      number.setAttribute('percentage')
      number.writeText('1*2')
      expect(component.mask).to.have.text('2 %')
      expect(component.input).to.have.value('2')
      expect(component).to.have.value(0.02)
    })

    it('should set decimal value when value is string numeric', () => {
      number.setAttribute('percentage')
      number.writeText('1')
      expect(component.mask).to.have.text('1 %')
      expect(component.input).to.have.value('1')
      expect(component).to.have.value(0.01)
    })

    it('should set new value when value is changed', () => {
      number.setAttribute('percentage')
      number.writeText('1')
      number.writeText('2')
      expect(component.mask).to.have.text('2 %')
      expect(component.input).to.have.value('2')
      expect(component).to.have.value(0.02)
    })
  })

  describe('increment values', () => {
    it('should increment undefined value', () => {
      number.pressArrowUp()
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('1')
      expect(component).to.have.value(1)
    })

    it('should increment a value', () => {
      number.writeText('10')
      number.pressArrowUp(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('14')
      expect(component).to.have.value(14)
    })

    it('should increment a value using step attribute', () => {
      number.setAttribute('step', '10')
      number.writeText('10')
      number.pressArrowUp(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('50')
      expect(component).to.have.value(50)
    })

    it('should increment a value using precision attribute', () => {
      number.setAttribute('precision', '2')
      number.writeText('5')
      number.pressArrowUp(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('9,00')
      expect(component).to.have.value(9)
    })

    it('should increment undefined value with percentage', () => {
      number.setAttribute('percentage')
      number.pressArrowUp()
      expect(component.mask).to.have.text('1 %')
      expect(component.input).to.have.value('1')
      expect(component).to.have.value(0.01)
    })

    it('should increment a value with percentage', () => {
      number.setAttribute('percentage')
      number.writeText('1')
      number.pressArrowUp(4)
      expect(component.mask).to.have.text('5 %')
      expect(component.input).to.have.value('5')
      expect(component).to.have.value(0.05)
    })

    it('should increment a value with percentage and step attribute', () => {
      number.setAttribute('percentage')
      number.setAttribute('step', '10')
      number.writeText('1')
      number.pressArrowUp(4)
      expect(component.mask).to.have.text('41 %')
      expect(component.input).to.have.value('41')
      expect(component).to.have.value(0.41)
    })

    it('should increment a value with percentage and precision attribute', () => {
      number.setAttribute('percentage')
      number.setAttribute('precision', '2')
      number.writeText('1')
      number.pressArrowUp(4)
      expect(component.mask).to.have.text('5,00 %')
      expect(component.input).to.have.value('5,00')
      expect(component).to.have.value(0.05)
    })

    it('should increment undefined value with currency', () => {
      number.setAttribute('currency')
      number.pressArrowUp()
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('1,00')
      expect(component).to.have.value(1)
    })

    it('should increment a value with currency', () => {
      number.setAttribute('currency')
      number.writeText('1.1')
      number.pressArrowUp(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('5,10')
      expect(component).to.have.value(5.1)
    })

    it('should increment a value with currency and step attribute', () => {
      number.setAttribute('currency')
      number.setAttribute('step', '10')
      number.writeText('1')
      number.pressArrowUp(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('41,00')
      expect(component).to.have.value(41)
    })

    it('should increment a value with currency and precision attribute', () => {
      number.setAttribute('currency')
      number.setAttribute('precision', '3')
      number.writeText('1')
      number.pressArrowUp(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('5,000')
      expect(component).to.have.value(5)
    })
  })

  describe('decrement values', () => {
    it('should decrement undefined value', () => {
      number.pressArrowDown()
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('-1')
      expect(component).to.have.value(-1)
    })

    it('should decrement a value', () => {
      number.writeText('10')
      number.pressArrowDown(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('6')
      expect(component).to.have.value(6)
    })

    it('should decrement a value using step attribute', () => {
      number.setAttribute('step', '10')
      number.writeText('10')
      number.pressArrowDown(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('-30')
      expect(component).to.have.value(-30)
    })

    it('should decrement a value using precision attribute', () => {
      number.setAttribute('precision', '2')
      number.writeText('5')
      number.pressArrowDown(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('1,00')
      expect(component).to.have.value(1)
    })

    it('should decrement undefined value with percentage', () => {
      number.setAttribute('percentage')
      number.pressArrowDown()
      expect(component.mask).to.have.text('-1 %')
      expect(component.input).to.have.value('-1')
      expect(component).to.have.value(-0.01)
    })

    it('should decrement a value with percentage', () => {
      number.setAttribute('percentage')
      number.writeText('1')
      number.pressArrowDown(4)
      expect(component.mask).to.have.text('-3 %')
      expect(component.input).to.have.value('-3')
      expect(component).to.have.value(-0.03)
    })

    it('should decrement a value with percentage and step attribute', () => {
      number.setAttribute('percentage')
      number.setAttribute('step', '10')
      number.writeText('1')
      number.pressArrowDown(4)
      expect(component.mask).to.have.text('-39 %')
      expect(component.input).to.have.value('-39')
      expect(component).to.have.value(-0.39)
    })

    it('should decrement a value with percentage and precision attribute', () => {
      number.setAttribute('percentage')
      number.setAttribute('precision', '2')
      number.writeText('1')
      number.pressArrowDown(4)
      expect(component.mask).to.have.text('-3,00 %')
      expect(component.input).to.have.value('-3,00')
      expect(component).to.have.value(-0.03)
    })

    it('should decrement undefined value with currency', () => {
      number.setAttribute('currency')
      number.pressArrowDown()
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('-1,00')
      expect(component).to.have.value(-1)
    })

    it('should decrement a value with currency', () => {
      number.setAttribute('currency')
      number.writeText('1.1')
      number.pressArrowDown(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('-2,90')
      expect(component).to.have.value(-2.90)
    })

    it('should decrement a value with currency and step attribute', () => {
      number.setAttribute('currency')
      number.setAttribute('step', '10')
      number.writeText('1')
      number.pressArrowDown(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('-39,00')
      expect(component).to.have.value(-39)
    })

    it('should decrement a value with currency and precision attribute', () => {
      number.setAttribute('currency')
      number.setAttribute('precision', '3')
      number.writeText('1')
      number.pressArrowDown(4)
      expect(component.mask).to.have.text('')
      expect(component.input).to.have.value('-3,000')
      expect(component).to.have.value(-3)
    })
  })
})

function loadComponent() {
  // require('minimalist').number
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
