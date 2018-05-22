import {storiesOf} from '@storybook/angular'
import MnInput from './input.component'
import {withKnobs} from '@storybook/addon-knobs'

storiesOf('minimalist', module)
  .addDecorator(withKnobs)
  .add('input', () => {
    component: MnInput,
    props: {
      value: 'test',
    },
  })
