'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputTextClass = require('../input-text/input-text.class.js');

var _inputTextClass2 = _interopRequireDefault(_inputTextClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MnInputPassword = class MnInputPassword extends _inputTextClass2.default {
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
    this.classList.add('mn-input-password');
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
};


window.customElements.define('mn-input-password', MnInputPassword);

exports.default = MnInputPassword;