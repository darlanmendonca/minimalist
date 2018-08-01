# mn-sidenav

Useful to alternate visibility of content.

## Usage

```js
const {sidenav} from 'minimalist-ui'
```

```sass
@import 'path/to/node_modules/minimalist/components/card/card.scss';
@import 'path/to/node_modules/minimalist/components/backdrop/backdrop.scss';
@import 'path/to/node_modules/minimalist/components/sidenav/sidenav.scss';
```

```html
<mn-sidenav id="menu"></mn-sidenav>
```

And to interact with sidenav, use `mn-button` with attribute `open-sidenav` or `close-sidenav`, e.g.

```html
<mn-button open-sidenav="menu">open menu</mn-button>
<mn-button close-sidenav>close the visible sidenav</mn-button>
```

### Auto scroll to active element

Sometimes, sidenav will be used to navigation. In this case, to "current elements", use the class `.active`, so, when sidenav is opened, they will be scrolled to element with class `.active`. Example

```html
<mn-sidenav id="menu">
  <!-- previous content here -->
  <a href="#" class="active">current link</a><!-- on open sidenav, they automatically scroll to that element -->
  <!-- next content here -->
</mn-sidenav>
```

### Positioning

- `.left` - Default behavior, display sidenav on left
- `.right` - display sidenav on right
