'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./number.class.js');

require('./number.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnNumber = props => {
  return _react2.default.createElement('mn-number', props);
};

exports.default = MnNumber;