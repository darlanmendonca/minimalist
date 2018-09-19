'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

require('../layout/layout.style.scss');

require('../list/list.style.scss');

require('./card.style.scss');

var _addonKnobs = require('@storybook/addon-knobs');

var _storybookReadme = require('storybook-readme');

var _README = require('./README.md');

var _README2 = _interopRequireDefault(_README);

var _storybookStyles = require('@sambego/storybook-styles');

var _storybookStyles2 = _interopRequireDefault(_storybookStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('styles', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _storybookReadme.withReadme)(_README2.default)).addDecorator((0, _storybookStyles2.default)({
  background: '#f1f3f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
})).addWithJSX('card', () => {
  const margin = '1em';

  return _react2.default.createElement(
    'div',
    { className: 'mn-layout-column mn-layout-sm-row' },
    _react2.default.createElement(
      'div',
      { className: 'mn-card padding-title', style: { margin } },
      _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'lorem ipsum'
        )
      ),
      _react2.default.createElement('img', { src: 'http://cdn1.sciencefiction.com/wp-content/uploads/2015/03/Game-of-Thrones-season-5-thumb.jpg' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'mn-card padding-title flex-sm-50 flex-md-60', style: { margin } },
      _react2.default.createElement(
        'h2',
        null,
        'lorem ipsum'
      ),
      _react2.default.createElement(
        'ul',
        { className: 'mn-list' },
        _react2.default.createElement(
          'li',
          null,
          'John Snow'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Daenerys Targaryen'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Tyrion Lannister'
        )
      )
    )
  );
});