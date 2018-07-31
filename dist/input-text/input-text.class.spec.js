'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _inputTextClass = require('./input-text.class.js');

var _inputTextClass2 = _interopRequireDefault(_inputTextClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(require('chai-dom')).use(require('chai-spies'));

let element;

describe('input-text', () => {
  beforeEach(createElement);

  test('should export a class', () => {
    (0, _chai.expect)(_inputTextClass2.default).to.be.a('function');
  });

  test('should instanciate using a constructor', () => {
    const element = new _inputTextClass2.default();
    (0, _chai.expect)(element).to.be.instanceof(_inputTextClass2.default);
  });

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-input-text');
    (0, _chai.expect)(element).to.be.instanceof(_inputTextClass2.default);
  });

  test('should have css class .mn-input-text', () => {
    (0, _chai.expect)(element).to.have.class('mn-input-text');
  });

  test('should listen attribute changes', () => {
    (0, _chai.expect)(_inputTextClass2.default.observedAttributes).to.deep.equal(['label', 'value', 'name', 'placeholder', 'disabled', 'readonly', 'maxlength', 'autocapitalize', 'autofocus', 'pattern']);
  });

  test('should have a label child', () => {
    (0, _chai.expect)(element).to.have.a.property('labelChild');
  });

  test('should have a input child', () => {
    (0, _chai.expect)(element).to.have.a.property('inputChild');
  });

  test('should have by default autocomplete off on input child', () => {
    (0, _chai.expect)(element.inputChild).to.have.attribute('autocomplete', 'off');
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
    (0, _chai.expect)(element.value).to.be.equal('lorem');
    element.value = undefined;
    (0, _chai.expect)(element.value).to.be.equal('');

    element.setAttribute('value', 'ipsum');
    (0, _chai.expect)(element.value).to.be.equal('ipsum');
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

  test('should have a setter/getter to maxlength', () => {
    element.maxlength = 10;
    (0, _chai.expect)(element.maxlength).to.be.equal('10');
    element.maxlength = undefined;
    (0, _chai.expect)(element.maxlength).to.be.equal('undefined');

    element.setAttribute('maxlength', '10');
    (0, _chai.expect)(element.maxlength).to.be.equal('10');
  });

  test('should have a setter/getter to autocapitalize', () => {
    element.autocapitalize = true;
    (0, _chai.expect)(element.autocapitalize).to.be.equal('true');
    element.autocapitalize = false;
    (0, _chai.expect)(element.autocapitalize).to.be.equal('false');
    element.autocapitalize = undefined;
    (0, _chai.expect)(element.autocapitalize).to.be.equal('undefined');

    element.setAttribute('autocapitalize', 'true');
    (0, _chai.expect)(element.autocapitalize).to.be.equal('true');

    element.setAttribute('autocapitalize', 'false');
    (0, _chai.expect)(element.autocapitalize).to.be.equal('false');
  });

  test('should have a setter/getter to autofocus', () => {
    element.autofocus = true;
    (0, _chai.expect)(element.autofocus).to.be.equal('true');
    element.autofocus = undefined;
    (0, _chai.expect)(element.autofocus).to.be.undefined;

    element.setAttribute('autofocus', 'true');
    (0, _chai.expect)(element.autofocus).to.be.equal('true');
  });

  test('should have a setter/getter to pattern', () => {
    element.pattern = 'lorem';
    (0, _chai.expect)(element.pattern).to.be.equal('lorem');
    element.pattern = undefined;
    (0, _chai.expect)(element.pattern).to.be.undefined;

    element.setAttribute('pattern', 'ipsum');
    (0, _chai.expect)(element.pattern).to.be.equal('ipsum');
  });

  test('should setup attributes on add it to dom', () => {
    element = document.createElement('mn-input-text');
    element.setAttribute('label', 'lorem');
    element.setAttribute('placeholder', 'ipsum');
    element.setAttribute('value', 'dolor');
    document.body.appendChild(element);

    (0, _chai.expect)(element.label).to.be.equal('lorem');
    (0, _chai.expect)(element.placeholder).to.be.equal('ipsum');
    (0, _chai.expect)(element.value).to.be.equal('dolor');
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
    (0, _chai.expect)(element).to.have.class('has-value');
    element.value = '';
    (0, _chai.expect)(element).to.not.have.class('has-value');
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
    element.required = true;
    element.validate();
    (0, _chai.expect)(element).to.have.class('invalid');
    (0, _chai.expect)(element).to.have.class('required');

    element.value = 'lorem';
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('required');
  });

  test('should validate pattern', () => {
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('pattern');

    element.setAttribute('pattern', 'o$');
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('pattern');

    element.value = 'lorem';
    element.validate();
    (0, _chai.expect)(element).to.have.class('invalid');
    (0, _chai.expect)(element).to.have.class('pattern');

    element.value = 'lero';
    element.validate();
    (0, _chai.expect)(element).to.not.have.class('invalid');
    (0, _chai.expect)(element).to.not.have.class('pattern');
  });
});

function createElement() {
  element = document.createElement('mn-input-text');
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