import chai, {expect, spy} from 'chai'
import MnCore, {setAttribute} from './core.class.js'

chai.use(require('chai-spies'))

class SomeComponent extends MnCore {
  static observedAttributes = ['lorem', 'ipsum']

  render() {
    return '<div></div>'
  }
}

window.customElements.define('ui-some-component', SomeComponent)

describe('MnCore', () => {
  test('should be a es6 class', () => {
    expect(MnCore).to.be.a('function')
    expect(MnCore.toString().startsWith('class')).to.be.true
  })

  test('should extends HTMLElement', () => {
    expect(MnCore.prototype).to.be.an.instanceof(window.HTMLElement)
  })

  test('should have observedAttributes as static property', () => {
    expect(MnCore.observedAttributes).to.deep.equal([])
  })

  test('should have property connected false by default', () => {
    const element = new SomeComponent()

    expect(element.connected).to.be.false
  })

  test('should instanciate using a constructor', () => {
    const element = new SomeComponent()
    expect(element).to.be.instanceof(SomeComponent)
  })

  test('should create element', () => {
    const element = document.createElement('ui-some-component')
    expect(element).to.be.instanceof(SomeComponent)
  })

  test('should set property connected as true on connectedCallback', () => {
    const element = new SomeComponent()
    element.connectedCallback()

    expect(element.connected).to.be.true
  })

  test('should set innerHTML on connectedCallback', () => {
    const element = new SomeComponent()
    element.render = () => '<div>lorem</div>'
    element.connectedCallback()

    expect(element.innerHTML).to.be.equal('<div>lorem</div>')
  })

  test('should not update render on attributeChangedCallback if it is not connected', () => {
    const element = new SomeComponent()
    spy.on(element, 'updateRender')
    element.setAttribute('ipsum', 'some value')

    expect(element.updateRender).to.not.have.been.called()
  })

  test('should update render on attributeChangedCallback if it is connected', () => {
    const element = new SomeComponent()
    element.connected = true
    spy.on(element, 'updateRender')
    element.setAttribute('ipsum', 'some value')

    expect(element.updateRender).to.have.been.called()
  })

  test('should get props object with respective values', () => {
    const element = new SomeComponent()
    element.setAttribute('ipsum', 'some value')

    expect(element.props).to.deep.equal({
      lorem: undefined,
      ipsum: 'some value',
    })
  })

  test('should update each node children on update render', () => {
    const element = new SomeComponent()
    element.innerHTML = '<div></div>'
    spy.on(element, 'updateNode')
    element.updateRender()

    expect(element.updateNode).to.have.been.called()
  })

  test('should set attribute', () => {
    expect(setAttribute('lorem')).to.be.equal('')
    expect(setAttribute('lorem', false)).to.be.equal('')
    expect(setAttribute('lorem', true)).to.be.equal('lorem="true"')
    expect(setAttribute('lorem', 10)).to.be.equal('lorem="10"')
    expect(setAttribute('lorem', 'lorem')).to.be.equal('lorem="lorem"')
  })
})
