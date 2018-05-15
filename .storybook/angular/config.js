import {configure} from '@storybook/angular'

// automatically import all files ending in *.stories.ts
const req = require.context('../../src', true, /.stories.ts$/)
configure(loadStories, module)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}
