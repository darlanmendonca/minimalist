[![Build Status](https://travis-ci.org/minimalist-components/webcomponents.svg?branch=master)](https://travis-ci.org/minimalist-components/webcomponents)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-password

A password component with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {password} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/input/input.scss';
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/password/password.scss';
```


### Usage

In your html, you can use the tag `mn-password` i.e.

```html
<mn-password placeholder="Password" name="password"></mn-password>
```

The following attributes are supported in this component

- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [placeholder](http://www.w3schools.com/tags/att_input_placeholder.asp)
- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [maxlength](http://www.w3schools.com/tags/att_input_maxlength.asp)
- [pattern](http://www.w3schools.com/tags/att_input_pattern.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)

### Angular

```js
const {password} = require('@reservafacil/minimalist')
require('@reservafacil/minimalist/angular') // import minimalist module

// and in your module, add the module 'minimalist', like below
angular.module('app', ['minimalist'])
```

In your template is all similar, but you use `ng-model` and other directives from angular

```html
<!-- in angular, the attr 'name' dont be required, they will be created automatically, using the last part of ngModel name, e.g. ng-model="data.password" will generate a attribute name="password" -->
<mn-password placeholder="Password" ng-model='password' />
```

Others directives like `ng-disabled`, and `ng-required`, are also supported.


