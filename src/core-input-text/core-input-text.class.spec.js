import {expect, use} from 'chai'
import chaiHTML from 'chai-html'
import chaiDom from 'chai-dom'
import MnCoreInputText from './core-input-text.class.js'

use(chaiHTML)
use(chaiDom)

describe('MnCoreInputText', () => {
  test('should be an es6 class', () => {
    expect(MnCoreInputText.toString().startsWith('class')).to.be.true
  })

  test('should instanciate using a constructor', () => {
    const element = new MnCoreInputText()

    expect(element).to.be.instanceof(MnCoreInputText)
  })

  test('should create element', () => {
    const element = document.createElement('mn-core-input-text')
    
    expect(element).to.be.instanceof(MnCoreInputText)
  })

  test('should listen attribute changes', () => {
    expect(MnCoreInputText.observedAttributes).to.deep.equal([
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

  test('should render a simple markup', () => {
    const element = new MnCoreInputText()

    expect(element.render({})).html.to.equal(`
      <label></label>
      <input />
    `)
  })

  test('should set a text to label', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({label: 'lorem'})

    expect(element).to.contain('label').with.text('lorem')
  })

  test('should set a placeholder to input', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({placeholder: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('placeholder', 'lorem')
  })

  test('should set a value to input', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({value: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.value('lorem')
  })

  test('should set a name to input', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({name: 'lorem'})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('name', 'lorem')
  })

  test('should set a disabled to input', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({disabled: true})
    const input = element.querySelector('input')

    expect(input).to.have.attribute('disabled')
  })

  test('should set a readonly to input', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({readonly: true})
    const input = element.querySelector('input')
    
    expect(input).to.have.attribute('readonly')
  })

  test('should set a maxlength to input', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({maxlength: 10})
    const input = element.querySelector('input')
    
    expect(input).to.have.attribute('maxlength')
  })

  test('should set an autocapitalize to input', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({autocapitalize: true})
    const input = element.querySelector('input')
    
    expect(input).to.have.attribute('autocapitalize', 'true')
  })

  test('should set an autofocus to input', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({autofocus: true})
    const input = element.querySelector('input')
    
    expect(input).to.have.attribute('autofocus', 'true')
  })

  test('should set a pattern to input', () => {
    const element = new MnCoreInputText()
    element.innerHTML = element.render({pattern: true})
    const input = element.querySelector('input')
    
    expect(input).to.have.attribute('pattern', 'true')
  })
})
