'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./range.class.js');

require('./range.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnRange = props => {
  return _react2.default.createElement('mn-range', props);
};

exports.default = MnRange;