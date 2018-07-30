# mn-password

A input component, extending behaviors from `mn-input` but specific behaviors to password.

## Usage

```js
import '@darlanmendonca/minimalist'
```

```html
<mn-form id="someID">
  <mn-password label="Password" name="password"></mn-password>
</mn-form>
```

```js
const form = window.someId
const password = form.password
```

## Attributes

- [label](#label)
- [value](#value)
- [name](#name)
- [placeholder](#placeholder)
- [disabled](#disabled)
- [readonly](#readonly)
- [maxlength](#maxlength)
- [autocapitalize](#autocapitalize)
- [autofocus](#autofocus)
- [pattern](#pattern)
- [required](#required)
