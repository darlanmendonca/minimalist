'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputClass = require('../input/input.class.js');

var _inputClass2 = _interopRequireDefault(_inputClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MnPassword extends _inputClass2.default {
  connectedCallback() {
    super.empty();
    super.setStyle();
    this.setStyle();
    super.setChildren('label');
    super.setChildren('input');
    super.setChildren('button');
    this.setInput();
    super.setInputEvents();
    this.setVisibility();
    this.setAttributes();
  }

  setStyle() {
    this.classList.add('mn-password');
  }

  setInput() {
    this.inputChild.setAttribute('type', 'password');
  }

  setVisibility() {
    this.buttonChild.addEventListener('click', () => this.toggleVisibility());
  }

  toggleVisibility() {
    const isPassword = this.inputChild.getAttribute('type') === 'password';
    const type = isPassword ? 'text' : 'password';

    this.classList.toggle('show-password', isPassword);
    this.inputChild.setAttribute('type', type);
  }
}

window.customElements.define('mn-password', MnPassword);

exports.default = MnPassword;