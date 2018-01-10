/* global describe, it, beforeEach */
const {expect} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))

let hidden // page object defined in method setPageObject
let component

describe('mn-hidden (webcomponent)', () => {
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnHidden = window.customElements.get('mn-hidden')
      component = new MnHidden()
      expect(component).to.be.instanceof(MnHidden)
    })

    it('should work with document.createElement()', () => {
      const MnHidden = window.customElements.get('mn-hidden')
      component = document.createElement('mn-hidden')
      expect(component).to.be.instanceof(MnHidden)
    })
  })

  describe('component', () => {
    it('should have the .mn-input class', () => {
      expect(component).to.have.class('mn-input')
    })

    it('should have the .mn-hidden class', () => {
      expect(component).to.have.class('mn-hidden')
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
    it('should have type hidden by default', () => {
      expect(component.input).to.have.attribute('type', 'hidden')
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
    it('should return undefined when it is undefined', () => {
      expect(component).to.have.value(undefined)
    })

    it('should be undfined when it is setted with undefined', () => {
      hidden.setProperty('value', undefined)
      expect(component).to.have.value(undefined)
    })

    it('should be undfined when it is setted with null', () => {
      hidden.setProperty('value', null)
      expect(component).to.have.value(undefined)
    })

    it('should setter and getter as string', () => {
      hidden.setProperty('value', 'test')
      expect(component).to.have.value('test')
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      hidden.setAttribute('value', 'test')
      expect(component).to.have.value('test')
    })

    it('should set property value when attribute is removed', () => {
      hidden.removeAttribute('value')
      expect(component).to.have.value(undefined)
    })
  })

  describe('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      hidden.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(component)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      hidden.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(component)
    })

    it('should undefine form getter (name) if component name was removed', () => {
      hidden.setAttribute('name', 'test')
      hidden.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if component name was removed', () => {
      hidden.setAttribute('name', 'test')
      hidden.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if component name changed', () => {
      hidden.setAttribute('name', 'test')
      hidden.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(component)
    })

    it('should redefine form getter (id) if component name changed', () => {
      hidden.setAttribute('name', 'test')
      hidden.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(component)
    })
  })

  describe('attribute disabled', () => {
    it('should define attribute in child password', () => {
      hidden.setAttribute('disabled')
      expect(component.input).to.have.attribute('disabled')
    })

    it('should remove attribute from child password', () => {
      hidden.removeAttribute('disabled')
      expect(component.input).to.not.have.attribute('disabled')
    })
  })
})

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

  component = document.createElement('mn-hidden')

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const HiddenPageObject = require('./hidden.po.js')
  hidden = new HiddenPageObject(component)
}
