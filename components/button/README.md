[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-button

A button component with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {button} = require('@reservafacil/minimalist')
```

```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/components/button/button.scss';
```


### Usage

In your html, you can use the tag `mn-button`, e.g.

```html
<mn-button>flat button</mn-button>
```

But, if you need other styles, you can use `.raised` and `.action`, e.g.

```html
<mn-button class="action">icon here</mn-button>
```

```html
<mn-button class="raised">raised button</mn-button>
```

### Submit form

If you want to use a `mn-button` to submit a form (or mn-form), use the attribute submit, e.g.

```html
<mn-form>
  <!-- inputs here -->
  <mn-button submit>submit</mn-button>
</mn-form>
```

### Style

If you need to style button with another indenty, use the css variables as you wish.

- background - background color, gradient, etc.

```css
/* code below change the background to all styles of .mn-button */
:root {
  --main-color: #329af0; 
}

.mn-button {
  --background: var(--main-color);
}

.mn-button.raised {
  --background: var(--main-color);
}

.mn-button.action {
  --background: var(--main-color);
}
```
