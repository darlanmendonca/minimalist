import React from 'react';
import {storiesOf} from '@storybook/react';
import MnNumber from './number.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs/react'

storiesOf('minimalist', module)
  .addDecorator(withKnobs)
  .addWithJSX('number', () => {
    return (
      <MnNumber
        label={text('label', 'number')}
        placeholder={text('placeholder')}
        value={number('value')}
        disabled={boolean('disabled')}
        readonly={boolean('readonly')}
        currency={boolean('currency')}
        precision={number('precision')}
      />
    )
  })
