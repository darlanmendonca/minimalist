'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

require('./list.style.scss');

var _addonKnobs = require('@storybook/addon-knobs');

var _storybookReadme = require('storybook-readme');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('styles', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _storybookReadme.withReadme)(_README2.default)).addWithJSX('list', () => {
  const items = (0, _addonKnobs.array)('items', ['stark', 'lannister', 'targaryen']);

  return _react2.default.createElement(
    'ul',
    { className: 'mn-list' },
    items.map(item => _react2.default.createElement(
      'li',
      { className: 'mn-item' },
      item
    ))
  );
});