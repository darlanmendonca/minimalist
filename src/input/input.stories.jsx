import React from 'react'
import {storiesOf} from '@storybook/react'
import MnInput from './input.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs/react'

storiesOf('minimalist', module)
  .addDecorator(withKnobs)
  .addWithJSX('input', () => {
    return (
      <MnInput
        label={text('label', 'username')}
        placeholder={text('placeholder', 'e.g. johnsnow')}
        value={text('value')}
        disabled={boolean('disabled')}
        readonly={boolean('readonly')}
        maxlength={number('maxlength', 100)}
      />
    )
  })
