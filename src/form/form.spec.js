import chai, {expect} from 'chai'
import Form from './form.component.js'
import InputText from '../input-text/input-text.component.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-html'))

describe('Form', () => {
  test('should be an es6 class', () => {
    expect(Form.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new Form()

    expect(element).to.be.instanceof(Form)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-form')

    expect(element).to.be.instanceof(Form)
  })

  test('should add css class mn-form to host before render', () => {
    const element = new Form()
    element.beforeRender()

    expect(element).to.have.class('mn-form')
  })

  test('should render html content', () => {
    const element = new Form()
    element.innerHTML = '<div>lorem ipsum</div>'

    expect(element.render()).html.to.equal('<div>lorem ipsum</div>')
  })

  test('should have a getter to inputs', () => {
    const element = new Form()
    const input = new InputText()
    element.appendChild(input)
    input.connectedCallback()
    element.connectedCallback()

    expect(element.inputs)
      .to.be.an('array')
      .with.length(1)
  })

  test('should have a getter to data', () => {
    const element = new Form()
    const input = new InputText()
    input.setAttribute('name', 'lorem')
    input.setAttribute('value', 'test')
    element.appendChild(input)
    input.connectedCallback()
    const inputUndefined = new InputText()
    inputUndefined.setAttribute('name', 'ipsum')
    element.appendChild(inputUndefined)
    inputUndefined.connectedCallback()
    element.connectedCallback()

    expect(element.data)
      .to.be.an('object')
      .deep.equal({
        lorem: 'test',
        ipsum: undefined,
      })
  })

  test('should validate as true if dont have any invalid child', () => {
    const element = new Form()

    expect(element.validate()).to.be.true
  })
})
