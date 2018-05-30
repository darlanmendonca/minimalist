'use strict';

var _chai = require('chai');

var _componentClass = require('./component.class.js');

var _componentClass2 = _interopRequireDefault(_componentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MnComponent', () => {
  test('should export a class', () => {
    (0, _chai.expect)(_componentClass2.default).to.be.a('function');
  });
});