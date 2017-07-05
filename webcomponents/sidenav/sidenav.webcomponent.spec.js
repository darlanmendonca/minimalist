/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let component

describe('mn-sidenav (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)

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
      expect(component).to.have.style('overflow', 'auto')
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
  })
})

function loadComponent() {
  // require('minimalist').sidenav
}

function cleanView() {
  const sidenav = document.querySelector('sidenav')

  if (sidenav) {
    sidenav.parentNode.removeChild(sidenav)
  }
}

function createComponent() {
  component = document.createElement('mn-sidenav')
  document.body.appendChild(component)
}
