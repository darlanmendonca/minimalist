'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _numberClass = require('./number.class.js');

var _numberClass2 = _interopRequireDefault(_numberClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(require('chai-dom')).use(require('chai-spies'));

let element;

describe('mn-number', () => {
  beforeEach(createElement);

  test('should export a class', () => {
    (0, _chai.expect)(_numberClass2.default).to.be.a('function');
  });

  test('should instanciate using a constructor', () => {
    const element = new _numberClass2.default();
    (0, _chai.expect)(element).to.be.instanceof(_numberClass2.default);
  });

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-number');
    (0, _chai.expect)(element).to.be.instanceof(_numberClass2.default);
  });

  test('should have css class .mn-number', () => {
    (0, _chai.expect)(element).to.have.class('mn-number');
  });

  test('should listen attribute changes', () => {
    (0, _chai.expect)(_numberClass2.default.observedAttributes).to.deep.equal(['label', 'value', 'name', 'placeholder', 'disabled', 'readonly', 'autofocus', 'currency', 'precision', 'min', 'max']);
  });

  test('should have a label child', () => {
    (0, _chai.expect)(element).to.have.a.property('labelChild');
  });

  test('should have a input child', () => {
    (0, _chai.expect)(element).to.have.a.property('inputChild');
  });

  test('should have a setter/getter to label', () => {
    element.label = 'lorem';
    (0, _chai.expect)(element.label).to.be.equal('lorem');
    element.label = undefined;
    (0, _chai.expect)(element.label).to.be.equal('');

    element.setAttribute('label', 'ipsum');
    (0, _chai.expect)(element.label).to.be.equal('ipsum');
  });

  test('should have a setter/getter to value', () => {
    element.value = 'lorem';
    (0, _chai.expect)(element.value).to.be.undefined;
    (0, _chai.expect)(element.inputChild).to.have.value('');

    element.value = undefined;
    (0, _chai.expect)(element.value).to.be.undefined;
    (0, _chai.expect)(element.inputChild).to.have.value('');

    element.value = null;
    (0, _chai.expect)(element.value).to.be.undefined;
    (0, _chai.expect)(element.inputChild).to.have.value('');

    element.value = 0;
    (0, _chai.expect)(element.value).to.be.equal(0);
    (0, _chai.expect)(element.inputChild).to.have.value('0');

    element.value = '1';
    (0, _chai.expect)(element.value).to.be.equal(1);
    (0, _chai.expect)(element.inputChild).to.have.value('1');

    element.setAttribute('value', 'ipsum');
    (0, _chai.expect)(element.value).to.be.undefined;
    (0, _chai.expect)(element.inputChild).to.have.value('');

    element.setAttribute('value', 10);
    (0, _chai.expect)(element.value).to.be.equal(10);
    (0, _chai.expect)(element.inputChild).to.have.value('10');
  });

  test('should format precision value', () => {
    element.value = 10;
    (0, _chai.expect)(element.value).to.be.equal(10);
    (0, _chai.expect)(element.inputChild).to.have.value('10');

    element.setAttribute('precision', '3');
    (0, _chai.expect)(element.value).to.be.equal(10);
    (0, _chai.expect)(element.inputChild).to.have.value('10,000');

    element.value = 20;
    (0, _chai.expect)(element.value).to.be.equal(20);
    (0, _chai.expect)(element.inputChild).to.have.value('20,000');
  });

  test('should format currency value', () => {
    element.value = 10;
    (0, _chai.expect)(element.value).to.be.equal(10);
    (0, _chai.expect)(element.inputChild).to.have.value('10');

    element.setAttribute('currency', 'currency');
    (0, _chai.expect)(element.value).to.be.equal(10);
    (0, _chai.expect)(element.inputChild).to.have.value('10,00');

    element.value = 20;
    (0, _chai.expect)(element.value).to.be.equal(20);
    (0, _chai.expect)(element.inputChild).to.have.value('20,00');

    element.setAttribute('currency', 'true');
    (0, _chai.expect)(element.value).to.be.equal(20);
    (0, _chai.expect)(element.inputChild).to.have.value('20,00');

    element.setAttribute('currency', 'false');
    (0, _chai.expect)(element.value).to.be.equal(20);
    (0, _chai.expect)(element.inputChild).to.have.value('20');

    element.setAttribute('precision', '3');
    (0, _chai.expect)(element.value).to.be.equal(20);
    (0, _chai.expect)(element.inputChild).to.have.value('20,000');
  });

  test('should have a setter/getter to name', () => {
    element.name = 'lorem';
    (0, _chai.expect)(element.name).to.be.equal('lorem');
    element.name = undefined;
    (0, _chai.expect)(element.name).to.be.null;

    element.setAttribute('name', 'ipsum');
    (0, _chai.expect)(element.name).to.be.equal('ipsum');
  });

  test('should have a setter/getter to placeholder', () => {
    element.placeholder = 'lorem';
    (0, _chai.expect)(element.placeholder).to.be.equal('lorem');

    element.setAttribute('placeholder', 'ipsum');
    (0, _chai.expect)(element.placeholder).to.be.equal('ipsum');
  });

  test('should have a setter/getter to disabled', () => {
    element.disabled = true;
    (0, _chai.expect)(element.disabled).to.be.true;
    element.disabled = false;
    (0, _chai.expect)(element.disabled).to.be.false;

    element.setAttribute('disabled', 'true');
    (0, _chai.expect)(element.disabled).to.be.true;

    element.setAttribute('disabled', 'false');
    (0, _chai.expect)(element.disabled).to.be.false;
  });

  test('should have a setter/getter to readonly', () => {
    element.readonly = true;
    (0, _chai.expect)(element.readonly).to.be.true;
    element.readonly = false;
    (0, _chai.expect)(element.readonly).to.be.false;

    element.setAttribute('readonly', 'true');
    (0, _chai.expect)(element.readonly).to.be.true;

    element.setAttribute('readonly', 'false');
    (0, _chai.expect)(element.readonly).to.be.false;
  });

  test('should have a setter/getter to autofocus', () => {
    element.autofocus = true;
    (0, _chai.expect)(element.autofocus).to.be.equal('true');
    element.autofocus = undefined;
    (0, _chai.expect)(element.autofocus).to.be.undefined;

    element.setAttribute('autofocus', 'true');
    (0, _chai.expect)(element.autofocus).to.be.equal('true');
  });

  test('should have a setter/getter to min', () => {
    element.min = 10;
    (0, _chai.expect)(element.min).to.be.equal(10);
    element.min = undefined;
    (0, _chai.expect)(element.min).to.be.undefined;

    element.setAttribute('min', '20');
    (0, _chai.expect)(element.min).to.be.equal(20);
  });

  test('should have a setter/getter to max', () => {
    element.max = 10;
    (0, _chai.expect)(element.max).to.be.equal(10);
    element.max = undefined;
    (0, _chai.expect)(element.max).to.be.undefined;

    element.setAttribute('max', '20');
    (0, _chai.expect)(element.max).to.be.equal(20);
  });

  test('should setup attributes on add it to dom', () => {
    element = document.createElement('mn-number');
    element.setAttribute('label', 'lorem');
    element.setAttribute('placeholder', 'ipsum');
    element.setAttribute('value', '10');
    document.body.appendChild(element);

    (0, _chai.expect)(element.label).to.be.equal('lorem');
    (0, _chai.expect)(element.placeholder).to.be.equal('ipsum');
    (0, _chai.expect)(element.value).to.be.equal(10);
  });

  test('should toggle class focus on focus/blur element', () => {
    (0, _chai.expect)(element).to.not.have.class('focus');
    element.inputChild.focus();
    (0, _chai.expect)(element).to.have.class('focus');

    element.inputChild.blur();
    (0, _chai.expect)(element).to.not.have.class('focus');
  });

  test('should toggle class has-value on set value', () => {
    (0, _chai.expect)(element).to.not.have.class('has-value');
    element.value = 'lorem';
    (0, _chai.expect)(element).to.not.have.class('has-value');
    element.value = '';
    (0, _chai.expect)(element).to.not.have.class('has-value');

    element.value = 0;
    (0, _chai.expect)(element).to.have.class('has-value');

    element.value = 10;
    (0, _chai.expect)(element).to.have.class('has-value');
  });

  test('should validate on input event', () => {
    document.body.innerHTL = '';
    const form = document.createElement('form');
    form.appendChild(element);
    document.body.appendChild(form);
    const validate = _chai.spy.on(element, 'validate');

    element.inputChild.dispatchEvent(new Event('input'));
    (0, _chai.expect)(validate).to.not.have.been.called();

    form.classList.add('submitted');

    element.inputChild.dispatchEvent(new Event('input'));
    (0, _chai.expect)(validate).to.have.been.called();
  });

  test('should validate required', () => {
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('required');

    element.setAttribute('required', 'true');
    element.validate();
    (0, _chai.expect)(element).to.have.class('invalid');
    (0, _chai.expect)(element).to.have.class('required');

    element.value = 0;
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('required');
  });

  test('should validate max', () => {
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('max');

    element.setAttribute('max', '10');
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('max');

    element.value = 20;
    element.validate();
    (0, _chai.expect)(element).to.have.class('invalid');
    (0, _chai.expect)(element).to.have.class('max');

    element.value = 5;
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('max');
  });

  test('should validate min', () => {
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('min');

    element.setAttribute('min', '0');
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('min');

    element.value = -10;
    element.validate();
    (0, _chai.expect)(element).to.have.class('invalid');
    (0, _chai.expect)(element).to.have.class('min');

    element.value = 10;
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('min');
  });

  test('should increment value on ArrowUp', () => {
    const ArrowUp = new Event('keydown');
    ArrowUp.key = 'ArrowUp';

    element.inputChild.dispatchEvent(ArrowUp);
    (0, _chai.expect)(element).to.have.value(1);
    element.inputChild.dispatchEvent(ArrowUp);
    (0, _chai.expect)(element).to.have.value(2);

    ArrowUp.shiftKey = true;
    element.inputChild.dispatchEvent(ArrowUp);
    (0, _chai.expect)(element).to.have.value(12);
    element.inputChild.dispatchEvent(ArrowUp);
    (0, _chai.expect)(element).to.have.value(22);

    ArrowUp.shiftKey = false;
    ArrowUp.altKey = true;
    element.inputChild.dispatchEvent(ArrowUp);
    (0, _chai.expect)(element).to.have.value(22.1);
    element.inputChild.dispatchEvent(ArrowUp);
    (0, _chai.expect)(element).to.have.value(22.2);

    element.setAttribute('readonly', 'true');
    element.inputChild.dispatchEvent(ArrowUp);
    (0, _chai.expect)(element).to.have.value(22.2);

    element.setAttribute('readonly', 'false');
    element.inputChild.dispatchEvent(ArrowUp);
    (0, _chai.expect)(element).to.have.value(22.3);
  });

  test('should decrement value on ArrowDown', () => {
    const ArrowDown = new Event('keydown');
    ArrowDown.key = 'ArrowDown';

    element.inputChild.dispatchEvent(ArrowDown);
    (0, _chai.expect)(element).to.have.value(-1);
    element.inputChild.dispatchEvent(ArrowDown);
    (0, _chai.expect)(element).to.have.value(-2);

    ArrowDown.shiftKey = true;
    element.inputChild.dispatchEvent(ArrowDown);
    (0, _chai.expect)(element).to.have.value(-12);
    element.inputChild.dispatchEvent(ArrowDown);
    (0, _chai.expect)(element).to.have.value(-22);

    ArrowDown.shiftKey = false;
    ArrowDown.altKey = true;
    element.inputChild.dispatchEvent(ArrowDown);
    (0, _chai.expect)(element).to.have.value(-22.1);
    element.inputChild.dispatchEvent(ArrowDown);
    (0, _chai.expect)(element).to.have.value(-22.2);

    element.setAttribute('readonly', 'true');
    element.inputChild.dispatchEvent(ArrowDown);
    (0, _chai.expect)(element).to.have.value(-22.2);

    element.setAttribute('readonly', 'false');
    element.inputChild.dispatchEvent(ArrowDown);
    (0, _chai.expect)(element).to.have.value(-22.3);
  });
});

function createElement() {
  element = document.createElement('mn-number');
  document.body.appendChild(element);

  // fallback to closest
  Element.prototype.closest = function (s) {
    let matches = (this.document || this.ownerDocument).querySelectorAll(s);
    let i;
    let el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {}
    } while (i < 0 && (el = el.parentElement));
    return el;
  };

  // fallback to connectedCallback
  document.body.appendChild = function (element) {
    HTMLFormElement.prototype.appendChild.apply(this, arguments);
    if (element.connectedCallback) {
      element.connectedCallback();
    }
  };

  // fallback to attributeChangedCallback
  element.setAttribute = function (attribute, value) {
    HTMLFormElement.prototype.setAttribute.apply(this, arguments);
    this.attributeChangedCallback(attribute, this.label, value);
  };
}