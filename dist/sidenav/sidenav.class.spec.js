'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sidenavClass = require('./sidenav.class.js');

var _sidenavClass2 = _interopRequireDefault(_sidenavClass);

var _buttonClass = require('../button/button.class.js');

var _buttonClass2 = _interopRequireDefault(_buttonClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(require('chai-dom')).use(require('chai-spies'));

let element;

describe('sidenav', () => {
  beforeEach(createElement);

  test('should export a class', () => {
    (0, _chai.expect)(_sidenavClass2.default).to.be.a('function');
  });

  test('should instanciate using a constructor', () => {
    const element = new _sidenavClass2.default();
    (0, _chai.expect)(element).to.be.instanceof(_sidenavClass2.default);
  });

  test('should create element using method document.createElement', () => {
    const element = document.createElement('mn-sidenav');
    (0, _chai.expect)(element).to.be.instanceof(_sidenavClass2.default);
  });

  test('should have css class .mn-sidenav', () => {
    (0, _chai.expect)(element).to.have.class('mn-sidenav');
  });

  test('should have css class .mn-card', () => {
    (0, _chai.expect)(element).to.have.class('mn-card');
  });

  test('should show sidenav', () => {
    element.show();

    (0, _chai.expect)(element).to.have.class('visible');
    (0, _chai.expect)(document.body).to.have.class('mn-sidenav-visible');
    (0, _chai.expect)(document.body).to.have.class('mn-backdrop-visible');
  });

  test('should hide sidenav', () => {
    element.show();
    element.hide();

    (0, _chai.expect)(element).to.not.have.class('visible');
    (0, _chai.expect)(document.body).to.not.have.class('mn-sidenav-visible');
    (0, _chai.expect)(document.body).to.not.have.class('mn-backdrop-visible');
  });

  test('should toggle visibility', () => {
    element.toggle();

    (0, _chai.expect)(element).to.have.class('visible');
    (0, _chai.expect)(document.body).to.have.class('mn-sidenav-visible');
    (0, _chai.expect)(document.body).to.have.class('mn-backdrop-visible');

    element.toggle();

    (0, _chai.expect)(element).to.not.have.class('visible');
    (0, _chai.expect)(document.body).to.not.have.class('mn-sidenav-visible');
    (0, _chai.expect)(document.body).to.not.have.class('mn-backdrop-visible');
  });

  test('should autofocus on event show', () => {
    const autofocus = _chai.spy.on(element, 'autofocus');
    element.dispatchEvent(new Event('show'));

    (0, _chai.expect)(autofocus).to.have.been.called();

    const input = document.createElement('input');
    input.setAttribute('autofocus', '');
    element.appendChild(input);

    element.autofocus();
    (0, _chai.expect)(document.activeElement).to.be.equal(input);
  });

  test('should show sidenav clicking in button', () => {
    const button = new _buttonClass2.default();
    button.setAttribute('show-sidenav', 'customId');
    element.appendChild(button);
    const show = _chai.spy.on(element, 'show');
    button.click();

    (0, _chai.expect)(show).to.have.been.called();
  });

  test('should hide sidenav clicking in button', () => {
    const button = new _buttonClass2.default();
    button.setAttribute('hide-sidenav', 'customId');
    element.appendChild(button);
    const hide = _chai.spy.on(element, 'hide');
    button.click();

    (0, _chai.expect)(hide).to.have.been.called();
  });

  test('should hide sidenav clicking outside', () => {
    const button = new _buttonClass2.default();
    element.appendChild(button);

    const hide = _chai.spy.on(element, 'hide');

    element.show();
    button.click();
    element.click();

    (0, _chai.expect)(hide).to.not.have.been.called();

    document.body.click();

    (0, _chai.expect)(hide).to.have.been.called();
  });

  test('should toggle sidenav visibility clicking in button', () => {
    const button = new _buttonClass2.default();
    button.setAttribute('toggle-sidenav', 'customId');
    element.appendChild(button);
    const toggle = _chai.spy.on(element, 'toggle');
    button.click();

    (0, _chai.expect)(toggle).to.have.been.called();
  });

  test('should hide sidenav when press Esc', () => {
    const esc = new Event('keyup');
    esc.key = 'Escape';

    const hide = _chai.spy.on(element, 'hide');
    element.show();
    document.dispatchEvent(esc);

    (0, _chai.expect)(hide).to.have.been.called();
  });
});

function createElement() {
  element = document.createElement('mn-sidenav');
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