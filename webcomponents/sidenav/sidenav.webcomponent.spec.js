/* global describe, it, before, beforeEach */
const {expect} = require('chai')
  .use(require('chai-dom'))

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
