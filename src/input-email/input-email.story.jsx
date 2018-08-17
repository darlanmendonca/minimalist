import React from 'react'
import {storiesOf} from '@storybook/react'
import MnInputEmail from './input-email.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs'
// import {withReadme}  from 'storybook-readme'
// import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  // .addDecorator(withReadme(readme))
  .addWithJSX('input-email', () => {
    return (
      <MnInputEmail
        label={text('label', 'email')}
        placeholder={text('placeholder')}
        value={text('value', 'lorem@gmail.com')}
        disabled={boolean('disabled')}
        readonly={boolean('readonly')}
      />
    )
  })
