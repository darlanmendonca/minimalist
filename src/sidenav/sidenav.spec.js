import chai, {expect, spy} from 'chai'
import Sidenav from './sidenav.component.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-html'))
  .use(require('chai-spies'))

describe('Sidenav', () => {
  test('should be an es6 class', () => {
    expect(Sidenav.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new Sidenav()

    expect(element).to.be.instanceof(Sidenav)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-sidenav')

    expect(element).to.be.instanceof(Sidenav)
  })

  test('should add css class mn-sidenav and mn-section to host before render', () => {
    const element = new Sidenav()
    element.beforeRender()

    expect(element).to.have.class('mn-sidenav')
    expect(element).to.have.class('mn-section')
  })

  test('should render html content', () => {
    const element = new Sidenav()
    element.innerHTML = '<div>lorem ipsum</div>'

    expect(element.render()).html.to.equal('<div>lorem ipsum</div>')
  })

  test('should display sidenav and backdrop on show', () => {
    const element = new Sidenav()
    element.scrollTop = 10
    element.show()

    expect(element).to.have.class('visible')
    expect(element.scrollTop).to.be.equal(0)
    expect(document.body).to.have.class('mn-sidenav-visible')
    expect(document.body).to.have.class('mn-backdrop-visible')
  })

  test('should stop propagation event on show from a button[show-sidenav]', () => {
    const element = new Sidenav()
    const button = document.createElement('button')
    button.setAttribute('show-sidenav', 'lorem')
    element.id = 'lorem'
    window.lorem = element
    const event = {target: button, stopPropagation: function() {}}
    spy.on(event, 'stopPropagation')
    element.show(event)

    expect(event.stopPropagation).to.have.been.called()

  })

  test('should hide sidenav and backdrop on hide', () => {
    const element = new Sidenav()
    element.show()
    element.hide()

    expect(element).to.not.have.class('visible')
    expect(document.body).to.not.have.class('mn-sidenav-visible')
    expect(document.body).to.not.have.class('mn-backdrop-visible')
  })
})
