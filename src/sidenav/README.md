# mn-sidenav

Useful to alternate visibility of content.

## Usage

```js
const {sidenav} from 'minimalist-ui'
```

```sass
@import 'path/to/node_modules/minimalist-ui/components/card/card.scss';
@import 'path/to/node_modules/minimalist-ui/components/backdrop/backdrop.scss';
@import 'path/to/node_modules/minimalist-ui/components/sidenav/sidenav.scss';
```

```html
<mn-sidenav id="menu"></mn-sidenav>
```

And to interact with sidenav, use `mn-button` with attribute `open-sidenav` or `close-sidenav`, e.g.

```html
<mn-button open-sidenav="menu">open menu</mn-button>
<mn-button close-sidenav>close the visible sidenav</mn-button>
```

### Positioning

- `.left` - Default behavior, display sidenav on left
- `.right` - display sidenav on right
