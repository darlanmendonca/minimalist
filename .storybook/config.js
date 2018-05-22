import {configure, setAddon} from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.jsx$/)
setAddon(JSXAddon)
configure(loadStories, module)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}
