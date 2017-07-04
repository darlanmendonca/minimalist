module.exports = MNSidenavCustomElement()

function MNSidenavCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    require('@webcomponents/custom-elements')
  }

  if (!window.customElements.get('mn-sidenav')) {
    window.customElements.define('mn-sidenav', require('./sidenav.class.js'))
  }

  return window.customElements.get('mn-sidenav')
}
