import React from 'react'
import {storiesOf} from '@storybook/react'
import MnButton from '../button/button.react.jsx'
import MnSidenav from './sidenav.react.jsx'
import MnInputText from '../input-text/input-text.react.jsx'
import {withKnobs} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'
import styles from '@sambego/storybook-styles'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
  .addDecorator(styles({
    background: '#f1f3f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }))
  .addWithJSX('sidenav', () => {
    return (
      <div>
        <MnButton show-sidenav="left">show left sidenav</MnButton>
        <MnButton show-sidenav="right">show right sidenav</MnButton>

        <MnSidenav id="left" class="padding">
          content left here
          <MnInputText autofocus />

          <MnButton hide-sidenav>hide</MnButton>
        </MnSidenav>

        <MnSidenav id="right" class="right padding">
          content right here
          <MnButton hide-sidenav>hide</MnButton>
        </MnSidenav>
      </div>
    )
  })
