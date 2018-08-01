'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _backdropClass = require('./backdrop.class.js');

var _backdropClass2 = _interopRequireDefault(_backdropClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(require('chai-dom'));

describe('backdrop', () => {
  test('should have method show', () => {
    (0, _chai.expect)(_backdropClass2.default.show).to.be.an('function');
  });

  test('should have method hide', () => {
    (0, _chai.expect)(_backdropClass2.default.hide).to.be.an('function');
  });

  test('should alternate backdrop visibility', () => {
    (0, _chai.expect)(document.body).to.not.have.class('mn-backdrop-visible');
    _backdropClass2.default.show();
    (0, _chai.expect)(document.body).to.have.class('mn-backdrop-visible');
    _backdropClass2.default.hide();
    (0, _chai.expect)(document.body).to.not.have.class('mn-backdrop-visible');
  });
});