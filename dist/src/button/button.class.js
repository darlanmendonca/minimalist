'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentClass = require('../component/component.class.js');

var _componentClass2 = _interopRequireDefault(_componentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MnButton = class MnButton extends _componentClass2.default {
  connectedCallback() {
    this.setStyle();
    this.setEvents();
  }

  setStyle() {
    this.classList.add('mn-button');
  }

  setEvents() {
    this.setAttribute('tabindex', '0');
    this.addEventListener('click', () => this.blur());
  }
};


window.customElements.define('mn-button', MnButton);

exports.default = MnButton;