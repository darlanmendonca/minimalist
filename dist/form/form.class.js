'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentClass = require('../component/component.class.js');

var _componentClass2 = _interopRequireDefault(_componentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MnForm extends _componentClass2.default {
  connectedCallback() {
    super.empty();
    this.setStyle();
    super.setChildren('form');
    super.setAttributes();
  }

  static get observedAttributes() {
    return ['name', 'disabled', 'readonly'];
  }

  setStyle() {
    this.classList.add('mn-form');
  }
}

window.customElements.define('mn-form', MnForm);

exports.default = MnForm;