'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _buttonReact = require('./button.react.jsx');

var _buttonReact2 = _interopRequireDefault(_buttonReact);

var _addonKnobs = require('@storybook/addon-knobs');

var _storybookReadme = require('storybook-readme');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

var _storybookStyles = require('@sambego/storybook-styles');

var _storybookStyles2 = _interopRequireDefault(_storybookStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _storybookReadme.withReadme)(_README2.default)).addDecorator((0, _storybookStyles2.default)({
  background: '#f1f3f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
})).addWithJSX('button', () => {
  const primary = { '--background': 'rgb(50,154,240)', color: '#fff' };
  const warning = { '--background': 'rgb(240,62,62)', color: '#fff' };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _buttonReact2.default,
      null,
      'flat button'
    ),
    _react2.default.createElement(
      _buttonReact2.default,
      { 'class': 'raised' },
      'raised button'
    ),
    _react2.default.createElement(
      _buttonReact2.default,
      { 'class': 'raised', style: primary },
      'raised button with color'
    ),
    _react2.default.createElement(
      _buttonReact2.default,
      { 'class': 'action' },
      _react2.default.createElement('i', { 'class': 'zmdi zmdi-plus' })
    ),
    _react2.default.createElement(
      _buttonReact2.default,
      { 'class': 'action raised' },
      _react2.default.createElement('i', { 'class': 'zmdi zmdi-edit' })
    ),
    _react2.default.createElement(
      _buttonReact2.default,
      { 'class': 'action raised', style: warning },
      _react2.default.createElement('i', { 'class': 'zmdi zmdi-delete' })
    )
  );
});