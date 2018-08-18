'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _inputEmailReact = require('./input-email.react.jsx');

var _inputEmailReact2 = _interopRequireDefault(_inputEmailReact);

var _addonKnobs = require('@storybook/addon-knobs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {withReadme}  from 'storybook-readme'
// import readme from './README.md'

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs)
// .addDecorator(withReadme(readme))
.addWithJSX('input-email', () => {
  return _react2.default.createElement(_inputEmailReact2.default, {
    label: (0, _addonKnobs.text)('label', 'email'),
    placeholder: (0, _addonKnobs.text)('placeholder'),
    value: (0, _addonKnobs.text)('value', 'lorem@gmail.com'),
    disabled: (0, _addonKnobs.boolean)('disabled'),
    readonly: (0, _addonKnobs.boolean)('readonly')
  });
});