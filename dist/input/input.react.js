'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./input.class.js');

require('./input.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnInput = props => {
  return _react2.default.createElement('mn-input', props);
};

exports.default = MnInput;