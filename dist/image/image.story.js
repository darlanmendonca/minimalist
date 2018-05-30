'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _imageReact = require('./image.react.jsx');

var _imageReact2 = _interopRequireDefault(_imageReact);

var _addonKnobs = require('@storybook/addon-knobs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('minimalist', module).addDecorator(_addonKnobs.withKnobs).addWithJSX('image', () => {
  return _react2.default.createElement(_imageReact2.default, {
    src: (0, _addonKnobs.text)('src', 'https://assets.rbl.ms/2059944/980x.jpg'),
    perspective: (0, _addonKnobs.boolean)('perspective', false)
  });
});