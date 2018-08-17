'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _buttonClass = require('./button.class.js');

var _buttonClass2 = _interopRequireDefault(_buttonClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(require('chai-dom')).use(require('chai-spies'));

let element;

describe('button', () => {
  beforeEach(createElement);

  test('should export a class', () => {
    (0, _chai.expect)(_buttonClass2.default).to.be.a('function');
  });

  test('should instanciate using a constructor', () => {
    const element = new _buttonClass2.default();
    (0, _chai.expect)(element).to.be.instanceof(_buttonClass2.default);
  });

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-button');
    (0, _chai.expect)(element).to.be.instanceof(_buttonClass2.default);
  });

  test('should have css class .mn-button', () => {
    (0, _chai.expect)(element).to.have.class('mn-button');
  });

  test('should have a tabindex', () => {
    (0, _chai.expect)(element).to.have.attribute('tabindex', '0');
  });

  test('should blur on click', () => {
    const blur = _chai.spy.on(element, 'blur');
    element.click();

    (0, _chai.expect)(blur).to.have.been.called();
  });
});

function createElement() {
  element = document.createElement('mn-button');
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