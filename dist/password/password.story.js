'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _passwordReact = require('./password.react.jsx');

var _passwordReact2 = _interopRequireDefault(_passwordReact);

var _addonKnobs = require('@storybook/addon-knobs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addWithJSX('password', () => {
  return _react2.default.createElement(_passwordReact2.default, {
    label: (0, _addonKnobs.text)('label', 'password'),
    placeholder: (0, _addonKnobs.text)('placeholder'),
    value: (0, _addonKnobs.text)('value'),
    maxlength: (0, _addonKnobs.number)('maxlength', 10),
    disabled: (0, _addonKnobs.boolean)('disabled'),
    readonly: (0, _addonKnobs.boolean)('readonly')
  });
});