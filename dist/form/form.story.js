'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _formReact = require('./form.react.jsx');

var _formReact2 = _interopRequireDefault(_formReact);

var _inputReact = require('../input/input.react.jsx');

var _inputReact2 = _interopRequireDefault(_inputReact);

var _numberReact = require('../number/number.react.jsx');

var _numberReact2 = _interopRequireDefault(_numberReact);

var _addonKnobs = require('@storybook/addon-knobs');

var _storybookReadme = require('storybook-readme');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _storybookReadme.withReadme)(_README2.default)).addWithJSX('form', () => {
  return _react2.default.createElement(
    _formReact2.default,
    { disabled: (0, _addonKnobs.boolean)('disabled', false), readonly: (0, _addonKnobs.boolean)('readonly', false) },
    _react2.default.createElement(_inputReact2.default, { label: 'username', name: 'username' }),
    _react2.default.createElement(_numberReact2.default, { label: 'luck number', name: 'luckNumber' })
  );
});