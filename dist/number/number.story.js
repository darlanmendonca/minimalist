'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _numberReact = require('./number.react.jsx');

var _numberReact2 = _interopRequireDefault(_numberReact);

var _addonKnobs = require('@storybook/addon-knobs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addWithJSX('number', () => {
  return _react2.default.createElement(_numberReact2.default, {
    label: (0, _addonKnobs.text)('label', 'number'),
    placeholder: (0, _addonKnobs.text)('placeholder'),
    value: (0, _addonKnobs.number)('value'),
    disabled: (0, _addonKnobs.boolean)('disabled'),
    readonly: (0, _addonKnobs.boolean)('readonly'),
    currency: (0, _addonKnobs.boolean)('currency'),
    precision: (0, _addonKnobs.number)('precision'),
    min: (0, _addonKnobs.number)('min'),
    max: (0, _addonKnobs.number)('max')
  });
});