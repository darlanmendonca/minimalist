[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-form

A form component, with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {form} = require('@reservafacil/minimalist')
```


### Usage

In your html, you can use the tags `mn-form` e.g.

```html
<mn-form>
  <mn-input placeholder="username" name="username" required></mn-input>
  <mn-password placeholder="password" name="password" required></mn-password>
  <button type="submit">submit</button>
</mn-form>
```

#### Submit

The submit can be do using a `button` or `mn-button`, e.g.

```html
<mn-form>
  <button type="submit">submit</button>
  <!-- or -->
  <mn-button submit>submit</mn-button>
</mn-form>
```

```js
const form = document.querySelector('mn-form')

// The form will be submited if you click in a child button with attribute submit, or type enter in a input
form.addEventListener('submit', (event) => {
  // but this event only is dispatched if form is valid
  console.log(event.data) // the data of form in JSON object
})
```


#### Reset

If you want reset the `mn-form` to initial state, use the attribute `reset-form` in a button, e.g.

```html
<mn-form>
  <button reset-form>reset</button>
</mn-form>
```

The following attributes are supported in this component

- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)


### Angular

```js
const {form} = require('@reservafacil/minimalist')
require('@reservafacil/minimalist/angular') // import minimalist module

// and in your module, add the module 'minimalist', like below
angular.module('app', ['minimalist'])
```

In your template is all similar, but you use `submit` directive

```html
<!-- controller.login is our submit method, defined in angular controller -->
<mn-form submit="controller.login()">
  <!-- content of form here -->
</mn-form>
```

Others directives like `ng-disabled`, and `ng-required`, are also supported.
