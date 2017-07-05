[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-radio

A radio component with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {radio} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/radio/radio.scss';
```


### Usage

In your html, you can use the tag `mn-radio`, e.g.

```html
<form>
  <mn-radio value="stark" name="house"></mn-radio>
  <mn-radio value="lannister" name="house" checked></mn-radio>
</form>
```

```js
const form = document.querySelector('form')

form.house.value
```

The following attributes are supported in this component

- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [checked](https://www.w3schools.com/tags/att_input_checked.asp)
- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [readonly](http://www.w3schools.com/tags/att_input_readonly.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)

### Style

If you need to change identity of element (and you will), we offer the following css variables

- color - color of border and details

Working in a new style? Open a issue to add it here.

### Angular

```js
const {radio} = require('@reservafacil/minimalist')
require('@reservafacil/minimalist/angular') // import minimalist module

// and in your module, add the module 'minimalist', like below
angular.module('app', ['minimalist'])
```

In your template is all similar, but you use `ng-model` and other directives from angular

```html
<!-- in angular, the attr 'name' dont be required, they will be created automatically, using the last part of ngModel name, e.g. ng-model="data.house" will generate a attribute name="house" -->
<mn-radio ng-model="house"></mn-radio>
```

Others directives like `ng-disabled`, and `ng-required`, are also supported.
