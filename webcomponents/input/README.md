[![Build Status](https://travis-ci.org/minimalist-components/webcomponents.svg?branch=master)](https://travis-ci.org/minimalist-components/webcomponents)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-input

A input component (only for text), with minimalist design

<!-- See the [demo](https://minimalist-components.github.io/mn-input/) -->

<!-- <a href="https://minimalist-components.github.io/mn-input/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-input/master/preview.gif">
</a> -->

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
@import @import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/input/.scss';
```


### Usage

In your html, you can use the tag `mn-input` i.e.

```html
<mn-input placeholder="Username" name='username'></mn-input>
```

The following attributes are supported in this component

- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [placeholder](http://www.w3schools.com/tags/att_input_placeholder.asp)
- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [maxlength](http://www.w3schools.com/tags/att_input_maxlength.asp)
- [pattern](http://www.w3schools.com/tags/att_input_pattern.asp)
- [readonly](http://www.w3schools.com/tags/att_input_readonly.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)
- [autocapitalize](https://developers.google.com/web/updates/2015/04/autocapitalize)

### Angular

```js
// instead this => const {input} = require('@reservafacil/minimalist')
// use the following code
const {input} = require('@reservafacil/minimalist/angular')

// and in your module, add the module 'minimalist', like below
angular.module('app', ['minimalist'])
```

In your template is all similar, but you use `ng-model` and other directives from angular

```html
<!-- in angular, the attr 'name' dont be required, they will be created automatically, using the last part of ngModel name, e.g. ng-model="data.username" will generate a attribute name="username" -->
<mn-input placeholder="Username" ng-model='username'></mn-input>
```

Others directives like `ng-disabled`, and `ng-required`, are also supported.


