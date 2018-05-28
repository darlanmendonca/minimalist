import React from 'react'
import {storiesOf} from '@storybook/react'
import MnRange from './range.react.jsx'
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs'

storiesOf('minimalist', module)
  .addDecorator(withKnobs)
  .addWithJSX('range', () => {
    return (
      <MnRange />
    )
  })
