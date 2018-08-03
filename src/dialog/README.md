# mn-dialog

Useful to display and focus a content.

## Usage

```js
const {dialog} from 'minimalist-ui'
```

```sass
@import 'path/to/node_modules/minimalist-ui/components/card/card.scss';
@import 'path/to/node_modules/minimalist-ui/components/backdrop/backdrop.scss';
@import 'path/to/node_modules/minimalist-ui/components/dialog/dialog.scss';
```

```html
<mn-dialog id="dialog1"></mn-dialog>
```

And to interact with dialog, use `mn-button`, and target to dialog id using attributes `show-dialog`, `hide-dialog`, or `toggle-dialog`, e.g.

```html
<mn-button open-dialog="dialog1">open dialog</mn-button>
<mn-button close-dialog>close visible dialog</mn-button>
<mn-button toggle-dialog>toggle visible dialog</mn-button>
```
