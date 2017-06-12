[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-backdrop

A layer component, with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {backdrop} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/backdrop/backdrop.scss';
```


### Usage

In your html, you can use the tag `mn-backdrop` i.e.

```html
<mn-backdrop></mn-input>
```

And in js, you show/hide using respective methods

```js
const backdrop = document.querySelector('mn-backdrop')
backdrop.show() // display backdrop layer
```

```js
backdrop.hide() // hide backdrop layer
```

When visible, backdrop listen keypress events in key `ESC` to hide layer.

### Style

If you need to change identity of element (and you will), we offer the following css variables

- background-color - background color of layer, default is #212529
- opacity - opacity of layer, default is 0.6
