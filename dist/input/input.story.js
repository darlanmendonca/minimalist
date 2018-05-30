'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _inputReact = require('./input.react.jsx');

var _inputReact2 = _interopRequireDefault(_inputReact);

var _addonKnobs = require('@storybook/addon-knobs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('minimalist', module).addDecorator(_addonKnobs.withKnobs).addWithJSX('input', () => {
  return _react2.default.createElement(_inputReact2.default, {
    label: (0, _addonKnobs.text)('label', 'username'),
    placeholder: (0, _addonKnobs.text)('placeholder', 'e.g. johnsnow'),
    value: (0, _addonKnobs.text)('value'),
    disabled: (0, _addonKnobs.boolean)('disabled'),
    readonly: (0, _addonKnobs.boolean)('readonly'),
    maxlength: (0, _addonKnobs.number)('maxlength', 100)
  });
});