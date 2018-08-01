'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formClass = require('./form/form.class.js');

var _formClass2 = _interopRequireDefault(_formClass);

var _inputTextClass = require('./input-text/input-text.class.js');

var _inputTextClass2 = _interopRequireDefault(_inputTextClass);

var _inputPasswordClass = require('./input-password/input-password.class.js');

var _inputPasswordClass2 = _interopRequireDefault(_inputPasswordClass);

var _inputNumberClass = require('./input-number/input-number.class.js');

var _inputNumberClass2 = _interopRequireDefault(_inputNumberClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  form: _formClass2.default,
  inputText: _inputTextClass2.default,
  inputPassword: _inputPasswordClass2.default,
  inputNumber: _inputNumberClass2.default
};