'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _dialogClass = require('./dialog.class.js');

var _dialogClass2 = _interopRequireDefault(_dialogClass);

var _buttonClass = require('../button/button.class.js');

var _buttonClass2 = _interopRequireDefault(_buttonClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(require('chai-dom')).use(require('chai-spies'));

let element;

describe('dialog', () => {
  beforeEach(createElement);

  test('should export a class', () => {
    (0, _chai.expect)(_dialogClass2.default).to.be.a('function');
  });

  test('should instanciate using a constructor', () => {
    const element = new _dialogClass2.default();
    (0, _chai.expect)(element).to.be.instanceof(_dialogClass2.default);
  });

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-dialog');
    (0, _chai.expect)(element).to.be.instanceof(_dialogClass2.default);
  });

  test('should have css class .mn-dialog', () => {
    (0, _chai.expect)(element).to.have.class('mn-dialog');
  });

  test('should open dialog', () => {
    element.open();

    (0, _chai.expect)(element).to.have.class('visible');
    (0, _chai.expect)(document.body).to.have.class('mn-dialog-visible');
    (0, _chai.expect)(document.body).to.have.class('mn-backdrop-visible');
  });

  test('should hide dialog', () => {
    element.open();
    element.close();

    (0, _chai.expect)(element).to.not.have.class('visible');
    (0, _chai.expect)(document.body).to.not.have.class('mn-dialog-visible');
    (0, _chai.expect)(document.body).to.not.have.class('mn-backdrop-visible');
  });

  test('should toggle visibility', () => {
    element.toggle();

    (0, _chai.expect)(element).to.have.class('visible');
    (0, _chai.expect)(document.body).to.have.class('mn-dialog-visible');
    (0, _chai.expect)(document.body).to.have.class('mn-backdrop-visible');

    element.toggle();

    (0, _chai.expect)(element).to.not.have.class('visible');
    (0, _chai.expect)(document.body).to.not.have.class('mn-dialog-visible');
    (0, _chai.expect)(document.body).to.not.have.class('mn-backdrop-visible');
  });

  test('should open dialog clicking in button', () => {
    const button = new _buttonClass2.default();
    button.setAttribute('open-dialog', 'customId');
    element.appendChild(button);
    const open = _chai.spy.on(element, 'open');
    button.click();

    (0, _chai.expect)(open).to.have.been.called();
  });

  test('should close dialog clicking in button', () => {
    const button = new _buttonClass2.default();
    button.setAttribute('close-dialog', 'customId');
    element.appendChild(button);
    const close = _chai.spy.on(element, 'close');
    button.click();

    (0, _chai.expect)(close).to.have.been.called();
  });

  test('should close dialog clicking outside', () => {
    const button = new _buttonClass2.default();
    element.appendChild(button);

    const close = _chai.spy.on(element, 'close');

    // click inside dialog
    element.open();
    button.click();
    element.querySelector('.mn-card').click();
    (0, _chai.expect)(close).to.not.have.been.called();

    // click outside, in mn-backrop
    element.click();
    (0, _chai.expect)(close).to.have.been.called();
  });

  test('should toggle dialog visibility clicking in button', () => {
    const button = new _buttonClass2.default();
    button.setAttribute('toggle-dialog', 'customId');
    element.appendChild(button);
    const toggle = _chai.spy.on(element, 'toggle');
    button.click();

    (0, _chai.expect)(toggle).to.have.been.called();
  });

  test('should close dialog when press Esc', () => {
    const esc = new Event('keyup');
    esc.key = 'Escape';

    const close = _chai.spy.on(element, 'close');
    element.open();
    document.dispatchEvent(esc);

    (0, _chai.expect)(close).to.have.been.called();
  });
});

function createElement() {
  document.body.innerHTML = '';
  element = document.createElement('mn-dialog');
  element.id = 'customId';
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