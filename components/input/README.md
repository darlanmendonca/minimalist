[![Build Status](https://travis-ci.org/darlanmendonca/minimalist.svg?branch=master)](https://travis-ci.org/darlanmendonca/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-input

A input component (only for text), with minimalist design

### Install

```sh
# working in progress, not available yet
npm install minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {input} = require('minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/minimalist/components/input/input.scss';
```


### Usage

In your html, you can use the tag `mn-input` i.e.

```html
<mn-input placeholder="Username" name="username"></mn-input>
```

The following attributes are supported in this component

- [placeholder](https://darlanmendonca.github.io/minimalist/input.html#placeholder)
- [name](https://darlanmendonca.github.io/minimalist/input.html#name)
- [value](https://darlanmendonca.github.io/minimalist/input.html#value)
- [multiple](https://darlanmendonca.github.io/minimalist/input.html#multiple)
- [autofocus](https://darlanmendonca.github.io/minimalist/input.html#autofocus)
- [autocapitalize](https://darlanmendonca.github.io/minimalist/input.html#autocapitalize)
- [maxlength](https://darlanmendonca.github.io/minimalist/input.html#maxlength)
- [required](https://darlanmendonca.github.io/minimalist/input.html#required)
- [pattern](https://darlanmendonca.github.io/minimalist/input.html#pattern)
- [readonly](https://darlanmendonca.github.io/minimalist/input.html#readonly)
- [disabled](https://darlanmendonca.github.io/minimalist/input.html#disabled)

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
const {input} = require('minimalist')
require('minimalist/angular') // import minimalist module

// and in your module, add the module 'minimalist', like below
angular.module('app', ['minimalist'])
```

In your template is all similar, but you use `ng-model` and other directives from angular

```html
<!-- in angular, the attr 'name' dont be required, they will be created automatically, using the last part of ngModel name, e.g. ng-model="data.username" will generate a attribute name="username" -->
<mn-input placeholder="Username" ng-model='username' />
```

Others directives like `ng-disabled`, and `ng-required`, are also supported.


