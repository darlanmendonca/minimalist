import chai, {expect} from 'chai'
import MnBackdrop from './backdrop.class.js'

chai.use(require('chai-dom'))

describe('backdrop', () => {
  test('should have method show', () => {
    expect(MnBackdrop.show).to.be.an('function')
  })

  test('should have method hide', () => {
    expect(MnBackdrop.hide).to.be.an('function')
  })

  test('should alternate backdrop visibility', () => {
    expect(document.body).to.not.have.class('mn-backdrop-visible')
    MnBackdrop.show()
    expect(document.body).to.have.class('mn-backdrop-visible')
    MnBackdrop.hide()
    expect(document.body).to.not.have.class('mn-backdrop-visible')
  })
})
