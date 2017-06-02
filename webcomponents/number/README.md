[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-number

A number component with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {number} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/input/input.scss';
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/number/number.scss';
```


### Usage

In your html, you can use the tag `mn-number` i.e.

```html
<mn-number placeholder="Number" name="number"></mn-number>
```

The following attributes are supported in this component

- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [placeholder](http://www.w3schools.com/tags/att_input_placeholder.asp)
- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [pattern](http://www.w3schools.com/tags/att_input_pattern.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)

And custom attributes is

#### percentage

Display value as percentage, but storage value as a float number

```html
<mn-number placeholder="Tax" percentage value="0.5"></mn-number>
<!-- display `50%` -->
```

#### precision

Display value as float number with precision defined.

```html
<mn-number placeholder="Tax" precision="3" value="1"></mn-number>
<!-- display `1,000` -->
```

#### currency

Display value as currency, but storage value as a float number. Has precision 2 by default.

```html
<mn-number placeholder="Budget" currency value="10.5"></mn-number>
<!-- display `$ 10,50` -->
```

If you need other precisions, for example 3 decimal places, e.g. `$ 10,539`, you can use it with attribute `precision`, e.g.

```html
<mn-number placeholder="Budget" currency precision="3" value="10.5"></mn-number>
<!-- display `$ 10,500` -->
```

### Style

If you need to change identity of element (and you will), we offer the following css variables

- text-color - color of typed text
- selection-color - the background of typed text on user selection
- border-width
- border-color
- placeholder-color
- invalid-message - a message to concat when are invalid
- currency-symbol - the currency symbol displayed as prefix, default is `$` 

### Angular

```js
const {number} = require('@reservafacil/minimalist')
require('@reservafacil/minimalist/angular') // import minimalist module

// and in your module, add the module 'minimalist', like below
angular.module('app', ['minimalist'])
```

In your template is all similar, but you use `ng-model` and other directives from angular

```html
<!-- in angular, the attr 'name' dont be required, they will be created automatically, using the last part of ngModel name, e.g. ng-model="data.number" will generate a attribute name="number" -->
<mn-number placeholder="Number" ng-model='number' />
```

Others directives like `ng-disabled`, and `ng-required`, are also supported.


