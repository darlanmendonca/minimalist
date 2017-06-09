/* global describe, it, before */
const {expect} = require('chai')
  .use(require('chai-dom'))

let MnBackdrop

describe('MnBackdrop (class)', () => {
  before(() => {
    MnBackdrop = window.MnBackdrop
  })

  describe('.show()', () => {
    it('should be a function', () => {
      expect(MnBackdrop.show).to.be.a('function')
    })

    it('should add class .mn-backdrop-visible to body', () => {
      MnBackdrop.show()
      expect(document.body).to.have.class('mn-backdrop-visible')
    })
  })

  describe('.hide()', () => {
    it('should be a function', () => {
      expect(MnBackdrop.hide).to.be.a('function')
    })

    it('should remove class .mn-backdrop-visible to body', () => {
      MnBackdrop.show()
      MnBackdrop.hide()
      expect(document.body).to.not.have.class('mn-backdrop-visible')
    })
  })

  describe('.isVisible', () => {
    it('should be false', () => {
      expect(MnBackdrop.isVisible).to.be.false
    })

    it('should be true', () => {
      MnBackdrop.show()
      expect(MnBackdrop.isVisible).to.be.true
    })
  })

  describe('press ESC', () => {
    it.skip('should hide backdrop if it is visible', () => {
      MnBackdrop.show()
      document.dispatchEvent(new Event('keyup', {key: 'Escape'}))
      expect(document.body).to.not.have.class('mn-backdrop-visible')
    })
  })
})
