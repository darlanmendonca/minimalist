import chai, {expect} from 'chai'
import Form from './form.component.js'
import InputText from '../input-text/input-text.component.js'
import {renderHTML} from '../spec.utils.js'

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

  test('should create element using html', () => {
    document.body.innerHTML = '<mn-form />'
    const element = document.querySelector('mn-form').cloneNode(true)

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
    const scene = renderHTML `
      <mn-form>
        <mn-input-text label="test"></mn-input-text>
      </mn-form>
    `
    const element = scene.querySelector('mn-form').cloneNode(true)

    expect(element.inputs)
      .to.be.be.an('array')
      .with.length(1)
  })

  test('should have a getter to data', () => {
    const scene = renderHTML `
      <mn-form>
        <mn-input-text name="lorem" value="test"></mn-input-text>
        <mn-input-text name="ipsum"></mn-input-text>
      </mn-form>
    `
    const element = scene.querySelector('mn-form').cloneNode(true)

    expect(element.data)
      .to.be.an('object')
      .deep.equal({
        lorem: 'test',
        ipsum: undefined,
      })
  })

  test('should validate with valid inputs', () => {
    const element = new Form()

    expect(element.validate()).to.be.true
  })

  test('should not validate with invalid inputs', () => {
    const scene = renderHTML `
      <mn-form>
        <mn-input-text name="lorem" required="true"></mn-input-text>
      </mn-form>
    `
    const element = scene.querySelector('mn-form').cloneNode(true)

    expect(element.validate()).to.be.false
  })
})
