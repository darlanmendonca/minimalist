import chai, {expect, spy} from 'chai'
import Button from './button.component.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-html'))
  .use(require('chai-spies'))

describe('Button', () => {
  test('should be an es6 class', () => {
    expect(Button.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new Button()

    expect(element).to.be.instanceof(Button)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-button')

    expect(element).to.be.instanceof(Button)
  })

  test('should add css class mn-button to host before render', () => {
    const element = new Button()
    element.beforeRender()

    expect(element).to.have.class('mn-button')
  })

  test('should add a tabindex to host before render', () => {
    const element = new Button()
    element.beforeRender()

    expect(element).to.have.attribute('tabindex', '0')
  })

  test('should render html content', () => {
    const element = new Button()
    element.innerHTML = '<div>lorem ipsum</div>'

    expect(element.render()).html.to.equal('<div>lorem ipsum</div>')
  })

  test('should blur on click', () => {
    const element = new Button()
    spy.on(element, 'blur')
    element.onClick()

    expect(element.blur).to.have.been.called()
  })
})
