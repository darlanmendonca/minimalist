import chai, {expect, spy} from 'chai'
import Dialog from './dialog.component.js'
import Backdrop from '../backdrop/backdrop.class.js'

chai
  .use(require('chai-dom'))
  .use(require('chai-html'))
  .use(require('chai-spies'))

describe('Dialog', () => {
  test('should be an es6 class', () => {
    expect(Dialog.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new Dialog()

    expect(element).to.be.instanceof(Dialog)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-dialog')

    expect(element).to.be.instanceof(Dialog)
  })

  test('should create element using html', () => {
    document.body.innerHTML = '<mn-dialog />'
    const element = document.querySelector('mn-dialog').cloneNode(true)

    expect(element).to.be.instanceof(Dialog)
  })

  test('should add css class mn-dialog to host before render', () => {
    const element = new Dialog()
    element.beforeRender()

    expect(element).to.have.class('mn-dialog')
  })

  test('should create a backdrop before render', () => {
    const element = new Dialog()
    spy.on(Backdrop, 'create')
    element.beforeRender()

    expect(Backdrop.create).to.have.been.called()
  })

  test('should render html content', () => {
    const element = new Dialog()
    const innerHTML = '<div>lorem ipsum</div>'
    element.innerHTML = innerHTML

    expect(element.render()).html.to.equal(`
      <div class="mn-section">
        ${innerHTML}
      </div>
    `)
  })

  test('should render html content with padding classes', () => {
    const element = new Dialog()
    element.classList.add('padding')
    element.classList.add('padding-title')
    const innerHTML = '<div>lorem ipsum</div>'
    element.innerHTML = innerHTML

    expect(element.render()).html.to.equal(`
      <div class="mn-section padding padding-title">
        ${innerHTML}
      </div>
    `)
  })

  test('should open dialog', () => {
    const element = new Dialog()
    element.open()

    expect(element).to.have.class('visible')
    expect(document.body).to.have.class('mn-dialog-visible')
  })

  test('should scroll to the top on open dialog', () => {
    const element = new Dialog()
    element.scrollTop = 20
    element.open()

    expect(element.scrollTop).to.be.equal(0)
  })

  test('should display backdrop on open dialog', () => {
    const element = new Dialog()
    spy.on(Backdrop, 'show')
    element.open()

    expect(Backdrop.show).to.have.been.called()
  })

  test('should hide previous dialog visible on open a new dialog', () => {
    const previousDialog = new Dialog()
    document.body.appendChild(previousDialog)
    previousDialog.connectedCallback()
    previousDialog.open()
    const element = new Dialog()
    element.open()

    expect(previousDialog).to.not.have.class('visible')
  })

  test.skip('should emit event open on open dialog', () => {
    const element = new Dialog()
    element.open()

    expect(element).to.emit('open')
  })

  test('should open dialog by [open-dialog] attribute', () => {
    document.body.innerHTML = '<button open-dialog="lorem"></button>'
    const element = new Dialog()
    element.id = 'lorem'
    const button = document.querySelector('button[open-dialog="lorem"]')
    spy.on(element, 'open')
    element.connectedCallback()
    button.click()

    expect(element.open).to.have.been.called()
  })

  test('should close dialog', () => {
    const element = new Dialog()
    element.open()
    element.close()

    expect(element).to.not.have.class('visible')
    expect(document.body).to.not.have.class('mn-dialog-visible')
  })

  test('should hide backdrop on close dialog', () => {
    const element = new Dialog()
    spy.on(Backdrop, 'hide')
    element.close()

    expect(Backdrop.hide).to.have.been.called()
  })

  test.skip('should emit event close on close dialog', () => {
    const element = new Dialog()
    element.close()

    expect(element).to.emit('close')
  })

  test('should close dialog by [close-dialog] attribute', () => {
    document.body.innerHTML = '<button close-dialog></button>'
    const element = new Dialog()
    element.id = 'lorem'
    const button = document.querySelector('button[close-dialog]')
    spy.on(element, 'close')
    element.connectedCallback()
    button.click()

    expect(element.close).to.have.been.called()
  })

  test('should toggle visibility of dialog', () => {
    const element = new Dialog()
    spy.on(element, 'open')
    spy.on(element, 'close')

    element.toggle()
    expect(element.open).to.have.been.called()

    element.toggle()
    expect(element.close).to.have.been.called()
  })

  test('should toggle visibility by [toggle-dialog] attribute', () => {
    document.body.innerHTML = '<button toggle-dialog="lorem"></button>'
    const element = new Dialog()
    element.id = 'lorem'
    const button = document.querySelector('button[toggle-dialog]')
    spy.on(element, 'toggle')
    element.connectedCallback()
    button.click()

    expect(element.toggle).to.have.been.called()
  })
})
