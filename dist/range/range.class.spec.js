'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _rangeClass = require('./range.class.js');

var _rangeClass2 = _interopRequireDefault(_rangeClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(require('chai-dom')).use(require('chai-spies'));

let element;

describe('mn-range', () => {
  beforeEach(createElement);

  test('should export a class', () => {
    (0, _chai.expect)(_rangeClass2.default).to.be.a('function');
  });

  test('should instanciate using a constructor', () => {
    const element = new _rangeClass2.default();
    (0, _chai.expect)(element).to.be.instanceof(_rangeClass2.default);
  });

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-range');
    (0, _chai.expect)(element).to.be.instanceof(_rangeClass2.default);
  });

  test('should listen attribute changes', () => {
    (0, _chai.expect)(_rangeClass2.default.observedAttributes).to.deep.equal(['value', 'step', 'min', 'max']);
  });

  test('should have css class .mn-range', () => {
    (0, _chai.expect)(element).to.have.class('mn-range');
  });

  test('should have a input child', () => {
    (0, _chai.expect)(element).to.have.a.property('inputChild');
    (0, _chai.expect)(element.inputChild).to.have.attribute('type', 'range');
  });

  test('should have a setter/getter to step', () => {
    element.step = 2;
    (0, _chai.expect)(element.step).to.be.equal(2);
    element.step = undefined;
    (0, _chai.expect)(element.step).to.be.undefined;

    element.setAttribute('step', 3);
    (0, _chai.expect)(element.step).to.be.equal(3);
  });

  test('should have a setter/getter to min', () => {
    element.min = 0;
    (0, _chai.expect)(element.min).to.be.equal(0);
    element.min = undefined;
    (0, _chai.expect)(element.min).to.be.undefined;

    element.setAttribute('min', '1');
    (0, _chai.expect)(element.min).to.be.equal(1);
  });

  test('should have a setter/getter to max', () => {
    element.max = 10;
    (0, _chai.expect)(element.max).to.be.equal(10);
    element.max = undefined;
    (0, _chai.expect)(element.max).to.be.undefined;

    element.setAttribute('max', '20');
    (0, _chai.expect)(element.max).to.be.equal(20);
  });

  // test('should have a setter/getter to value', () => {
  //   element.value = 10
  //   expect(element.value).to.be.equal(10)
  //   element.value = undefined
  //   expect(element.value).to.be.equal('')

  //   element.setAttribute('value', 'ipsum')
  //   expect(element.value).to.be.equal('ipsum')
  // })
});

function createElement() {
  element = document.createElement('mn-range');
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