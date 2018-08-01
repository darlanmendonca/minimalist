# mn-backdrop

A black layer used to help user to focus a content. Commonly used to make a 'lightbox effect'.

### Install

```js
import {backdrop} from 'minimalist-ui'
```

```sass
@import 'path/to/node_modules/minimalist/src/backdrop/backdrop.scss';
```

```html
<body class="mn-backdrop"></body>
```

### Usage

By default, backdrop is hidden. To display it, use the static methods `show` and `hide`, e.g.

```js
backdrop.show()
```

```js
backdrop.hide()
```
