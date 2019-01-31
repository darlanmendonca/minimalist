import {expect} from 'chai'
import MnCoreInputText from './core-input-text.class.js'

describe('MnCoreInputText', () => {
  test('should be a es6 class', () => {
    expect(MnCoreInputText).to.be.an('function')
    expect(MnCoreInputText.toString().startsWith('class')).to.be.true
  })

  test('should listen attribute changes', () => {
    expect(MnCoreInputText.observedAttributes).to.deep.equal([
      'label',
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'maxlength',
      'autocapitalize',
      'autofocus',
      'pattern',
    ])
  })

  test('should instanciate using a constructor', () => {
    const element = new MnCoreInputText()
    expect(element).to.be.instanceof(MnCoreInputText)
  })

  test('should create element', () => {
    const element = document.createElement('mn-core-input-text')
    expect(element).to.be.instanceof(MnCoreInputText)
  })

  test('should render a markup', () => {
    const element = new MnCoreInputText()
    const props = {label: '', value: '', name: '', placeholder: ''}

    expect(element.render(props)).to.be.equal(`
      <label></label>
      <input
        value=""
        name=""
        placeholder=""
        
      />
    `)
  })

  test('should have a disabled state', () => {
    const element = new MnCoreInputText()
    const props = {label: '', value: '', name: '', placeholder: '', disabled: true}

    expect(element.render(props)).to.be.equal(`
      <label></label>
      <input
        value=""
        name=""
        placeholder=""
        disabled
      />
    `)
  })
})
