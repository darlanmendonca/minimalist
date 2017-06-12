/* global describe, it, beforeEach */
const {expect} = require('chai')
  .use(require('chai-dom'))

let component

describe('MnBackdrop (class)', () => {
  beforeEach(() => {
    const MnBackdrop = window.MnBackdrop
    component = new MnBackdrop()
  })

  describe('.show()', () => {
    it('should be a function', () => {
      expect(component.show).to.be.a('function')
    })

    it('should add class .mn-backdrop-visible to body', () => {
      component.show()
      expect(document.body).to.have.class('mn-backdrop-visible')
    })
  })

  describe('.hide()', () => {
    it('should be a function', () => {
      expect(component.hide).to.be.a('function')
    })

    it('should remove class .mn-backdrop-visible to body', () => {
      component.show()
      component.hide()
      expect(document.body).to.not.have.class('mn-backdrop-visible')
    })
  })

  describe('.isVisible', () => {
    it('should be false', () => {
      expect(component.isVisible).to.be.false
    })

    it('should be true', () => {
      component.show()
      expect(component.isVisible).to.be.true
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
