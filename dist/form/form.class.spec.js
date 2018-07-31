'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _formClass = require('./form.class.js');

var _formClass2 = _interopRequireDefault(_formClass);

require('../input-text/input-text.class.js');

require('../input-number/input-number.class.js');

var _chaiDom = require('chai-dom');

var _chaiDom2 = _interopRequireDefault(_chaiDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiDom2.default);

let element;

describe('form', () => {
  beforeEach(createElement);

  test('should export a class', () => {
    (0, _chai.expect)(_formClass2.default).to.be.a('function');
  });

  test('should instanciate using a constructor', () => {
    const element = new _formClass2.default();
    (0, _chai.expect)(element).to.be.instanceof(_formClass2.default);
  });

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-form');
    (0, _chai.expect)(element).to.be.instanceof(_formClass2.default);
  });

  test('should have css class .mn-form', () => {
    (0, _chai.expect)(element).to.have.class('mn-form');
  });

  test('should listen attribute changes', () => {
    (0, _chai.expect)(_formClass2.default.observedAttributes).to.deep.equal(['disabled', 'readonly']);
  });

  test('should have input property', () => {
    (0, _chai.expect)(element).to.have.a.property('inputs');
    (0, _chai.expect)(element.inputs).to.be.an('array');
  });

  test('should have a setter/getter to disabled', () => {
    const input = document.createElement('mn-input-text');
    element.appendChild(input);
    input.connectedCallback();

    (0, _chai.expect)(element.disabled).to.be.false;
    (0, _chai.expect)(input.disabled).to.be.false;
    element.disabled = true;
    (0, _chai.expect)(element.disabled).to.be.true;
    (0, _chai.expect)(input.disabled).to.be.true;
  });

  test('should have a setter/getter to readonly', () => {
    const input = document.createElement('mn-input-text');
    element.appendChild(input);
    input.connectedCallback();

    (0, _chai.expect)(element.readonly).to.be.false;
    (0, _chai.expect)(input.disabled).to.be.false;
    element.readonly = true;
    (0, _chai.expect)(element.readonly).to.be.true;
    (0, _chai.expect)(input.readonly).to.be.true;
  });

  test('should have a getter to data', () => {
    const input = document.createElement('mn-input-text');
    const number = document.createElement('mn-input-number');
    element.appendChild(input);
    element.appendChild(number);
    input.connectedCallback();
    number.connectedCallback();
    input.name = 'username';
    input.value = 'lorem';
    number.name = 'number';

    (0, _chai.expect)(element.data).to.deep.equal({ username: 'lorem', number: undefined });

    number.value = 10;
    (0, _chai.expect)(element.data).to.deep.equal({ username: 'lorem', number: 10 });
  });

  test('should validate all inputs', () => {
    const input = document.createElement('mn-input-text');
    const number = document.createElement('mn-input-number');
    element.appendChild(input);
    element.appendChild(number);
    input.connectedCallback();
    number.connectedCallback();

    (0, _chai.expect)(element.validate()).to.be.true;
    input.setAttribute('required', true);
    (0, _chai.expect)(element.validate()).to.be.false;
    input.value = 'lorem';
    (0, _chai.expect)(element.validate()).to.be.true;
  });
});

function createElement() {
  element = document.createElement('mn-form');
  document.body.appendChild(element);

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