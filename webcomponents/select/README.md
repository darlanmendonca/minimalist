[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-select

A select component, with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {select} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/action-sheet/action-sheet.scss';
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/select/select.scss';
```


### Usage

In your html, you can use the tags `mn-select` and `option` e.g.

```html
<mn-select placeholder="House" name="house">
  <option>Stark</option>
  <option>Lannister</option>
  <option>Targaryen</option>
</mn-date>
```

You can define initial value using attribute `value` in tag `mn-select`, e.g.

```html
<mn-select placeholder="House" name="house" value="Stark">
  <option>Stark</option><!-- initial value will be Stark -->
  <option>Lannister</option>
  <option>Targaryen</option>
</mn-date>
```

Too works with attribute `selected` in tag `option`, e.g.

```html
<mn-select placeholder="House" name="house">
  <option>Stark</option>
  <option>Lannister</option>
  <option selected>Targaryen</option><!-- initial value will be Targaryen -->
</mn-date>
```

By default each option the text content, if you need a different value for each option, use attribute value in tag `option`, e.g.

```html
<mn-select placeholder="House" name="house">
  <option value="wolf">Stark</option>
  <option value="lion">Lannister</option>
  <option selected value="dragon">Targaryen</option><!-- initial value will be dragon -->
</mn-date>
```

You use as value strings, number, arrays and objects

```html
<mn-select placeholder="House" name="house">
  <option value="1">Stark</option><!-- if selected, the value of house will be a number 1 -->
  <option value="{name: 'lannister'}">Lannister</option><!-- if selected, the value of house will be an object -->
  <option selected value="['dragon']">Targaryen</option><!-- if selected, the value of house will be an array -->
</mn-date>
```

The following attributes are supported in this component

- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [placeholder](http://www.w3schools.com/tags/att_input_placeholder.asp)
- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [readonly](http://www.w3schools.com/tags/att_input_readonly.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)

### Style

If you need to change identity of element (and you will), we offer the following css variables

- text-color - color of typed text
- selection-color - the background of typed text on user selection
- border-width
- border-color
- placeholder-color
- invalid-message - a message to concat when are invalid
- icon-color - color of arrow icon
- option-background - background color to option hovered

Working in a new style? Open a issue to add it here.

### Angular

```js
const {select} = require('@reservafacil/minimalist')
require('@reservafacil/minimalist/angular') // import minimalist module

// and in your module, add the module 'minimalist', like below
angular.module('app', ['minimalist'])
```

In your template is all similar, but you use `ng-model` and other directives from angular

```html
<!-- in angular, the attr 'name' dont be required, they will be created automatically, using the last part of ngModel name, e.g. ng-model="data.house" will generate a attribute name="house" -->
<mn-select placeholder="House" ng-model='house'>
  <option ng-repeat="house in houses" value="{{ house }}">{{ house }}</option>
</mn-select>
```

Others directives like `ng-disabled`, and `ng-required`, are also supported.
