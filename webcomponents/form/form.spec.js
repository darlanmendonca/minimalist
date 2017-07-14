/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-spies'))
  .use(require('chai-things'))

let form
let component

describe('mn-form (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnForm = window.customElements.get('mn-form')
      component = new MnForm()
      expect(component).to.be.instanceof(MnForm)
    })

    it('should work with document.createElement()', () => {
      const MnForm = window.customElements.get('mn-form')
      component = document.createElement('mn-form')
      expect(component).to.be.instanceof(MnForm)
    })
  })

  describe('component', () => {
    it('should have the .mn-form class', () => {
      expect(component).to.have.class('mn-form')
    })
  })

  describe('method validate', () => {
    it('should have the method', () => {
      expect(component).to.have.property('validate')
      expect(component.validate).to.be.a('function')
    })
  })

  describe('method submit', () => {
    it('should have the method', () => {
      expect(component).to.have.property('submit')
      expect(component.submit).to.be.a('function')
    })

    it('should validate when called', () => {
      const validate = spy.on(component, 'validate')
      component.submit()
      expect(validate).to.have.been.called()
    })

    it('should add class submitted', () => {
      component.submit()
      expect(component).to.have.class('submitted')
    })
  })

  describe('property data', () => {
    it('should be an object', () => {
      expect(component).to.have.property('data')
      expect(component.data).to.be.an('object')
    })

    it('should have keys from input names', () => {
      expect(component.data).to.have.keys('username', 'password')
    })

    it('should apply values to keys', () => {
      component.username.value = 'john'
      component.password.value = 'snow'
      expect(component.data).to.have.property('username', 'john')
      expect(component.data).to.have.property('password', 'snow')
    })
  })

  describe('attribute disabled', () => {
    it('should disabled childrens', () => {
      form.setAttribute('disabled')
      expect(component.inputs).all.have.attribute('disabled')
    })

    it('should listen changes', () => {
      form.setAttribute('disabled')
      form.removeAttribute('disabled')
      expect(component.inputs).all.not.have.attribute('disabled')
    })
  })

  describe('attribute readonly', () => {
    it('should readonly childrens', () => {
      form.setAttribute('readonly')
      expect(component.inputs).all.have.attribute('readonly')
    })

    it('should listen changes', () => {
      form.setAttribute('readonly')
      form.removeAttribute('readonly')
      expect(component.inputs).all.not.have.attribute('readonly')
    })
  })
})

function loadComponent() {
  // require('minimalist').form
}

function cleanView() {
  const form = document.querySelector('mn-form')

  if (form) {
    form.parentNode.removeChild(form)
  }
}

function createComponent() {
  component = document.createElement('mn-form')
  document.body.appendChild(component)

  const username = document.createElement('mn-input')
  component.appendChild(username)
  username.setAttribute('name', 'username')

  const password = document.createElement('mn-password')
  component.appendChild(password)
  password.setAttribute('name', 'password')
}

function setPageObject() {
  const FormPageObject = require('./form.po.js')
  form = new FormPageObject(component)
}
