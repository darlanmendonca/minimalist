'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _inputPasswordReact = require('./input-password.react.jsx');

var _inputPasswordReact2 = _interopRequireDefault(_inputPasswordReact);

var _addonKnobs = require('@storybook/addon-knobs');

var _storybookReadme = require('storybook-readme');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _storybookReadme.withReadme)(_README2.default)).addWithJSX('input-password', () => {
  return _react2.default.createElement(_inputPasswordReact2.default, {
    label: (0, _addonKnobs.text)('label', 'password'),
    placeholder: (0, _addonKnobs.text)('placeholder'),
    value: (0, _addonKnobs.text)('value'),
    maxlength: (0, _addonKnobs.number)('maxlength', 10),
    disabled: (0, _addonKnobs.boolean)('disabled'),
    readonly: (0, _addonKnobs.boolean)('readonly')
  });
});