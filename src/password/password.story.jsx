import React from 'react';
import {storiesOf} from '@storybook/react';
import MnPassword from './password.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
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
