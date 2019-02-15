import chai, {expect} from 'chai'
import InputEmail from './input-email.component.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-html'))

describe('InputEmail', () => {
  test('should be an es6 class', () => {
    expect(InputEmail.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new InputEmail()

    expect(element).to.be.instanceof(InputEmail)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-input-email')

    expect(element).to.be.instanceof(InputEmail)
  })

  test('should create element using html', () => {
    document.body.innerHTML = '<mn-input-email></mn-input-email>'
    const element = document.querySelector('mn-input-email').cloneNode(true)

    expect(element).to.be.instanceof(InputEmail)
  })

  test('should add css classes to host before render', () => {
    const element = new InputEmail()
    element.beforeRender()

    expect(element).to.have.class('mn-input-text')
    expect(element).to.have.class('mn-input-email')
  })

  test('should render a label and an input', () => {
    const element = new InputEmail()

    expect(element.render()).html.to.equal(`
      <label></label>
      <input type="email" />
    `)
  })
})
