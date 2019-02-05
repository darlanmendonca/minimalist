'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentClass = require('../component/component.class.js');

var _componentClass2 = _interopRequireDefault(_componentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MnForm = class MnForm extends _componentClass2.default {
  connectedCallback() {
    this.setStyle();
    super.setAttributes();
  }

  static get observedAttributes() {
    return ['disabled', 'readonly'];
  }

  setStyle() {
    this.classList.add('mn-form');
  }

  validate() {
    this.dispatchEvent(new Event('validate'));
    this.inputs.filter(input => !input.disabled && !input.readonly).forEach(input => input.validate());

    const isInvalid = !this.querySelector('.invalid');
    return isInvalid;
  }

  get disabled() {
    return this.is('disabled');
  }

  set disabled(value) {
    if (value && !this.hasAttribute('disabled')) {
      this.setAttribute('disabled', value);
    }

    this.inputs.forEach(input => input.disabled = value);
  }

  get readonly() {
    return this.is('readonly');
  }

  set readonly(value) {
    if (value && !this.hasAttribute('readonly')) {
      this.setAttribute('readonly', value);
    }

    this.inputs.forEach(input => input.readonly = value);
  }

  get inputs() {
    return Array.from(this.querySelectorAll('.mn-input-text'));
  }

  get data() {
    return this.inputs.reduce((object, element) => Object.assign(object, { [element.name]: element.value }), {});
  }
};


window.customElements.define('mn-form', MnForm);

exports.default = MnForm;