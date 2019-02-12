# Sidenav

Useful to alternate visibility of content.

## Usage

```js
const {Sidenav} from 'minimalist-ui'
```

```html
<mn-sidenav id="menu"></mn-sidenav>
```

And to interact with sidenav, use `mn-button`, and target to sidenav id using attributes `show-sidenav`, `hide-sidenav`, or `toggle-sidenav`, e.g.

```html
<mn-button show-sidenav="menu">show menu</mn-button>
<mn-button hide-sidenav>hide the visible sidenav</mn-button>
<mn-button toggle-sidenav="menu">toggle the visible sidenav</mn-button>
```

### Positioning

- `.left` - Default behavior, display sidenav on left
- `.right` - display sidenav on right

```html
<mn-sidenav id="menu" class="right"></mn-sidenav>
```
