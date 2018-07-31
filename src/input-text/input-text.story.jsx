import React from 'react'
import {storiesOf} from '@storybook/react'
import MnInputText from './input-text.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
  .addWithJSX('input-text', () => {
    return (
      <MnInputText
        label={text('label', 'username')}
        placeholder={text('placeholder', 'e.g. johnsnow')}
        value={text('value')}
        disabled={boolean('disabled')}
        readonly={boolean('readonly')}
        maxlength={number('maxlength', 100)}
      />
    )
  })
