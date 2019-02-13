import chai, {expect} from 'chai'
import Backdrop from './backdrop.class.js'

chai.use(require('chai-dom'))

describe('Backdrop', () => {
  test('should be an es6 class', () => {
    expect(Backdrop.toString().startsWith('class')).to.be.true
  })

  test('should add class to body on create', () => {
    Backdrop.create()

    expect(document.body).to.have.class('mn-backdrop')
  })

  test('should add class to visible state', () => {
    Backdrop.show()

    expect(document.body).to.have.class('mn-backdrop-visible')
  })

  test('should remove class to visible state', () => {
    Backdrop.show()
    Backdrop.hide()

    expect(document.body).to.not.have.class('mn-backdrop-visible')
  })
})
