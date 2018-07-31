'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _inputNumberReact = require('./input-number.react.jsx');

var _inputNumberReact2 = _interopRequireDefault(_inputNumberReact);

var _addonKnobs = require('@storybook/addon-knobs');

var _storybookReadme = require('storybook-readme');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _storybookReadme.withReadme)(_README2.default)).addWithJSX('input-number', () => {
  return _react2.default.createElement(_inputNumberReact2.default, {
    label: (0, _addonKnobs.text)('label', 'number'),
    placeholder: (0, _addonKnobs.text)('placeholder'),
    value: (0, _addonKnobs.number)('value'),
    disabled: (0, _addonKnobs.boolean)('disabled'),
    readonly: (0, _addonKnobs.boolean)('readonly'),
    currency: (0, _addonKnobs.boolean)('currency'),
    percentage: (0, _addonKnobs.boolean)('percentage'),
    precision: (0, _addonKnobs.number)('precision'),
    min: (0, _addonKnobs.number)('min'),
    max: (0, _addonKnobs.number)('max')
  });
});