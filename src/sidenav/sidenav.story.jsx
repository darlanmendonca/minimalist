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
        <MnButton show-sidenav="left">show left sidenav</MnButton>
        <MnButton show-sidenav="right">show right sidenav</MnButton>

        <MnSidenav id="left" class="padding">
          content left here

          <MnButton hide-sidenav>hide</MnButton>
        </MnSidenav>

        <MnSidenav id="right" class="right padding">
          content right here
          <MnButton hide-sidenav>hide</MnButton>
        </MnSidenav>
      </div>
    )
  })
