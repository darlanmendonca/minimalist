'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentClass = require('../component/component.class.js');

var _componentClass2 = _interopRequireDefault(_componentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MnHighlight extends _componentClass2.default {
  connectedCallback() {
    super.empty();
    this.setStyle();
    super.setAttributes();
    this.textContent = 'wow';
  }

  static get observedAttributes() {
    return [];
  }

  setStyle() {
    this.classList.add('mn-highlight');
  }
}

window.customElements.define('mn-highlight', MnHighlight);

exports.default = MnHighlight;