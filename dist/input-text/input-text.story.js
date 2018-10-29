'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _inputTextReact = require('./input-text.react.jsx');

var _inputTextReact2 = _interopRequireDefault(_inputTextReact);

var _addonKnobs = require('@storybook/addon-knobs');

var _storybookReadme = require('storybook-readme');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _storybookReadme.withReadme)(_README2.default)).addWithJSX('input-text', () => {
  return _react2.default.createElement(_inputTextReact2.default, {
    label: (0, _addonKnobs.text)('label', 'username'),
    placeholder: (0, _addonKnobs.text)('placeholder', 'e.g. johnsnow'),
    value: (0, _addonKnobs.text)('value'),
    disabled: (0, _addonKnobs.boolean)('disabled'),
    readonly: (0, _addonKnobs.boolean)('readonly'),
    maxlength: (0, _addonKnobs.number)('maxlength', 100),
    multiple: (0, _addonKnobs.boolean)('multiple')
  });
});