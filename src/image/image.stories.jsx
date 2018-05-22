import React from 'react';
import {storiesOf} from '@storybook/react';
import MnImage from './image.react.jsx'
import {withKnobs, text, boolean} from '@storybook/addon-knobs/react'

storiesOf('minimalist', module)
  .addDecorator(withKnobs)
  .addWithJSX('image', () => {
    return (
      <MnImage
        src={text('src', 'https://assets.rbl.ms/2059944/980x.jpg')}
        perspective={boolean('perspective', false)}
      />
    )
  })
