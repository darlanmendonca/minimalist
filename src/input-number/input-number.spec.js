import chai, {expect} from 'chai'
import InputNumber from './input-number.component.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-html'))

describe('InputNumber', () => {
  test('should be an es6 class', () => {
    expect(InputNumber.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new InputNumber()

    expect(element).to.be.instanceof(InputNumber)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-input-number')

    expect(element).to.be.instanceof(InputNumber)
  })

  test('should create element using html', () => {
    document.body.innerHTML = '<mn-input-number></mn-input-number>'
    const element = document.querySelector('mn-input-number').cloneNode(true)

    expect(element).to.be.instanceof(InputNumber)
  })

  test('should have validations with support to required, max, and min', () => {
    const element = new InputNumber()

    expect(element.validations).to.have.property('required')
    expect(element.validations).to.have.property('max')
    expect(element.validations).to.have.property('min')
  })

  test('should add css classes to host before render', () => {
    const element = new InputNumber()
    element.beforeRender()

    expect(element).to.have.class('mn-input-text')
    expect(element).to.have.class('mn-input-number')
  })

  test('should render a label and an input', () => {
    const element = new InputNumber()

    expect(element.render()).html.to.equal(`
      <label></label>
      <input />
      <div class="mask"></div>
    `)
  })
})
