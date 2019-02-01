import {storiesOf} from '@storybook/html'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import {setAttribute} from '../component/component.class.js'
import '../input-text/input-text.style.scss';
import './input-text.class.js'


storiesOf('minimalist', module)
  .addDecorator(withKnobs)
  .add('input-text', () => {
    const label = setAttribute('label', text('label', 'lorem'))
    const placeholder = setAttribute('placeholder', text('placeholder', 'ipsum'))
    const value = setAttribute('value', text('value'))
    const name = setAttribute('name', text('name'))
    const disabled = setAttribute('disabled', boolean('disabled'))
    const readonly = setAttribute('readonly', boolean('readonly'))
    const maxlength = setAttribute('maxlength', number('maxlength'))
    const autocapitalize = setAttribute('autocapitalize', boolean('autocapitalize'))
    const autofocus = setAttribute('autofocus', boolean('autofocus'))
    const pattern = setAttribute('pattern', text('pattern'))

    return `
      <mn-input-text 
        ${label}
        ${placeholder}
        ${value}
        ${name}
        ${disabled}
        ${readonly}
        ${maxlength}
        ${autocapitalize}
        ${autofocus}
        ${pattern}
      />
    `
  })
