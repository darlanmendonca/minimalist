import chai, {expect, spy} from 'chai'
import InputPassword from './input-password.component.js'
import {renderHTML} from '../spec.utils.js'

chai
  .use(require('chai-html'))
  .use(require('chai-dom'))
  .use(require('chai-spies'))

describe('InputPassword', () => {
  test('should be an es6 class', () => {
    expect(InputPassword.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new InputPassword()

    expect(element).to.be.instanceof(InputPassword)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-input-password')

    expect(element).to.be.instanceof(InputPassword)
  })

  test('should create element using html', () => {
    document.body.innerHTML = '<mn-input-password></mn-input-password>'
    const element = document.querySelector('mn-input-password').cloneNode(true)

    expect(element).to.be.instanceof(InputPassword)
  })

  test('should listen attribute changes', () => {
    expect(InputPassword.observedAttributes).to.deep.equal([
      'label',
      'placeholder',
      'value',
      'name',
      'disabled',
      'readonly',
      'maxlength',
      'autofocus',
      'pattern',
    ])
  })

  test('should have validations with support to required, pattern and match', () => {
    const element = new InputPassword()

    expect(element.validations).to.have.property('required')
    expect(element.validations).to.have.property('pattern')
    expect(element.validations).to.have.property('match')
  })

  test('should add css classes to host before render', () => {
    const element = new InputPassword()
    element.beforeRender()

    expect(element).to.have.class('mn-input-text')
    expect(element).to.have.class('mn-input-password')
  })

  test('should render a label and an input', () => {
    const element = new InputPassword()

    expect(element.render()).html.to.equal(`
      <label></label>
      <input type="password" />
    `)
  })

  test('should set a text to label', () => {
    const element = new InputPassword()
    element.innerHTML = element.render({label: 'lorem'})

    expect(element).to.contain('label').with.text('lorem')
  })

  test('should set a placeholder to input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render({placeholder: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('placeholder', 'lorem')
  })

  test('should set a value to input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render({value: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.value('lorem')
  })

  test('should set a name to input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render({name: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('name', 'lorem')
  })

  test('should set a disabled to input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render({disabled: true})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('disabled')
  })

  test('should set a readonly to input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render({readonly: true})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('readonly')
  })

  test('should set a maxlength to input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render({maxlength: 10})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('maxlength')
  })

  test('should set an autofocus to input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render({autofocus: true})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('autofocus', 'true')
  })

  test('should set a pattern to input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render({pattern: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('pattern', 'lorem')
  })

  test('should toggle has-value class after render', () => {
    const element = new InputPassword()
    element.innerHTML = element.render()
    element.afterRender()

    expect(element).to.not.have.class('has-value')

    element.props.value = 'lorem'
    element.afterRender()
    expect(element).to.have.class('has-value')
  })

  test('should focus on input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render()
    const input = element.querySelector('input')
    spy.on(input, 'focus')
    element.focus()

    expect(input.focus).to.have.been.called()
  })

  test('should listen event focus on input calling onFocus', () => {
    const element = new InputPassword()
    spy.on(element, 'onFocus')
    element.connectedCallback()
    const input = element.querySelector('input')
    input.dispatchEvent(new Event('focus'))

    expect(element.onFocus).to.have.been.called()
  })

  test('should add css class focus to host on focus', () => {
    const element = new InputPassword()
    element.onFocus()

    expect(element).to.have.class('focus')
  })

  test('should blur from input', () => {
    const element = new InputPassword()
    element.innerHTML = element.render()
    const input = element.querySelector('input')
    spy.on(input, 'blur')
    element.blur()

    expect(input.blur).to.have.been.called()
  })

  test('should listen event focus on input calling onBlur', () => {
    const element = new InputPassword()
    spy.on(element, 'onBlur')
    element.connectedCallback()
    const input = element.querySelector('input')
    input.dispatchEvent(new Event('blur'))

    expect(element.onBlur).to.have.been.called()
  })

  test('should remove css class focus to host on blur', () => {
    const element = new InputPassword()
    element.onBlur({target: {value: ''}})

    expect(element).to.not.have.class('focus')
  })

  test('should toggle css class has-value to host on blur', () => {
    const element = new InputPassword()
    element.onBlur({target: {value: 'lorem'}})

    expect(element).to.have.class('has-value')

    element.onBlur({target: {value: ''}})
    expect(element).to.not.have.class('has-value')
  })

  test('should listen event focus on input calling onChange', () => {
    const element = new InputPassword()
    spy.on(element, 'onChange')
    element.connectedCallback()
    const input = element.querySelector('input')
    input.dispatchEvent(new Event('change'))

    expect(element.onChange).to.have.been.called()
  })

  test('should set value attribute on change input value', () => {
    const element = new InputPassword()
    element.onChange({target: {value: 'lorem'}})

    expect(element).to.have.attribute('value', 'lorem')
  })

  test('should listen event input on input calling isValid', () => {
    const element = new InputPassword()
    spy.on(element, 'isValid')
    element.connectedCallback()
    const input = element.querySelector('input')
    input.dispatchEvent(new Event('input'))

    expect(element.isValid).to.have.been.called()
  })

  test('should validate component without any validation', () => {
    const element = new InputPassword()

    expect(element.isValid()).to.be.true
  })

  test('should validate pattern', () => {
    const element = new InputPassword()
    element.props.pattern = '^a'
    element.props.value = 'lorem'

    expect(element.isValid()).to.be.false
    expect(element).to.have.class('invalid')
    expect(element).to.have.class('pattern')

    element.props.value = 'abc'
    expect(element.isValid()).to.be.true
    expect(element).to.not.have.class('invalid')
    expect(element).to.not.have.class('pattern')
  })

  test('should validate required', () => {
    const element = new InputPassword()
    element.props.required = true

    expect(element.isValid()).to.be.false
    expect(element).to.have.class('invalid')
    expect(element).to.have.class('required')

    element.props.value = 'lorem'
    expect(element.isValid()).to.be.true
    expect(element).to.not.have.class('invalid')
    expect(element).to.not.have.class('required')
  })

  test.skip('should validate match', () => {
    const scene = renderHTML `
      <mn-form>
        <mn-input-password label="password" name="password" value="lorem">
        </mn-input-password>

        <mn-input-password label="confirm password" match="password" value="ipsum">
        </mn-input-password>
      </mn-form>
    `
    const element = scene.querySelector('mn-input-password[match]').cloneNode(true)
    expect(element.isValid()).to.be.false
    expect(element).to.have.class('invalid')
    expect(element).to.have.class('match')
  })
})
