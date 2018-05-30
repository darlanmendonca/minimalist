'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./image.class.js');

require('./image.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnImage = props => {
  return _react2.default.createElement('mn-image', props);
};

exports.default = MnImage;