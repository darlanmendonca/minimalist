[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-action-sheet

A action-sheet component, with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {actionSheet} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/action-sheet/action-sheet.scss';
```


### Usage

In your html, you can use the tags `mn-action-sheet` and `option` e.g.

```html
<mn-action-sheet id="houses">
  <option>Stark</option>
  <option>Lannister</option>
  <option>Targaryen</option>
</mn-action-sheet>
```

When user click in a option, the event `change` will be dispatched, and you can read what index are selected, in `event.data.index`, e.g.

```js
const sheet = document.querySelector('mn-action-sheet')

sheet.addEventListener('change', event => {
  const {index} = event.data
  console.log(index)
})
```


### Style

If you need to change identity of element (and you will), we offer the following css variables

- border-color - border between options
- cancel-text - text of button cancel

Working in a new style? Open a issue to add it here.
