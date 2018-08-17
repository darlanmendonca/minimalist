# mn-input-email

A input component, extending behaviors from `mn-input` but specific behaviors to input a email.

## Usage

```js
import {inputEmail} from 'minimalist-ui'
```

```scss
@import 'path/to/node_modules/minimalist-ui/src/input-text/input-text.style.scss';
@import 'path/to/node_modules/minimalist-ui/src/input-emmail/input-emmail.style.scss';
```

```html
<mn-form id="someID">
  <mn-input-email label="Email" name="email"></mn-input-email>
</mn-form>
```

```js
const form = window.someId
const email = form.email
```

## Attributes

- [label](../input/#label)
- [value](../input/#value)
- [name](../input/#name)
- [placeholder](../input/#placeholder)
- [disabled](../input/#disabled)
- [readonly](../input/#readonly)
- [maxlength](../input/#maxlength)
- [autocapitalize](../input/#autocapitalize)
- [autofocus](../input/#autofocus)
- [pattern](../input/#pattern)
- [required](../input/#required)
