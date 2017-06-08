[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-date

A date component, with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {input} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/input/input.scss';
```


### Usage

In your html, you can use the tag `mn-date` i.e.

```html
<mn-date placeholder="Username" name='username'></mn-date>
```

The following attributes are supported in this component


- [placeholder](http://www.w3schools.com/tags/att_input_placeholder.asp)
- [readonly](http://www.w3schools.com/tags/att_input_readonly.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [min](https://www.w3schools.com/tags/att_input_min.asp)
- [max](https://www.w3schools.com/tags/att_input_max.asp)


### Style

If you need to change identity of element (and you will), we offer the following css variables

- text-color - color of typed text
- selection-color - the background of typed text on user selection
- border-width
- border-color
- placeholder-color
- invalid-message - a message to concat when are invalid
- button-color - the color of button that show/hide password
- button-show-text - text to display in button action show, default is `show`
- button-hide-text - text to display in button action hide, default is `hide`

<!-- This comment will be added when site is ready
Below you can found some examples of styles in codepen

- [default](default url here)
- [blue](blur url here)
- [icon] (icon url here)
- [perspective](perspective url here)
- [rounded](rounded url here) -->

Working in a new style? Open a issue to add it here.

### Angular

```js
const {input} = require('@reservafacil/minimalist')
require('@reservafacil/minimalist/angular') // import minimalist module

// and in your module, add the module 'minimalist', like below
angular.module('app', ['minimalist'])
```

In your template is all similar, but you use `ng-model` and other directives from angular

```html
<!-- in angular, the attr 'name' dont be required, they will be created automatically, using the last part of ngModel name, e.g. ng-model="data.username" will generate a attribute name="username" -->
<mn-date placeholder="Username" ng-model='username' />
```

Others directives like `ng-disabled`, and `ng-required`, are also supported.
