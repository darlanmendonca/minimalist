import React from 'react'
import {storiesOf} from '@storybook/react'
import MnButton from '../button/button.react.jsx'
import MnInputText from '../input-text/input-text.react.jsx'
import MnDialog from './dialog.react.jsx'
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
  .addWithJSX('dialog', () => {
    return (
      <div>
        <MnButton open-dialog="dialog1">open dialog</MnButton>
        <MnDialog id="dialog1">
          <MnInputText autofocus />
          <p>lorem ipsum dolor sit amet</p>
        </MnDialog>
      </div>
    )
  })
