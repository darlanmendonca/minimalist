import chai, {expect, spy} from 'chai'
import InputText from './input-text.component.js'

chai
  .use(require('chai-html'))
  .use(require('chai-dom'))
  .use(require('chai-spies'))

describe('InputText', () => {
  test('should be an es6 class', () => {
    expect(InputText.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new InputText()

    expect(element).to.be.instanceof(InputText)
  })

  test('should create element using document', () => {
    const element = document.createElement('mn-input-text')

    expect(element).to.be.instanceof(InputText)
  })

  test('should create element using html', () => {
    document.body.innerHTML = '<mn-input-text></mn-input-text>'
    const element = document.querySelector('mn-input-text').cloneNode(true)

    expect(element).to.be.instanceof(InputText)
  })

  test('should listen attribute changes', () => {
    expect(InputText.observedAttributes).to.deep.equal([
      'label',
      'placeholder',
      'value',
      'name',
      'disabled',
      'readonly',
      'maxlength',
      'autocapitalize',
      'autofocus',
      'pattern',
    ])
  })

  test('should have validations with support to required and pattern', () => {
    const element = new InputText()

    expect(element.validations).to.have.property('required')
    expect(element.validations).to.have.property('pattern')
  })

  test('should add css class mn-input-text to host before render', () => {
    const element = new InputText()
    element.beforeRender()

    expect(element).to.have.class('mn-input-text')
  })

  test('should render a label and an input', () => {
    const element = new InputText()

    expect(element.render()).html.to.equal(`
      <label></label>
      <input />
    `)
  })

  test('should set a text to label', () => {
    const element = new InputText()
    element.innerHTML = element.render({label: 'lorem'})

    expect(element).to.contain('label').with.text('lorem')
  })

  test('should set a placeholder to input', () => {
    const element = new InputText()
    element.innerHTML = element.render({placeholder: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('placeholder', 'lorem')
  })

  test('should set a value to input', () => {
    const element = new InputText()
    element.innerHTML = element.render({value: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.value('lorem')
  })

  test('should set a name to input', () => {
    const element = new InputText()
    element.innerHTML = element.render({name: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('name', 'lorem')
  })

  test('should set a disabled to input', () => {
    const element = new InputText()
    element.innerHTML = element.render({disabled: true})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('disabled')
  })

  test('should set a readonly to input', () => {
    const element = new InputText()
    element.innerHTML = element.render({readonly: true})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('readonly')
  })

  test('should set a maxlength to input', () => {
    const element = new InputText()
    element.innerHTML = element.render({maxlength: 10})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('maxlength')
  })

  test('should set an autocapitalize to input', () => {
    const element = new InputText()
    element.innerHTML = element.render({autocapitalize: true})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('autocapitalize', 'true')
  })

  test('should set an autofocus to input', () => {
    const element = new InputText()
    element.innerHTML = element.render({autofocus: true})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('autofocus', 'true')
  })

  test('should set a pattern to input', () => {
    const element = new InputText()
    element.innerHTML = element.render({pattern: true})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('pattern', 'true')
  })

  test('should toggle has-value class after render', () => {
    const element = new InputText()
    element.innerHTML = element.render()
    element.afterRender()

    expect(element).to.not.have.class('has-value')

    element.props.value = 'lorem'
    element.afterRender()
    expect(element).to.have.class('has-value')
  })

  test('should focus on input', () => {
    const element = new InputText()
    element.innerHTML = element.render()
    const input = element.querySelector('input')
    spy.on(input, 'focus')
    element.focus()

    expect(input.focus).to.have.been.called()
  })

  test('should listen event focus on input calling onFocus', () => {
    const element = new InputText()
    spy.on(element, 'onFocus')
    element.connectedCallback()
    const input = element.querySelector('input')
    input.dispatchEvent(new Event('focus'))

    expect(element.onFocus).to.have.been.called()
  })

  test('should add css class focus to host on focus', () => {
    const element = new InputText()
    element.onFocus()

    expect(element).to.have.class('focus')
  })

  test('should blur from input', () => {
    const element = new InputText()
    element.innerHTML = element.render()
    const input = element.querySelector('input')
    spy.on(input, 'blur')
    element.blur()

    expect(input.blur).to.have.been.called()
  })

  test('should listen event focus on input calling onBlur', () => {
    const element = new InputText()
    spy.on(element, 'onBlur')
    element.connectedCallback()
    const input = element.querySelector('input')
    input.dispatchEvent(new Event('blur'))

    expect(element.onBlur).to.have.been.called()
  })

  test('should remove css class focus to host on blur', () => {
    const element = new InputText()
    element.onBlur({target: {value: ''}})

    expect(element).to.not.have.class('focus')
  })

  test('should toggle css class has-value to host on blur', () => {
    const element = new InputText()
    element.onBlur({target: {value: 'lorem'}})

    expect(element).to.have.class('has-value')

    element.onBlur({target: {value: ''}})
    expect(element).to.not.have.class('has-value')
  })

  test('should listen event focus on input calling onChange', () => {
    const element = new InputText()
    spy.on(element, 'onChange')
    element.connectedCallback()
    const input = element.querySelector('input')
    input.dispatchEvent(new Event('change'))

    expect(element.onChange).to.have.been.called()
  })

  test('should set value attribute on change input value', () => {
    const element = new InputText()
    element.onChange({target: {value: 'lorem'}})

    expect(element).to.have.attribute('value', 'lorem')
  })

  test('should listen event input on input calling isValid', () => {
    const element = new InputText()
    spy.on(element, 'isValid')
    element.connectedCallback()
    const input = element.querySelector('input')
    input.dispatchEvent(new Event('input'))

    expect(element.isValid).to.have.been.called()
  })

  test('should validate component without any validation', () => {
    const element = new InputText()

    expect(element.isValid()).to.be.true
  })

  test('should validate pattern', () => {
    const element = new InputText()
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
    const element = new InputText()
    element.props.required = true

    expect(element.isValid()).to.be.false
    expect(element).to.have.class('invalid')
    expect(element).to.have.class('required')

    element.props.value = 'lorem'
    expect(element.isValid()).to.be.true
    expect(element).to.not.have.class('invalid')
    expect(element).to.not.have.class('required')
  })
})
