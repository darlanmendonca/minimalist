'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _imageClass = require('./image.class.js');

var _imageClass2 = _interopRequireDefault(_imageClass);

var _chaiDom = require('chai-dom');

var _chaiDom2 = _interopRequireDefault(_chaiDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiDom2.default);

let element;

describe('mn-image', () => {
  beforeEach(createElement);

  test('should export a class', () => {
    (0, _chai.expect)(_imageClass2.default).to.be.a('function');
  });

  test('should instanciate using a constructor', () => {
    const element = new _imageClass2.default();
    (0, _chai.expect)(element).to.be.instanceof(_imageClass2.default);
  });

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-image');
    (0, _chai.expect)(element).to.be.instanceof(_imageClass2.default);
  });

  test('should have css class .mn-image', () => {
    (0, _chai.expect)(element).to.have.class('mn-image');
  });

  test('should listen attribute changes', () => {
    (0, _chai.expect)(_imageClass2.default.observedAttributes).to.deep.equal(['src']);
  });

  test('should have a img child', () => {
    (0, _chai.expect)(element).to.have.a.property('imgChild');
  });

  test('should have a setter/getter to src', () => {
    element.src = 'lorem';
    (0, _chai.expect)(element.src).to.be.equal('lorem');
    element.src = undefined;
    (0, _chai.expect)(element.src).to.be.undefined;

    element.setAttribute('src', 'ipsum');
    (0, _chai.expect)(element.src).to.be.equal('ipsum');
  });

  test('should apply and remove perspective on mouse events', () => {
    element.setAttribute('perspective', 'true');
    (0, _chai.expect)(element.style).to.not.have.property('RotateX');
    (0, _chai.expect)(element.style).to.not.have.property('RotateY');

    element.dispatchEvent(new Event('mouseenter'));
    (0, _chai.expect)(element.style).to.have.property('RotateX');
    (0, _chai.expect)(element.style).to.have.property('RotateY');

    element.dispatchEvent(new Event('mousemove'));
    (0, _chai.expect)(element.style).to.have.property('RotateX');
    (0, _chai.expect)(element.style).to.have.property('RotateY');

    element.dispatchEvent(new Event('mouseleave'));
    (0, _chai.expect)(element.style).to.have.property('RotateX');
    (0, _chai.expect)(element.style).to.have.property('RotateY');
  });
});

function createElement() {
  element = document.createElement('mn-image');
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