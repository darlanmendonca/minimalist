import React from 'react'
import {storiesOf} from '@storybook/react'
import MnForm from './form.react.jsx'
import MnInput from '../input/input.react.jsx'
import MnNumber from '../number/number.react.jsx'
import {withKnobs, boolean} from '@storybook/addon-knobs'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addWithJSX('form', () => {
    return (
      <MnForm disabled={boolean('disabled', false)} readonly={boolean('readonly', false)}>
        <MnInput label='username' name='username' />
        <MnNumber label='luck number' name='luckNumber' />
      </MnForm>
    )
  })
