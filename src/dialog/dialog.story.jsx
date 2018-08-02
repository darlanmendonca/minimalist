import React from 'react'
import {storiesOf} from '@storybook/react'
import MnButton from '../button/button.react.jsx'
import MnDialog from './dialog.react.jsx'
import {withKnobs} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
  .addWithJSX('dialog', () => {
    return (
      <div>
        <MnButton show-dialog="dialog1">show dialog</MnButton>
        <MnDialog>
          <p>lorem ipsum dolor sit amet</p>
        </MnDialog>
      </div>
    )
  })
