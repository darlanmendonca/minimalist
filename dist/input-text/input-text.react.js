'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./input-text.class.js');

require('./input-text.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnInputText = props => {
  return _react2.default.createElement('mn-input-text', props);
};

exports.default = MnInputText;