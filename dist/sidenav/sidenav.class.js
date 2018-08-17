'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentClass = require('../component/component.class.js');

var _componentClass2 = _interopRequireDefault(_componentClass);

var _backdropClass = require('../backdrop/backdrop.class.js');

var _backdropClass2 = _interopRequireDefault(_backdropClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MnSidenav extends _componentClass2.default {
  connectedCallback() {
    this.setStyle();
    this.setShowEvents();
    this.setHideEvents();
    this.setToggleEvents();
  }

  setStyle() {
    this.classList.add('mn-sidenav');
    this.classList.add('mn-card');
    document.body.classList.add('mn-backdrop');
  }

  setShowEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[show-sidenav="${this.id}"]`)) {
        event.stopPropagation();
        this.show();
      }
    });
  }

  setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-sidenav="${this.id}"]`)) {
        event.stopPropagation();
        this.toggle();
      }
    });
  }

  setHideEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[hide-sidenav]')) {
        event.stopPropagation();
        this.hide();
      }
    });

    document.addEventListener('click', event => {
      const clickOutside = !event.target.matches('[show-sidenav]') && !event.target.matches('[hide-sidenav]') && !event.target.matches('[toggle-sidenav]') && !event.target.closest('mn-sidenav');
      const sidebarVisible = this.classList.contains('visible');

      if (clickOutside && sidebarVisible) {
        this.hide();
      }
    });

    document.addEventListener('keyup', event => {
      const esc = event.key === 'Escape';
      const isVisible = this.classList.contains('visible');

      if (esc && isVisible) {
        this.hide();
      }
    });
  }

  show() {
    this.classList.add('visible');
    document.body.classList.add('mn-sidenav-visible');
    _backdropClass2.default.show();
  }

  hide() {
    document.body.classList.remove('mn-sidenav-visible');
    this.classList.remove('visible');
    _backdropClass2.default.hide();
  }

  toggle() {
    this.classList.toggle('visible') ? this.show() : this.hide();
  }
}

exports.default = MnSidenav;
window.customElements.define('mn-sidenav', MnSidenav);