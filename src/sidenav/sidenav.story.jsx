import React from 'react'
import {storiesOf} from '@storybook/react'
import MnButton from '../button/button.react.jsx'
import MnSidenav from './sidenav.react.jsx'
import {withKnobs} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
  .addWithJSX('sidenav', () => {
    return (
      <div>
        <MnButton open-sidenav="left">show left sidenav</MnButton>
        <MnButton open-sidenav="right">show right sidenav</MnButton>

        <MnSidenav id="left" class="padding">
          content left here

          <MnButton close-sidenav>close</MnButton>
        </MnSidenav>

        <MnSidenav id="right" class="right padding">
          content right here
          <MnButton close-sidenav>close</MnButton>
        </MnSidenav>
      </div>
    )
  })
