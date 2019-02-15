import chai, {expect} from 'chai'
import InputPassword from './input-password.component.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-html'))

describe('InputPassword', () => {
  test('should be an es6 class', () => {
    expect(InputPassword.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new InputPassword()

    expect(element).to.be.instanceof(InputPassword)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-input-password')

    expect(element).to.be.instanceof(InputPassword)
  })

  test('should create element using html', () => {
    document.body.innerHTML = '<mn-input-password></mn-input-password>'
    const element = document.querySelector('mn-input-password').cloneNode(true)

    expect(element).to.be.instanceof(InputPassword)
  })

  test('should add css classes to host before render', () => {
    const element = new InputPassword()
    element.beforeRender()

    expect(element).to.have.class('mn-input-text')
    expect(element).to.have.class('mn-input-password')
  })

  test('should render a label and an input', () => {
    const element = new InputPassword()

    expect(element.render()).html.to.equal(`
      <label></label>
      <input type="password" />
      <button></button>
    `)
  })
})
