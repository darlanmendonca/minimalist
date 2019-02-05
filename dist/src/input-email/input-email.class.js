'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputTextClass = require('../input-text/input-text.class.js');

var _inputTextClass2 = _interopRequireDefault(_inputTextClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MnInputEmail = class MnInputEmail extends _inputTextClass2.default {
  connectedCallback() {
    super.empty();
    super.setStyle();
    this.setStyle();
    super.setChildren('label');
    super.setChildren('input');
    this.setInput();
    super.setInputEvents();
    this.setAttributes();
  }

  setStyle() {
    this.classList.add('mn-input-email');
  }

  setInput() {
    this.inputChild.setAttribute('type', 'email');
    const defaultPattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*';
    this.setAttribute('pattern', this.getAttribute('pattern') || defaultPattern);
  }
};


window.customElements.define('mn-input-email', MnInputEmail);

exports.default = MnInputEmail;