import '@webcomponents/custom-elements'
import '../src/index.js' // minimalist-ui

import Router from './src/router/router.class.js'

const routes = [
  {
    name: 'home',
    url: '/',
    templateUrl: 'home.template.html',
  },
  {
    name: 'inputText',
    url: '/input-text',
    templateUrl: 'input-text.template.html',
  },
]

const router = new Router(routes, window.router)
