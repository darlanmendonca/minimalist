'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./input-email.class.js');

require('../input-text/input-text.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnInputEmail = props => _react2.default.createElement('mn-input-email', props);

exports.default = MnInputEmail;