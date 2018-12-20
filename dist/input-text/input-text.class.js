'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentClass = require('../component/component.class.js');

var _componentClass2 = _interopRequireDefault(_componentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MnInputText extends _componentClass2.default {
  connectedCallback() {
    super.empty();
    this.setStyle();
    super.setChildren('label');
    super.setChildren('input', { autocomplete: 'off' });
    this.setInputEvents();
    super.setAttributes();
  }

  static get observedAttributes() {
    return ['label', 'value', 'multiple', 'name', 'placeholder', 'disabled', 'readonly', 'maxlength', 'autocapitalize', 'autofocus', 'pattern'];
  }

  setStyle() {
    this.classList.add('mn-input-text');
  }

  setInputEvents() {
    this.inputChild.addEventListener('focus', () => {
      this.classList.add('focus');
    });

    this.inputChild.addEventListener('blur', () => {
      this.classList.remove('focus');
      this.classList.toggle('has-value', this.hasValue);
    });

    this.inputChild.addEventListener('input', event => {
      const element = event.currentTarget.parentNode;
      const closestForm = this.closest('mn-form') || this.closest('form');

      if (closestForm && closestForm.classList.contains('submitted')) {
        element.validate();
      }
    });
  }

  get validations() {
    return {
      required: () => !this.hasValue,
      pattern: () => {
        const reg = new RegExp(this.getAttribute('pattern'));

        return this.hasValue ? !reg.test(this.value) : false;
      }
    };
  }

  validate() {
    const validations = {};

    for (const attribute of Object.keys(this.validations)) {
      const hasAttribute = this.hasAttribute(attribute);
      const attributeIsInvalid = this.validations[attribute]();

      if (hasAttribute && attributeIsInvalid) {
        this.classList.add(attribute);
        validations[attribute] = true;
      } else {
        this.classList.remove(attribute);
      }
    }

    const isInvalid = Object.values(validations).some(item => item === true);

    isInvalid ? this.classList.add('invalid') : this.classList.remove('invalid');
  }

  focus() {
    this.inputChild.focus();
  }

  blur() {
    this.inputChild.blur();
  }

  get pattern() {
    return this.inputChild.pattern || undefined;
  }

  set pattern(value) {
    value ? this.inputChild.setAttribute('pattern', value) : this.inputChild.removeAttribute('pattern');
  }

  get label() {
    return this.labelChild.textContent;
  }

  set label(value = '') {
    this.labelChild.textContent = value;
  }

  get hasValue() {
    return !(this.value === undefined || this.value === null || this.value === '' || Array.isArray(this.value) && !this.value.length);
  }

  get multiple() {
    return this.inputChild.multiple;
  }

  set multiple(value) {
    if (JSON.parse(value) !== this.is('multiple')) {
      this.setAttribute('multiple', JSON.parse(value));
    }
    this.inputChild.multiple = JSON.parse(value);
  }

  get value() {
    return !this.is('multiple') ? this.inputChild.value : this.inputChild.value.replace(/\s+/g, ' ').trim().split(/,\s?/);
  }

  set value(value = '') {
    this.inputChild.value = Array.isArray(value) ? value.join(', ') : value;
    this.inputChild.dispatchEvent(new Event('change'));
    this.classList.toggle('has-value', this.hasValue);
  }

  get name() {
    return this.inputChild.getAttribute('name');
  }

  set name(value) {
    value ? this.inputChild.setAttribute('name', value) : this.inputChild.removeAttribute('name');
  }

  get placeholder() {
    return this.inputChild.getAttribute('placeholder');
  }

  set placeholder(value) {
    this.inputChild.setAttribute('placeholder', value);
  }

  get disabled() {
    return this.inputChild.disabled;
  }

  set disabled(value) {
    if (JSON.parse(value) !== this.is('disabled')) {
      this.setAttribute('disabled', JSON.parse(value));
    }
    this.inputChild.disabled = JSON.parse(value);
  }

  get readonly() {
    return this.inputChild.readOnly;
  }

  set readonly(value) {
    if (JSON.parse(value) !== this.is('readonly')) {
      this.setAttribute('readonly', JSON.parse(value));
    }
    this.inputChild.readOnly = JSON.parse(value);
  }

  get maxlength() {
    return this.inputChild.getAttribute('maxlength');
  }

  set maxlength(value) {
    this.inputChild.setAttribute('maxlength', value);
  }

  get autocapitalize() {
    return this.inputChild.getAttribute('autocapitalize');
  }

  set autocapitalize(value) {
    this.inputChild.setAttribute('autocapitalize', value);
  }

  get autofocus() {
    return this.inputChild.getAttribute('autofocus') || undefined;
  }

  set autofocus(value) {
    value ? this.inputChild.setAttribute('autofocus', value) : this.inputChild.removeAttribute('autofocus');
  }
}

window.customElements.define('mn-input-text', MnInputText);

exports.default = MnInputText;