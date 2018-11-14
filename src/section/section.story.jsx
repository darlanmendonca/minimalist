import React from 'react'
import {storiesOf} from '@storybook/react'
import '../layout/layout.style.scss'
import '../list/list.style.scss'
import './section.style.scss'
import {withKnobs, array} from '@storybook/addon-knobs'
import {withReadme}  from 'storybook-readme'
import readme from './README.md'
import styles from '@sambego/storybook-styles'

storiesOf('styles', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))
  .addDecorator(styles({
    background: '#f1f3f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }))
  .addWithJSX('section', () => {
    const margin = '1em'

    return (
      <div className="mn-layout-column mn-layout-sm-row">
        <div className="mn-section padding-title" style={{margin}}>
          <header>
            <h2>lorem ipsum</h2>
          </header>
          <img src="http://cdn1.sciencefiction.com/wp-content/uploads/2015/03/Game-of-Thrones-season-5-thumb.jpg" />
        </div>

        <div className="mn-section padding-title flex-sm-50 flex-md-60" style={{margin}}>
          <h2>lorem ipsum</h2>
          <ul className="mn-list">
            <li>John Snow</li>
            <li>Daenerys Targaryen</li>
            <li>Tyrion Lannister</li>
          </ul>
        </div>
      </div>
    )
  })
