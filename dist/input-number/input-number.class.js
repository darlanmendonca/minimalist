'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputTextClass = require('../input-text/input-text.class.js');

var _inputTextClass2 = _interopRequireDefault(_inputTextClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MnInputNumber extends _inputTextClass2.default {
  connectedCallback() {
    super.empty();
    super.setStyle();
    this.setStyle();
    super.setChildren('label');
    super.setChildren('input');
    this.setInputEvents();
    this.setMask();
    this.setTransforms();
    this.setAttributes();
  }

  setStyle() {
    this.classList.add('mn-input-number');
  }

  static get observedAttributes() {
    return ['label', 'value', 'name', 'placeholder', 'disabled', 'readonly', 'autofocus', 'currency', 'precision', 'min', 'max', 'percentage'];
  }

  setTransforms() {
    const transform = () => {
      try {
        const value = eval(this.inputChild.value.replace(/,/g, '.'));
        const isNumber = typeof value === 'number';
        this.inputChild.value = isNumber ? String(value).replace(/\./g, ',') : '';

        const hasPrecision = this.hasAttribute('precision');
        const precision = this.getAttribute('precision') || 0;

        switch (true) {
          case this.is('currency'):
            this.inputChild.value = value.toFixed(precision || 2).replace(/\./g, ',');
            break;

          case hasPrecision:
            this.inputChild.value = value.toFixed(precision).replace(/\./g, ',');
            break;
        }
      } catch (e) {
        this.inputChild.value = '';
      }

      this.updateMask();
    };

    this.inputChild.addEventListener('change', transform);
    this.inputChild.addEventListener('blur', transform);
  }

  setInputEvents() {
    super.setInputEvents();

    const incrementOrDecrement = event => {
      const stepValue = this.is('percentage') ? +this.getAttribute('step') / 100 || 1 / 100 : +this.getAttribute('step') || 1;

      const isArrowUp = event.key === 'ArrowUp';
      const isArrowDown = event.key === 'ArrowDown';

      if (!this.is('readonly') && (isArrowUp || isArrowDown)) {
        event.preventDefault();
        const step = event.shiftKey ? stepValue * 10 : event.altKey ? stepValue / 10 : stepValue;

        const previousValue = this.value || 0;
        const precision = String(step).replace(/\d+\./, '').length;
        let value;

        switch (event.key) {
          case 'ArrowUp':
            value = previousValue + step;
            break;
          case 'ArrowDown':
            value = previousValue - step;
            break;
        }

        this.value = +value.toFixed(precision);
      }
    };

    this.inputChild.addEventListener('keydown', incrementOrDecrement);
  }

  setMask() {
    this.mask = document.createElement('div');
    this.mask.classList.add('mask');
    this.appendChild(this.mask);

    this.inputChild.addEventListener('input', () => {
      this.updateMask();
    });
  }

  updateMask() {
    const hasValue = this.inputChild.value !== '' && !/^\s+$/.test(this.inputChild.value);
    if (this.mask && this.is('percentage')) {
      const text = hasValue ? `${this.inputChild.value} %` : '';
      this.mask.textContent = text;
    }
  }

  set percentage(value) {
    const number = +this.inputChild.value.replace(/,/g, '.');
    value = this.is('percentage') ? number * 100 : number / 100;
    if (number) {
      this.inputChild.value = value;
      this.updateMask();
    }
  }

  get value() {
    const number = +this.inputChild.value.replace(/,/g, '.');
    const isNumber = this.inputChild.value && !Number.isNaN(number);

    return isNumber ? this.is('percentage') ? number / 100 : number : undefined;
  }

  set value(value = '') {
    this.inputChild.value = this.is('percentage') ? value * 100 : value;
    this.inputChild.dispatchEvent(new Event('change'));
    this.classList.toggle('has-value', this.hasValue);
  }

  get min() {
    return this.labelChild.hasAttribute('min') ? +this.labelChild.getAttribute('min') : undefined;
  }

  set min(value) {
    value ? this.labelChild.setAttribute('min', value) : this.labelChild.removeAttribute('min');
  }

  get max() {
    return this.labelChild.hasAttribute('max') ? +this.labelChild.getAttribute('max') : undefined;
  }

  set max(value) {
    value ? this.labelChild.setAttribute('max', value) : this.labelChild.removeAttribute('max');
  }

  get validations() {
    return {
      required: super.validations.required,
      max: () => {
        return this.hasValue ? this.value > +this.getAttribute('max') : false;
      },
      min: () => {
        return this.hasValue ? this.value < +this.getAttribute('min') : false;
      }
    };
  }
}

window.customElements.define('mn-input-number', MnInputNumber);

exports.default = MnInputNumber;