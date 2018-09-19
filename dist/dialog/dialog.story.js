'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _buttonReact = require('../button/button.react.jsx');

var _buttonReact2 = _interopRequireDefault(_buttonReact);

var _inputTextReact = require('../input-text/input-text.react.jsx');

var _inputTextReact2 = _interopRequireDefault(_inputTextReact);

var _dialogReact = require('./dialog.react.jsx');

var _dialogReact2 = _interopRequireDefault(_dialogReact);

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
})).addWithJSX('dialog', () => {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _buttonReact2.default,
      { 'open-dialog': 'dialog1' },
      'open dialog'
    ),
    _react2.default.createElement(
      _dialogReact2.default,
      { id: 'dialog1' },
      _react2.default.createElement(_inputTextReact2.default, { autofocus: true }),
      _react2.default.createElement(
        'p',
        null,
        'lorem ipsum dolor sit amet'
      )
    )
  );
});