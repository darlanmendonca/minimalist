'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./input-password.class.js');

require('../input-text/input-text.style.scss');

require('./input-password.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnInputPassword = props => _react2.default.createElement('mn-input-password', props);

exports.default = MnInputPassword;