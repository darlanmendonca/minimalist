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

    it('should remove class loading when finish', async () => {
      const removeClass = spy.on(component.classList, 'remove')
      await search.requestData()
      expect(removeClass).to.have.been.called.with('loading')
    })

    it('should return a response', async () => {
      const response = await search.requestData()
      expect(response).to.be.an.instanceof(Response)
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
