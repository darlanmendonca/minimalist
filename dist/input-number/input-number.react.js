'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./input-number.class.js');

require('./input-number.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnInputNumber = props => {
  return _react2.default.createElement('mn-input-number', props);
};

exports.default = MnInputNumber;