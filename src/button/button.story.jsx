import React from 'react'
import {storiesOf} from '@storybook/react'
import MnButton from './button.react.jsx'
import {withKnobs} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
  .addWithJSX('button', () => {
    const primary = {'--background': 'rgb(50,154,240)', color: '#fff'}
    const warning = {'--background': 'rgb(240,62,62)', color: '#fff'}

    return (
      <div>
        <MnButton>flat button</MnButton>
        <MnButton class="raised">raised button</MnButton>
        <MnButton class="raised" style={primary}>raised button with color</MnButton>
        <MnButton class="action"><i class="zmdi zmdi-plus" /></MnButton>
        <MnButton class="action raised"><i class="zmdi zmdi-edit" /></MnButton>
        <MnButton class="action raised" style={warning}><i class="zmdi zmdi-delete" /></MnButton>
      </div>
    )
  })
