import React from 'react'
import {storiesOf} from '@storybook/react'
import MnForm from './form.react.jsx'
import MnInputText from '../input-text/input-text.react.jsx'
import MnInputNumber from '../input-number/input-number.react.jsx'
import {withKnobs, boolean} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
  .addWithJSX('form', () => {
    return (
      <MnForm disabled={boolean('disabled', false)} readonly={boolean('readonly', false)}>
        <MnInputText label='username' name='username' />
        <MnInputNumber label='luck number' name='luckNumber' />
      </MnForm>
    )
  })
