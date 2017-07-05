/* global describe, it, before, beforeEach */
const {expect} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))

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
      expect(component).to.have.style('border-radius', '0 !important')
    })

    it('should have a overflow', () => {
      expect(component).to.have.style('overflow', 'auto')
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
