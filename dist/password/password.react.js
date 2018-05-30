'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./password.class.js');

require('./password.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnPassword = props => {
  return _react2.default.createElement('mn-password', props);
};

exports.default = MnPassword;