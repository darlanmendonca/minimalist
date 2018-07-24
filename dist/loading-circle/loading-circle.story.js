'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _loadingCircleReact = require('./loading-circle.react.jsx');

var _loadingCircleReact2 = _interopRequireDefault(_loadingCircleReact);

var _addonKnobs = require('@storybook/addon-knobs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addWithJSX('loading-circle', () => {
  return _react2.default.createElement(_loadingCircleReact2.default, null);
});