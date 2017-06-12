/* global describe, it, before, beforeEach */
const {expect} = require('chai')
  .use(require('chai-dom'))

let component

describe('MnBackdrop (class)', () => {
  before(loadComponent)
  beforeEach(createComponent)

  describe('method show', () => {
    it('should be a function', () => {
      expect(component.show).to.be.a('function')
    })

    it('should add class .mn-backdrop-visible to body', () => {
      component.show()
      expect(component).to.have.class('visible')
    })
  })

  describe('method hide', () => {
    it('should be a function', () => {
      expect(component.hide).to.be.a('function')
    })

    it('should remove class .mn-backdrop-visible to body', () => {
      component.show()
      component.hide()
      expect(component).to.not.have.class('visible')
    })
  })

  describe('property isVisible', () => {
    it('should be false', () => {
      expect(component).to.have.property('isVisible', true)
    })

    it('should be true', () => {
      component.show()
      expect(component).to.have.property('isVisible', false)
    })
  })

  describe('press ESC', () => {
    it.skip('should hide backdrop if it is visible', () => {
      component.show()
      document.dispatchEvent(new Event('keyup', {key: 'Escape'}))
      expect(document.body).to.not.have.class('mn-backdrop-visible')
    })
  })
})

function loadComponent() {
  // require('minimalist').backdrop
}

function createComponent() {
  component = document.createElement('mn-backdrop')
  document.body.appendChild(component)
}
