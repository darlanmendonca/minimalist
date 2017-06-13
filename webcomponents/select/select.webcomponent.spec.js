/* global describe, it, before, beforeEach */
const {expect} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))

let select // page object defined in method setPageObject
let component

describe('mn-select (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnSelect = window.customElements.get('mn-select')
      component = new MnSelect()
      expect(component).to.be.instanceof(MnSelect)
    })

    it('should work with document.createElement()', () => {
      const MnSelect = window.customElements.get('mn-select')
      component = document.createElement('mn-select')
      expect(component).to.be.instanceof(MnSelect)
    })
  })

  describe('component', () => {
    it('should have the .mn-select class', () => {
      expect(component).to.have.class('mn-select')
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
    it('should be undefined by default', () => {
      expect(component).to.have.value(undefined)
    })

    it('should be undefined when set a invalid value', () => {
      select.setProperty('value', 'teste')
      expect(component).to.have.value(undefined)
    })

    it('should be undefined when set a empty string', () => {
      select.setProperty('value', '')
      expect(component).to.have.value(undefined)
    })

    it('should be undefined when set undefined', () => {
      select.setProperty('value', undefined)
      expect(component).to.have.value(undefined)
    })

    it('should be undefined when set null', () => {
      select.setProperty('value', null)
      expect(component).to.have.value(undefined)
    })

    it('should be a string when set by option value', () => {
      select.setProperty('value', 'stark')
      expect(component).to.have.value('stark')
    })

    it('should be a string when set by option text', () => {
      select.setProperty('value', 'Stark')
      expect(component).to.have.value('stark')
    })

    it('should be a string when set by option text without value', () => {
      select.addOption('Baratheon')
      select.setProperty('value', 'Baratheon')
      expect(component).to.have.value('Baratheon')
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      select.setAttribute('value', 'lannister')
      expect(component).to.have.value('lannister')
    })

    it('should set property value when attribute is removed', () => {
      select.setAttribute('value', 'Lannister')
      select.removeAttribute('value')
      expect(component).to.have.value(undefined)
    })
  })
})

function loadComponent() {
  // require('minimalist').select
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

  component = document.createElement('mn-select')

  const options = [
    'Stark',
    'Lannister',
    'Targaryen',
  ]

  options.forEach(value => {
    const option = document.createElement('option')
    option.textContent = value
    option.setAttribute('value', value.toLowerCase())
    component.appendChild(option)
  })

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const SelectPageObject = require('./select.po.js')
  select = new SelectPageObject(component)
}
