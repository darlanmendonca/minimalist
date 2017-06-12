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
const MnBackdrop = require('@reservafacil/minimalist').backdrop
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/backdrop/backdrop.scss';
```


### Usage

In your js, you can use the class `MnBackdrop` i.e.

```js
// create a layer
const backdrop = new MnBackdrop()
```

```js
// display backdrop layer
backdrop.show()
```

```js
// hide backdrop layer
backdrop.hide()
```

When visible, backdrop listen keypress events in key `ESC` to hide layer.

### Style

If you need to change identity of element (and you will), we offer the following css variables

- background-color - background color of layer, default is #212529
- opacity - opacity of layer, default is 0.6
