import chai, {expect} from 'chai'
import Image from './image.component.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-html'))

describe('Image', () => {
  test('should be an es6 class', () => {
    expect(Image.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new Image()

    expect(element).to.be.instanceof(Image)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-image')

    expect(element).to.be.instanceof(Image)
  })

  test('should create element using html', () => {
    document.body.innerHTML = '<mn-image />'
    const element = document.querySelector('mn-image').cloneNode(true)

    expect(element).to.be.instanceof(Image)
  })

  test('should add css class mn-image to host before render', () => {
    const element = new Image()
    element.beforeRender()

    expect(element).to.have.class('mn-image')
  })

  test('should render an image', () => {
    const element = new Image()

    expect(element.render()).html.to.equal('<img />')
  })
})
