import React from 'react';
import {storiesOf} from '@storybook/react';
import MnInputNumber from './input-number.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
  .addWithJSX('input-number', () => {
    return (
      <MnInputNumber
        label={text('label', 'number')}
        placeholder={text('placeholder')}
        value={number('value')}
        disabled={boolean('disabled')}
        readonly={boolean('readonly')}
        currency={boolean('currency')}
        percentage={boolean('percentage')}
        precision={number('precision')}
        min={number('min')}
        max={number('max')}
      />
    )
  })
