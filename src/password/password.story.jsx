import React from 'react';
import {storiesOf} from '@storybook/react';
import MnPassword from './password.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addWithJSX('password', () => {
    return (
      <MnPassword
        label={text('label', 'password')}
        placeholder={text('placeholder')}
        value={text('value')}
        maxlength={number('maxlength', 10)}
        disabled={boolean('disabled')}
        readonly={boolean('readonly')}
      />
    )
  })
