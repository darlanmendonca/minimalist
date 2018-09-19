'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiEnzyme = require('chai-enzyme');

var _chaiEnzyme2 = _interopRequireDefault(_chaiEnzyme);

var _inputTextReact = require('./input-text.react.jsx');

var _inputTextReact2 = _interopRequireDefault(_inputTextReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use((0, _chaiEnzyme2.default)());
_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

let component;

describe('MnInputText (React)', () => {
  beforeEach(createComponent);

  test('should export a class', () => {
    (0, _chai.expect)(_inputTextReact2.default).to.be.an('function');
  });

  test('should set attribute label', () => {
    component.setProps({ label: 'lorem' });
    (0, _chai.expect)(component).to.have.attr('label', 'lorem');
  });

  test('should set attribute value', () => {
    component.setProps({ value: 'lorem' });
    (0, _chai.expect)(component).to.have.attr('value', 'lorem');
  });

  test('should set attribute name', () => {
    component.setProps({ name: 'lorem' });
    (0, _chai.expect)(component).to.have.attr('name', 'lorem');
  });

  test('should set attribute placeholder', () => {
    component.setProps({ placeholder: 'lorem' });
    (0, _chai.expect)(component).to.have.attr('placeholder', 'lorem');
  });

  test('should set attribute disabled', () => {
    component.setProps({ disabled: true });
    (0, _chai.expect)(component).to.have.attr('disabled', 'disabled');
    component.setProps({ disabled: false });
    (0, _chai.expect)(component).to.not.have.attr('disabled', 'false');
  });

  test('should set attribute readonly', () => {
    component.setProps({ readonly: true });
    (0, _chai.expect)(component).to.have.attr('readonly', 'readonly');
    component.setProps({ readonly: false });
    (0, _chai.expect)(component).to.not.have.attr('readonly', 'false');
  });

  test('should set attribute maxlength', () => {
    component.setProps({ maxlength: '10' });
    (0, _chai.expect)(component).to.have.attr('maxlength', '10');
  });

  test('should set attribute autocapitalize', () => {
    component.setProps({ autocapitalize: true });
    (0, _chai.expect)(component).to.have.attr('autocapitalize', 'true');
    component.setProps({ autocapitalize: false });
    (0, _chai.expect)(component).to.have.attr('autocapitalize', 'false');
  });
});

function createComponent() {
  const app = document.createElement('div');
  app.id = 'app';
  document.body.appendChild(app);
  component = (0, _enzyme.shallow)(_react2.default.createElement(_inputTextReact2.default, null), { attachTo: window.app });
}