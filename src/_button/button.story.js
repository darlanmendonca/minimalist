import {storiesOf} from '@storybook/html'
import {withKnobs, text} from '@storybook/addon-knobs'
import './button.style.scss'
import './button.component.js'

storiesOf('minimalist', module)
  .addDecorator(withKnobs)
  .add('mn-button', () => {
    return `
      <mn-button>${text('text', 'lorem')}</mn-button>
    `
  })
