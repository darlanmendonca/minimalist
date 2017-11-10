[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-list

Responsive layouts, with CSS3 flexbox. 
Inspired by [angular material layout](https://material.angularjs.org/latest/layout/introduction).

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {list} = require('@reservafacil/minimalist')
```

```sass
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/list/list.scss';
```


### Usage

Just use the tag `mn-list` and childrens with class `.mn-item`.

```html
<mn-list>
  <div class="mn-item"><!-- content here --></div>
  <div class="mn-item"><!-- content here --></div>
</mn-list>
```


You can use nested lists, like below

```html
<mn-list>
  <div class="mn-item">
    Some title for this item
    <mn-list>
      <div class="mn-item">nested item 1</div>
      <div class="mn-item">nested item 2</div>
    </mn-list>
  </div>
  <div class="mn-item"><!-- content here --></div>
</mn-list>
```


### Collapse

If you need minimize and expand a nested list, you can use the attribute `collapse` and class `.mn-item-detail`. See example below

```html
<mn-list>
  <div class="mn-item" collapse><!-- this item begins hide, and when click, expand the nested mn-list -->
    Some title for this item
    <mn-list class="">
      <div class="mn-item">nested item 1</div>
      <div class="mn-item">nested item 2</div>
    </mn-list>
  </div>
  <div class="mn-item"><!-- content here --></div>
</mn-list>
```
