'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _rangeReact = require('./range.react.jsx');

var _rangeReact2 = _interopRequireDefault(_rangeReact);

var _addonKnobs = require('@storybook/addon-knobs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addWithJSX('range', () => {
  return _react2.default.createElement(_rangeReact2.default, {
    value: (0, _addonKnobs.number)('value', 5),
    min: (0, _addonKnobs.number)('min', 0),
    max: (0, _addonKnobs.number)('max', 10)
  });
});