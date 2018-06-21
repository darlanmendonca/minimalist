import React from 'react'
import {storiesOf} from '@storybook/react'
import MnForm from './form.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addWithJSX('form', () => {
    return (
      <MnForm />
    )
  })
