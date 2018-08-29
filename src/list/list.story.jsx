import React from 'react'
import {storiesOf} from '@storybook/react'
import './list.style.scss'
import {withKnobs, array} from '@storybook/addon-knobs'
// import {withReadme}  from 'storybook-readme'
// import readme from './README.md'

storiesOf('components', module)
  .addDecorator(withKnobs)
  // .addDecorator(withReadme(readme))
  .addWithJSX('list', () => {
    const items = array('items', ['stark', 'lannister', 'targaryen'])

    return (
      <ul className="mn-list">
        {
          items.map(item =>
            <li className="mn-item">{item}</li>
          )
        }
      </ul>
    )
  })
