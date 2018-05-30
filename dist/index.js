'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formClass = require('./form/form.class.js');

var _formClass2 = _interopRequireDefault(_formClass);

var _inputClass = require('./input/input.class.js');

var _inputClass2 = _interopRequireDefault(_inputClass);

var _passwordClass = require('./password/password.class.js');

var _passwordClass2 = _interopRequireDefault(_passwordClass);

var _numberClass = require('./number/number.class.js');

var _numberClass2 = _interopRequireDefault(_numberClass);

var _rangeClass = require('./range/range.class.js');

var _rangeClass2 = _interopRequireDefault(_rangeClass);

var _loadingCircleClass = require('./loadingCircle/loadingCircle.class.js');

var _loadingCircleClass2 = _interopRequireDefault(_loadingCircleClass);

var _imageClass = require('./image/image.class.js');

var _imageClass2 = _interopRequireDefault(_imageClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  form: _formClass2.default,
  input: _inputClass2.default,
  password: _passwordClass2.default,
  number: _numberClass2.default,
  range: _rangeClass2.default,
  loadingCircle: _loadingCircleClass2.default,
  image: _imageClass2.default
};