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
    name: 'button',
    url: '/button',
    templateUrl: 'button.template.html',
  },
  {
    name: 'form',
    url: '/form',
    templateUrl: 'form.template.html',
  },
  {
    name: 'inputText',
    url: '/input-text',
    templateUrl: 'input-text.template.html',
  },
  {
    name: 'inputPassword',
    url: '/input-password',
    templateUrl: 'input-password.template.html',
  },
  {
    name: 'inputEmail',
    url: '/input-email',
    templateUrl: 'input-email.template.html',
  },
  {
    name: 'inputNumber',
    url: '/input-number',
    templateUrl: 'input-number.template.html',
  },
  {
    name: 'sidenav',
    url: '/sidenav',
    templateUrl: 'sidenav.template.html',
  },
  {
    name: 'dialog',
    url: '/dialog',
    templateUrl: 'dialog.template.html',
  },
  {
    name: 'image',
    url: '/image',
    templateUrl: 'image.template.html',
  },
  {
    name: 'code',
    url: '/code',
    templateUrl: 'code.template.html',
  },
]

const router = new Router(routes, window.router)
