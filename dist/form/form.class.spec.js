'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _formClass = require('./form.class.js');

var _formClass2 = _interopRequireDefault(_formClass);

var _chaiDom = require('chai-dom');

var _chaiDom2 = _interopRequireDefault(_chaiDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiDom2.default);

let element;

describe('mn-form', () => {
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
    (0, _chai.expect)(_formClass2.default.observedAttributes).to.deep.equal(['name', 'disabled', 'readonly']);
  });

  test('should have a form child', () => {
    (0, _chai.expect)(element).to.have.a.property('formChild');
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