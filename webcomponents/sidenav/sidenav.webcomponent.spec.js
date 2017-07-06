/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let sidenav
let component

describe('mn-sidenav (webcomponent)', () => {
  before(loadComponent)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnSidenav = window.customElements.get('mn-sidenav')
      component = new MnSidenav()
      expect(component).to.be.instanceof(MnSidenav)
    })

    it('should work with document.createElement()', () => {
      const MnSidenav = window.customElements.get('mn-sidenav')
      component = document.createElement('mn-sidenav')
      expect(component).to.be.instanceof(MnSidenav)
    })
  })

  describe('component', () => {
    it('should have the .mn-sidenav class', () => {
      expect(component).to.have.class('mn-sidenav')
    })

    it('should have the .mn-card class', () => {
      expect(component).to.have.class('mn-card')
    })

    it('should have a backdrop into body', () => {
      expect(document.body).to.have.class('mn-backdrop')
    })
  })

  describe('css style', () => {
    it('should have a width', () => {
      expect(component).to.have.style('width', '320px')
    })

    it('should have a height', () => {
      expect(component).to.have.style('height', '100vh')
    })

    it('should have a position', () => {
      expect(component).to.have.style('position', 'fixed')
    })

    it('should have a top', () => {
      expect(component).to.have.style('top', '0')
    })

    it.skip('should have a z-index', () => {
      expect(component).to.have.style('z-index', '20')
    })

    it.skip('should have a transform', () => {
      expect(component).to.have.style('transform', 'translate3d(-100%, 0, 0)')
    })

    it('should have a will-change', () => {
      expect(component).to.have.style('will-change', 'transform')
    })

    it('should have a transition', () => {
      expect(component).to.have.style('transition', 'transform .32s ease')
    })

    it('should have a border-radius', () => {
      expect(component).to.have.style('border-radius', '0')
    })

    it('should have a overflow', () => {
      const isWebkit = /WebKit/.test(navigator.userAgent)

      if (isWebkit) {
        expect(component).to.have.style('overflow', 'overlay')
      } else {
        expect(component).to.have.style('overflow', 'auto')
      }
    })
  })

  describe('method open', () => {
    it('should display sidenav', () => {
      component.open()
      expect(component).to.have.class('visible')
      expect(document.body).to.have.class('mn-sidenav-visible')
    })

    it('should display backdrop', () => {
      component.open()
      expect(document.body).to.have.class('mn-backdrop-visible')
    })

    it('should be called on click in button with open-sidenav attribute', () => {
      const open = spy.on(component, 'open')
      sidenav.buttonOpen.click()

      expect(open).to.have.been.called()
    })

    it('should scroll to top', () => {
      sidenav.scroll(300)
      component.open()
      expect(component.scrollTop).to.equal(0)
    })

    it('should scroll to element with class .active', () => {
      let activeElement = sidenav.getElementByIndex(3)
      activeElement.classList.add('active')
      activeElement = sidenav.getPositionTop(activeElement)

      sidenav.scroll(300)
      component.open()

      expect(component.scrollTop).to.equal(activeElement)
    })
  })

  describe('method close', () => {
    it('should hide sidenav', () => {
      component.open()
      component.close()
      expect(component).to.not.have.class('visible')
      expect(document.body).to.not.have.class('mn-sidenav-visible')
    })

    it('should hide backdrop', () => {
      component.open()
      component.close()
      expect(document.body).to.not.have.class('mn-backdrop-visible')
    })

    it('should be called on click in button with close-sidenav attribute', () => {
      const close = spy.on(component, 'close')
      component.open()
      sidenav.buttonClose.click()

      expect(close).to.have.been.called()
    })

    it('should be called when press ESC', () => {
      const close = spy.on(component, 'close')
      component.open()
      sidenav.pressEsc()

      expect(close).to.have.been.called()
    })
  })

  describe('method toggle', () => {
    it('should display sidenav if not visible', () => {
      const open = spy.on(component, 'open')
      component.toggle()
      expect(open).to.have.been.called()
    })

    it('should hide sidenav if visible', () => {
      const close = spy.on(component, 'close')
      component.open()
      component.toggle()
      expect(close).to.have.been.called()
    })

    it('should be called on click in button with toggle-sidenav attribute', () => {
      const toggle = spy.on(component, 'toggle')
      sidenav.buttonToggle.click()
      sidenav.buttonToggle.click()

      expect(toggle).to.have.been.called.twice
    })
  })
})

function loadComponent() {
  // require('minimalist').sidenav
}

function createComponent() {
  component = document.createElement('mn-sidenav')
  component.id = 'menu'

  Array(100)
    .fill(null)
    .forEach(() => {
      const div = document.createElement('div')
      div.textContent = 'test'
      component.appendChild(div)
    })

  document.body.appendChild(component)
}

function setPageObject() {
  const SidenavPageObject = require('./sidenav.po.js')
  sidenav = new SidenavPageObject(component)
}
