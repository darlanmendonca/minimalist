import React from 'react';
import {storiesOf} from '@storybook/react';
import MnInput from './input.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs/react'

storiesOf('minimalist', module)
  .addDecorator(withKnobs)
  .addWithJSX('MnInput', () => {
    return (
      <MnInput
        label={text('label')}
        placeholder={text('placeholder')}
        value={text('value')}
        maxlength={number('maxlength', 10)}
        disabled={boolean('disabled')}
        readonly={boolean('readonly')}
      />
    )
  })
