import {configure} from '@storybook/html'

configure(loadStories, module)

function loadStories() {
  const req = require.context('../src', true, /.story.js$/)
  req.keys().forEach((filename) => req(filename))
}
