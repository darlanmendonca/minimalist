[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-sidenav

A sidenav component with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {sidenav} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/card/card.scss';
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/sidenav/sidenav.scss';
```


### Usage

In your html, you can use the tag `mn-sidenav` i.e.

```html
<mn-sidenav id="menu"></mn-sidenav>
```

And to interact with sidenav, use buttons with attribute `open-dialog` or `close-dialog`, e.g.

```html
<button open-dialog="menu">open menu</button>
<button close-dialog>close the visible sidenav</button>
```

### Scroll

Sometimes, sidenav will be used to navigation. In this case, to "current elements", use the class `.active`, so, when sidenav is opened, they will be scrolled to element with class `.active`. Example

```html
<mn-sidenav id="menu">
  <!-- previous content here -->
  <a href="#">current link</a><!-- on open sidenav, they automatically scroll to that element -->
  <!-- next content here -->
</mn-sidenav>
```

