import React from 'react';
import {storiesOf} from '@storybook/react';
import MnLoadingCircle from './loading-circle.react.jsx'
import {withKnobs} from '@storybook/addon-knobs'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addWithJSX('loading-circle', () => {
    return (
      <MnLoadingCircle />
    )
  })
