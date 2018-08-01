import '@webcomponents/custom-elements'
import { init as typed } from 'ityped'
import minimalist from '../src/index.js'

typed(document.querySelector('#typed .text'), {
  showCursor: true,
  backDelay: 2000,
  strings: [
    'vanilla js',
    'react.js',
    'angular 1.x',
    'angular 2.x',
    'vue.js',
    'ember.js',
  ]
})
