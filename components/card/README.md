[![Build Status](https://travis-ci.org/darlanmendonca/minimalist.svg?branch=master)](https://travis-ci.org/darlanmendonca/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-card

Responsive layouts, with CSS3 flexbox. 
Inspired by [angular material layout](https://material.angularjs.org/latest/layout/introduction).

### Install

```sh
# working in progress, not available yet
npm install minimalist
```

```sass
@import 'path/to/node_modules/minimalist/components/card/card.scss';
```


### Usage

Just use the class `.mn-card` in a element. To has padding, use the class `.padding`

```html
<div class="mn-card padding">
  <h2>Title</h2>
  <p>lorem ipsum</p>
</div>
```

If you want padding only in header, and not in content, use the class `.padding-title`

```html
<div class="mn-card padding-title">
  <h2>Title</h2>
  <p>lorem ipsum</p>
</div>
```

Too works if you use a <header> wraping the tags h2, h3, etc.
