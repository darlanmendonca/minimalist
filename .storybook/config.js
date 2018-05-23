import {configure, setAddon} from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

const req = require.context('../src', true, /.story.jsx$/)

setAddon(JSXAddon)
configure(loadStories, module)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}
