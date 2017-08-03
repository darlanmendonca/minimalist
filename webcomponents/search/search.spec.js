/* global describe, it, beforeEach, afterEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let search // page object defined in method setPageObject
let component

describe('mn-search (webcomponent)', () => {
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)
  beforeEach(mockFetch)
  afterEach(() => window.fetch.restore())

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnSearch = window.customElements.get('mn-search')
      component = new MnSearch()
      expect(component).to.be.instanceof(MnSearch)
    })

    it('should work with document.createElement()', () => {
      const MnSearch = window.customElements.get('mn-search')
      component = document.createElement('mn-search')
      expect(component).to.be.instanceof(MnSearch)
    })
  })

  describe('component', () => {
    it('should have the .mn-search class', () => {
      expect(component).to.have.class('mn-search')
    })

    it('should contain a input property', () => {
      expect(component).to.have.property('input')
    })

    it('should contain a input child', () => {
      expect(component.querySelectorAll('input')).to.have.length(1)
    })

    it('should contain a menu property', () => {
      expect(component).to.have.property('menu')
    })

    it('should contain a menu child', () => {
      expect(component.querySelectorAll('menu')).to.have.length(1)
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

  describe('event search', () => {
    it('should be called when type something, and contain query in event', () => {
      component.addEventListener('search', (event) => {
        expect(event).to.have.property('query', 'test')
      })

      search.writeText('test')
    })
  })

  describe('method fetch', () => {
    it('should be a function', () => {
      expect(component.fetch).to.be.a('function')
    })

    it('should add class loading when start', () => {
      const addClass = spy.on(component.classList, 'add')
      search.requestData()
      expect(addClass).to.have.been.called.with('loading')
    })

    it('should remove class loading on response', async () => {
      const removeClass = spy.on(component.classList, 'remove')
      await search.requestData()
      expect(removeClass).to.have.been.called.with('loading')
    })

    it('should return a response', async () => {
      const response = await search.requestData()
      expect(response).to.be.an.instanceof(Response)
    })

    it('should clean the options on response', async () => {
      const cleanOptions = spy.on(component, 'cleanOptions')
      await search.requestData()
      expect(cleanOptions).to.have.been.called()
    })
  })

  describe('options', () => {
    it('should set options manually on response', async () => {
      const response = await search.requestData()
      const json = await response.json()
      search.setOptions(json)
      expect(component.querySelectorAll('option')).to.have.length(3)
    })
  })

  describe('property value', () => {
    it('should be undefined by default', () => {
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.text('')
    })

    it('should be undefined when set a invalid value', () => {
      search.setProperty('value', 'teste')
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.text('')
    })

    it('should be undefined when set a empty string', () => {
      search.setProperty('value', '')
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.text('')
    })

    it('should be undefined when set undefined', () => {
      search.setProperty('value', undefined)
      expect(component).to.have.value(undefined)
      expect(component.input).to.have.text('')
    })

    it('should be a string when set by option value', async () => {
      const response = await search.requestData()
      const json = await response.json()
      search.setOptions(json)
      search.setProperty('value', 'stark')

      expect(component).to.have.value('stark')
      expect(component.input).to.have.value('Stark')
    })

    // it('should be a string when set by option text', () => {
    //   search.setProperty('value', 'Stark')
    //   expect(component).to.have.value('stark')
    //   expect(component.input).to.have.value('Stark')
    // })

    // it('should be a string when set by option text without value', () => {
    //   search.addOption('Baratheon')
    //   search.setProperty('value', 'Baratheon')
    //   expect(component).to.have.value('Baratheon')
    //   expect(component.input).to.have.value('Baratheon')
    // })

    // it('should keep value if enter and delete part of filter', () => {
    //   search.setProperty('value', 'Stark')
    //   search.writeText('St')
    //   expect(component).to.have.value('stark')
    //   expect(component.input).to.have.value('Stark')
    // })

    // it('should be undefined if enter and delete filter completely', () => {
    //   search.setProperty('value', 'Stark')
    //   search.writeText('')
    //   expect(component).to.have.value(undefined)
    //   expect(component.input).to.have.value('')
    // })

    // it('should evaluate to number when set option with numeric string value', () => {
    //   search.addOption('Test', '5')
    //   search.setProperty('value', 'Test')
    //   expect(component).to.have.value(5)
    //   expect(component.input).to.have.value('Test')
    // })

    // it('should evaluate to number when set option with numeric string text', () => {
    //   search.addOption('5')
    //   search.setProperty('value', '5')
    //   expect(component).to.have.value(5)
    //   expect(component.input).to.have.value('5')
    // })

    // it('should evaluate to number when set number instead string', () => {
    //   search.addOption('5')
    //   search.setProperty('value', 5)
    //   expect(component).to.have.value(5)
    //   expect(component.input).to.have.value('5')
    // })

    // it('should evaluate to boolean true', () => {
    //   search.addOption('Test', 'true')
    //   search.setProperty('value', 'Test')
    //   expect(component).to.have.value(true)
    //   expect(component.input).to.have.value('Test')
    // })

    // it('should evaluate to boolean false', () => {
    //   search.addOption('Test', 'false')
    //   search.setProperty('value', 'Test')
    //   expect(component).to.have.value(false)
    //   expect(component.input).to.have.value('Test')
    // })

    // it('should evaluate string object', () => {
    //   search.addOption('Test', '{name: \'targaryen\'}')
    //   search.setProperty('value', 'Test')
    //   expect(component.value).to.deep.equal({name: 'targaryen'})
    //   expect(component.input).to.have.value('Test')
    // })

    // it('should evaluate json object', () => {
    //   search.addOption('Test', '{"name": "targaryen"}')
    //   search.setProperty('value', 'Test')
    //   expect(component.value).to.deep.equal({name: 'targaryen'})
    //   expect(component.input).to.have.value('Test')
    // })

    // it('should evaluate array', () => {
    //   search.addOption('Test', '[1, "2"]')
    //   search.setProperty('value', 'Test')
    //   expect(component.value).to.deep.equal([1, '2'])
    //   expect(component.input).to.have.value('Test')
    // })
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

  component = document.createElement('mn-search')

  form.appendChild(component)
  document.body.appendChild(form)
}

function setPageObject() {
  const PageObject = require('./search.po.js')
  search = new PageObject(component)
}

function mockFetch() {
  const sinon = require('sinon')
  sinon.stub(window, 'fetch')
}
