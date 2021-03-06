# mn-sidenav

Useful to alternate visibility of content.

## Usage

```js
const {sidenav} from 'minimalist-ui'
```

```sass
@import 'path/to/node_modules/minimalist-ui/components/section/section.scss';
@import 'path/to/node_modules/minimalist-ui/components/backdrop/backdrop.scss';
@import 'path/to/node_modules/minimalist-ui/components/sidenav/sidenav.scss';
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
