/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let date // page object defined in method setPageObject
let component

describe('mn-date (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnDate = window.customElements.get('mn-date')
      component = new MnDate()
      expect(component).to.be.instanceof(MnDate)
    })

    it('should work with document.createElement()', () => {
      const MnDate = window.customElements.get('mn-date')
      component = document.createElement('mn-date')
      expect(component).to.be.instanceof(MnDate)
    })
  })

  describe('component', () => {
    it('should have the .mn-date class', () => {
      expect(component).to.have.class('mn-date')
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
      date.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(component)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      date.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(component)
    })

    it('should undefine form getter (name) if component name was removed', () => {
      date.setAttribute('name', 'test')
      date.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      date.setAttribute('name', 'test')
      date.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      date.setAttribute('name', 'test')
      date.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      date.setAttribute('name', 'test')
      date.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(component)
    })
  })

  describe('property placeholder', () => {
    it('should set the placeholder text in label', () => {
      date.setProperty('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should set the placeholder text in label', () => {
      date.setProperty('placeholder', 'test1')
      date.setProperty('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set emtpy text if is undefined', () => {
      date.setProperty('placeholder', undefined)
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute placeholder', () => {
    it('should define a label as placeholder', () => {
      date.setAttribute('placeholder', 'test')
      expect(component).to.contain('label').with.text('test')
    })

    it('should change the text', () => {
      date.setAttribute('placeholder', 'test')
      date.setAttribute('placeholder', 'test2')
      expect(component).to.contain('label').with.text('test2')
    })

    it('should set empty text if is undefined', () => {
      expect(component).to.contain('label').with.text('')
    })

    it('should set empty text to label when attribute is removed', () => {
      date.setAttribute('placeholder', 'test')
      date.removeAttribute('placeholder')
      expect(component).to.contain('label').with.text('')
    })
  })

  describe('attribute readonly', () => {
    it('should define attribute in child number', () => {
      date.setAttribute('readonly', 'readonly')
      expect(component).to.contain('input').to.have.attribute('readonly')
    })

    it('should remove attribute from child input', () => {
      date.removeAttribute('readonly')
      expect(component).to.contain('input').not.have.attribute('readonly')
    })
  })

  describe('attribute disabled', () => {
    it('should define attribute in child input', () => {
      date.setAttribute('disabled')
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child input', () => {
      date.setAttribute('disabled')
      date.removeAttribute('disabled')
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

  // describe('attribute required', () => {
  //   it('should be invalid if typed nothing', () => {
  //     date.setAttribute('required')
  //     component.validate()
  //     expect(component).to.have.class('invalid')
  //     expect(component).to.have.class('required')
  //   })

  //   it('should be invalid if typed an invalid value', () => {
  //     date.setAttribute('required')
  //     date.typeValue('test')
  //     component.validate()
  //     expect(component).to.have.class('invalid')
  //     expect(component).to.have.class('required')
  //   })

  //   it('should validate if typed 0', () => {
  //     date.setAttribute('required')
  //     date.typeValue(0)
  //     component.validate()
  //     expect(component).to.not.have.class('invalid')
  //     expect(component).to.not.have.class('required')
  //   })

  //   it('should validate if typed a valid number', () => {
  //     date.setAttribute('required')
  //     date.typeValue(1)
  //     component.validate()
  //     expect(component).to.not.have.class('invalid')
  //     expect(component).to.not.have.class('required')
  //   })

  //   it('should validate if attribute was removed', () => {
  //     date.setAttribute('required', '')
  //     date.removeAttribute('required')
  //     component.validate()
  //     expect(component).to.not.have.class('invalid')
  //     expect(component).to.not.have.class('required')
  //   })

  //   it('should validate if value string is accept', () => {
  //     date.setProperty('required', '')
  //     date.typeValue('1')
  //     component.validate()
  //     expect(component).to.not.have.class('invalid')
  //     expect(component).to.not.have.class('required')
  //   })
  // })

  // describe('property value', () => {
  //   it('should return undefined by default', () => {
  //     expect(component).to.have.value(undefined)
  //   })

  //   it('should get undefined when it is setted some string', () => {
  //     date.setProperty('value', 'teste')
  //     expect(component).to.have.value(undefined)
  //   })

  //   it('should get number when it is setted numbers', () => {
  //     date.setProperty('value', 123)
  //     expect(component).to.have.value(123)
  //   })

  //   it('should get number when it is setted string', () => {
  //     date.setProperty('value', '123')
  //     expect(component).to.have.value(123)
  //   })

  //   it('should get undefined when it is setted empty string', () => {
  //     date.setProperty('value', '')
  //     expect(component).to.have.value(undefined)
  //   })
  // })

  // describe('attribute value', () => {
  //   it('should accept number as value', () => {
  //     date.setAttribute('value', 123)
  //     expect(component).to.have.value(123)
  //   })

  //   it('should accept float number as value', () => {
  //     date.setAttribute('value', '123.5')
  //     expect(component).to.have.value(123.5)
  //   })

  //   it('should unset value when remove attribute', () => {
  //     date.removeAttribute('value')
  //     expect(component).to.have.value(undefined)
  //   })

  //   it('should set undefined if enter a invalid number', () => {
  //     date.setAttribute('value', '2')
  //     date.typeValue('123a')
  //     expect(component).to.have.value(undefined)
  //   })

  //   it('should set undefined if type nothing', () => {
  //     date.setAttribute('value', '2')
  //     date.typeValue('')
  //     expect(component).to.have.value(undefined)
  //   })
  // })

  // describe('attribute autofocus', () => {
  //   it('should set attribute on child number', () => {
  //     date.setAttribute('autofocus')
  //     expect(component.input).to.have.attribute('autofocus')
  //   })

  //   it('should unset attribute from child number', () => {
  //     date.setAttribute('autofocus')
  //     date.removeAttribute('autofocus')
  //     expect(component.input).to.not.have.attribute('autofocus')
  //   })
  // })

  describe('attribute min', () => {
    it('should be valid if filled a valid date', () => {
      date.setAttribute('min', '2010-10-05')
      date.setAttribute('value', '2015-09-13')
      component.validate()
      expect(component).to.have.attribute('min', '2010-10-05')
      expect(component).to.have.value('2015-09-13T00:00:00.000Z')
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('min')
    })

    it('should be invalid if filled with invalid value', () => {
      date.setAttribute('min', '2010-10-05')
      date.setAttribute('value', '2010-10-04')
      component.validate()
      expect(component).to.have.attribute('min', '2010-10-05')
      expect(component).to.have.value('2010-10-04T00:00:00.000Z')
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('min')
    })
  })

  describe('attribute max', () => {
    it('should be valid if filled a valid date', () => {
      date.setAttribute('max', '2017-05-06')
      date.setAttribute('value', '2015-06-10')
      component.validate()
      expect(component).to.have.attribute('max', '2017-05-06')
      expect(component).to.have.value('2015-06-10T00:00:00.000Z')
      expect(component).to.not.have.class('invalid')
      expect(component).to.not.have.class('min')
    })

    it('should be invalid if filled with invalid value', () => {
      date.setAttribute('max', '2017-05-06')
      date.setAttribute('value', '2017-05-07')
      component.validate()
      expect(component).to.have.attribute('max', '2017-05-06')
      expect(component).to.have.value('2017-05-07T00:00:00.000Z')
      expect(component).to.have.class('invalid')
      expect(component).to.have.class('min')
    })
  })

  // describe('increment values', () => {
  //   it('should increment undefined value', () => {
  //     date.pressArrowUp()
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('1')
  //     expect(component).to.have.value(1)
  //   })

  //   it('should increment a value', () => {
  //     date.typeValue('10')
  //     date.pressArrowUp(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('14')
  //     expect(component).to.have.value(14)
  //   })

  //   it('should increment a value using step attribute', () => {
  //     date.setAttribute('step', '10')
  //     date.typeValue('10')
  //     date.pressArrowUp(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('50')
  //     expect(component).to.have.value(50)
  //   })

  //   it('should increment a value using precision attribute', () => {
  //     date.setAttribute('precision', '2')
  //     date.typeValue('5')
  //     date.pressArrowUp(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('9,00')
  //     expect(component).to.have.value(9)
  //   })

  //   it('should increment undefined value with percentage', () => {
  //     date.setAttribute('percentage')
  //     date.pressArrowUp()
  //     expect(component.mask).to.have.text('1 %')
  //     expect(component.input).to.have.value('1')
  //     expect(component).to.have.value(0.01)
  //   })

  //   it('should increment a value with percentage', () => {
  //     date.setAttribute('percentage')
  //     date.typeValue('1')
  //     date.pressArrowUp(4)
  //     expect(component.mask).to.have.text('5 %')
  //     expect(component.input).to.have.value('5')
  //     expect(component).to.have.value(0.05)
  //   })

  //   it('should increment a value with percentage and step attribute', () => {
  //     date.setAttribute('percentage')
  //     date.setAttribute('step', '10')
  //     date.typeValue('1')
  //     date.pressArrowUp(4)
  //     expect(component.mask).to.have.text('41 %')
  //     expect(component.input).to.have.value('41')
  //     expect(component).to.have.value(0.41)
  //   })

  //   it('should increment a value with percentage and precision attribute', () => {
  //     date.setAttribute('percentage')
  //     date.setAttribute('precision', '2')
  //     date.typeValue('1')
  //     date.pressArrowUp(4)
  //     expect(component.mask).to.have.text('5,00 %')
  //     expect(component.input).to.have.value('5,00')
  //     expect(component).to.have.value(0.05)
  //   })

  //   it('should increment undefined value with currency', () => {
  //     date.setAttribute('currency')
  //     date.pressArrowUp()
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('1,00')
  //     expect(component).to.have.value(1)
  //   })

  //   it('should increment a value with currency', () => {
  //     date.setAttribute('currency')
  //     date.typeValue('1.1')
  //     date.pressArrowUp(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('5,10')
  //     expect(component).to.have.value(5.1)
  //   })

  //   it('should increment a value with currency and step attribute', () => {
  //     date.setAttribute('currency')
  //     date.setAttribute('step', '10')
  //     date.typeValue('1')
  //     date.pressArrowUp(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('41,00')
  //     expect(component).to.have.value(41)
  //   })

  //   it('should increment a value with currency and precision attribute', () => {
  //     date.setAttribute('currency')
  //     date.setAttribute('precision', '3')
  //     date.typeValue('1')
  //     date.pressArrowUp(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('5,000')
  //     expect(component).to.have.value(5)
  //   })
  // })

  // describe('decrement values', () => {
  //   it('should decrement undefined value', () => {
  //     date.pressArrowDown()
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('-1')
  //     expect(component).to.have.value(-1)
  //   })

  //   it('should decrement a value', () => {
  //     date.typeValue('10')
  //     date.pressArrowDown(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('6')
  //     expect(component).to.have.value(6)
  //   })

  //   it('should decrement a value using step attribute', () => {
  //     date.setAttribute('step', '10')
  //     date.typeValue('10')
  //     date.pressArrowDown(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('-30')
  //     expect(component).to.have.value(-30)
  //   })

  //   it('should decrement a value using precision attribute', () => {
  //     date.setAttribute('precision', '2')
  //     date.typeValue('5')
  //     date.pressArrowDown(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('1,00')
  //     expect(component).to.have.value(1)
  //   })

  //   it('should decrement undefined value with percentage', () => {
  //     date.setAttribute('percentage')
  //     date.pressArrowDown()
  //     expect(component.mask).to.have.text('-1 %')
  //     expect(component.input).to.have.value('-1')
  //     expect(component).to.have.value(-0.01)
  //   })

  //   it('should decrement a value with percentage', () => {
  //     date.setAttribute('percentage')
  //     date.typeValue('1')
  //     date.pressArrowDown(4)
  //     expect(component.mask).to.have.text('-3 %')
  //     expect(component.input).to.have.value('-3')
  //     expect(component).to.have.value(-0.03)
  //   })

  //   it('should decrement a value with percentage and step attribute', () => {
  //     date.setAttribute('percentage')
  //     date.setAttribute('step', '10')
  //     date.typeValue('1')
  //     date.pressArrowDown(4)
  //     expect(component.mask).to.have.text('-39 %')
  //     expect(component.input).to.have.value('-39')
  //     expect(component).to.have.value(-0.39)
  //   })

  //   it('should decrement a value with percentage and precision attribute', () => {
  //     date.setAttribute('percentage')
  //     date.setAttribute('precision', '2')
  //     date.typeValue('1')
  //     date.pressArrowDown(4)
  //     expect(component.mask).to.have.text('-3,00 %')
  //     expect(component.input).to.have.value('-3,00')
  //     expect(component).to.have.value(-0.03)
  //   })

  //   it('should decrement undefined value with currency', () => {
  //     date.setAttribute('currency')
  //     date.pressArrowDown()
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('-1,00')
  //     expect(component).to.have.value(-1)
  //   })

  //   it('should decrement a value with currency', () => {
  //     date.setAttribute('currency')
  //     date.typeValue('1.1')
  //     date.pressArrowDown(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('-2,90')
  //     expect(component).to.have.value(-2.90)
  //   })

  //   it('should decrement a value with currency and step attribute', () => {
  //     date.setAttribute('currency')
  //     date.setAttribute('step', '10')
  //     date.typeValue('1')
  //     date.pressArrowDown(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('-39,00')
  //     expect(component).to.have.value(-39)
  //   })

  //   it('should decrement a value with currency and precision attribute', () => {
  //     date.setAttribute('currency')
  //     date.setAttribute('precision', '3')
  //     date.typeValue('1')
  //     date.pressArrowDown(4)
  //     expect(component.mask).to.have.text('')
  //     expect(component.input).to.have.value('-3,000')
  //     expect(component).to.have.value(-3)
  //   })
  // })
})

function loadComponent() {
  // require('minimalist').date
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

  component = document.createElement('mn-date')

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const DatePageObject = require('./date.po.js')
  date = new DatePageObject(component)
}
