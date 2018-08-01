# mn-button

A button component with minimalist design.

### Usage

```js
const {button} from 'minimalist-ui'
```

```scss
@import 'path/to/node_modules/minimalist-ui/src/input-text/input-text.style.scss';
```

```html
<mn-button>flat button</mn-button>
```

But, if you need other styles, you can use `.raised` and `.action`, e.g.

```html
<mn-button class="raised">raised button</mn-button>
<mn-button class="action">×</mn-button>
<mn-button class="action raised">×</mn-button>
```

### Submit form

If you want to use a `mn-button` to submit a `mn-form`, use the attribute `submit`, e.g.

```html
<mn-form>
  <!-- inputs here -->
  <mn-button submit>submit</mn-button>
</mn-form>
```

### Style

If you need to style button with another indenty, use the css variables as you wish.

- background - background color, gradient, etc.
- size - size of action button, default is 2.5em

```css
/* code below change the background to all styles of .mn-button */
:root {
  --main-color: #329af0; 
}

.mn-button {
  --background: var(--main-color);
}

.mn-button.raised {
  --background: var(--main-color);
}

.mn-button.action {
  --background: var(--main-color);
}
```
