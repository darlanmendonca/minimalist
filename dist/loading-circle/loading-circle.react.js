'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./loading-circle.class.js');

require('./loading-circle.style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MnLoadingCircle = props => {
  return _react2.default.createElement('mn-loading-circle', props);
};

exports.default = MnLoadingCircle;