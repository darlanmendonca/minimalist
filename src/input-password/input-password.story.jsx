import React from 'react'
import {storiesOf} from '@storybook/react'
import MnInputPassword from './input-password.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
  .addWithJSX('input-password', () => {
    return (
      <MnInputPassword
        label={text('label', 'password')}
        placeholder={text('placeholder')}
        value={text('value')}
        maxlength={number('maxlength', 10)}
        disabled={boolean('disabled')}
        readonly={boolean('readonly')}
      />
    )
  })
