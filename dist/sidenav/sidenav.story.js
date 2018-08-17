'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _buttonReact = require('../button/button.react.jsx');

var _buttonReact2 = _interopRequireDefault(_buttonReact);

var _sidenavReact = require('./sidenav.react.jsx');

var _sidenavReact2 = _interopRequireDefault(_sidenavReact);

var _addonKnobs = require('@storybook/addon-knobs');

var _storybookReadme = require('storybook-readme');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('components', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _storybookReadme.withReadme)(_README2.default)).addWithJSX('sidenav', () => {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _buttonReact2.default,
      { 'show-sidenav': 'left' },
      'show left sidenav'
    ),
    _react2.default.createElement(
      _buttonReact2.default,
      { 'show-sidenav': 'right' },
      'show right sidenav'
    ),
    _react2.default.createElement(
      _sidenavReact2.default,
      { id: 'left', 'class': 'padding' },
      'content left here',
      _react2.default.createElement(
        _buttonReact2.default,
        { 'hide-sidenav': true },
        'hide'
      )
    ),
    _react2.default.createElement(
      _sidenavReact2.default,
      { id: 'right', 'class': 'right padding' },
      'content right here',
      _react2.default.createElement(
        _buttonReact2.default,
        { 'hide-sidenav': true },
        'hide'
      )
    )
  );
});