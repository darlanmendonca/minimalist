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
const {date} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/date/date.scss';
```


### Usage

In your html, you can use the tag `mn-date` i.e.

```html
<mn-date placeholder="Birthdate" name="birthdate" value="2010-01-30"></mn-date>
<!-- this mn-date will return as value a ISODateString, e.g. 
=> '2010-01-30T03:00:00.000Z' -->
```

All dates need to follow `yyyy-mm-dd` pattern.

The following attributes are supported in this component

- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [placeholder](http://www.w3schools.com/tags/att_input_placeholder.asp)
- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [readonly](http://www.w3schools.com/tags/att_input_readonly.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)
- [min](https://www.w3schools.com/tags/att_input_min.asp)
- [max](https://www.w3schools.com/tags/att_input_max.asp)

A example using max date

```html
<mn-date placeholder="Birthdate" name="birthdate" max="2017-01-01"></mn-date>
```

### Style

If you need to change identity of element (and you will), we offer the following css variables

- text-color - color of typed text
- selection-color - the background of typed text on user selection
- border-width
- border-color
- placeholder-color
- invalid-message - a message to concat when are invalid

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
const {date} = require('@reservafacil/minimalist')
require('@reservafacil/minimalist/angular') // import minimalist module

// and in your module, add the module 'minimalist', like below
angular.module('app', ['minimalist'])
```

In your template is all similar, but you use `ng-model` and other directives from angular

```html
<!-- in angular, the attr 'name' dont be required, they will be created automatically, using the last part of ngModel name, e.g. ng-model="data.birthdate" will generate a attribute name="birthdate" -->
<mn-date placeholder="Birthdate" ng-model='birthdate' />
```

Others directives like `ng-disabled`, and `ng-required`, are also supported.
