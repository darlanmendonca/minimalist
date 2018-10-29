'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./highlight.class.js');

require('./highlight.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnHighlight = props => {
  return _react2.default.createElement('mn-highlight', props);
};

exports.default = MnHighlight;