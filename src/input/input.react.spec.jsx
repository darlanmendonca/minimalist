import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import MnInput from './input.react.jsx'
import React, {Component} from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

chai.use(chaiEnzyme())
Enzyme.configure({adapter: new Adapter()})

let component

describe('MnInput (React)', () => {
  beforeEach(createComponent)

  test('should export a class', () => {
    expect(MnInput).to.be.an('function')
  })

  test('should set attribute label', () => {
    component.setProps({label: 'lorem'})
    expect(component).to.have.attr('label', 'lorem')
  })

  test('should set attribute value', () => {
    component.setProps({value: 'lorem'})
    expect(component).to.have.attr('value', 'lorem')
  })

  test('should set attribute name', () => {
    component.setProps({name: 'lorem'})
    expect(component).to.have.attr('name', 'lorem')
  })

  test('should set attribute placeholder', () => {
    component.setProps({placeholder: 'lorem'})
    expect(component).to.have.attr('placeholder', 'lorem')
  })

  test.skip('should set attribute disabled', () => {
    component.setProps({disabled: true})
    expect(component).to.have.attr('disabled', 'true')
    component.setProps({disabled: false})
    expect(component).to.not.have.attr('disabled', 'false')
  })

  test.skip('should set attribute readonly', () => {
    component.setProps({readonly: true})
    expect(component).to.have.attr('readonly', 'true')
    component.setProps({readonly: false})
    expect(component).to.not.have.attr('readonly', 'false')
  })

  test('should set attribute maxlength', () => {
    component.setProps({maxlength: '10'})
    expect(component).to.have.attr('maxlength', '10')
  })

  test.skip('should set attribute autocapitalize', () => {
    component.setProps({autocapitalize: true})
    expect(component).to.have.attr('autocapitalize', 'true')
    component.setProps({autocapitalize: false})
    expect(component).to.not.have.attr('autocapitalize', 'false')
  })
})

function createComponent() {
  const app = document.createElement('div')
  app.id = 'app'
  document.body.appendChild(app)
  component = shallow(<MnInput />, {attachTo: window.app})
}

