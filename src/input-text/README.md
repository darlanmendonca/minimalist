# mn-input-text

A input component. Useful to insert text, with some validation and other states like disabled, readonly, etc.

## Usage

```js
import {inputText} from 'minimalist-ui'
```

```scss
@import 'path/to/node_modules/minimalist-ui/src/input-text/input-text.style.scss';
```

```html
<mn-form id="someID">
  <mn-input-text label="Type a name" name="username"></mn-input-text>
</mn-form>
```

```js
const form = window.someId
const input = form.username
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

### label

Describe to user what type on input.

```html
<mn-input-text label="Username"></mn-input-text>
```

```js
input.label = 'Username'
```

### value

Set initial value of input, e.g.

```html
<mn-input-text value="John Snow"></mn-input-text>
```

```js
input.value = 'John Snow'
```

### name

Identify input on form context.

```html
<mn-input-text name="username"></mn-input-text>
```

```js
console.log(form.username)
```

### placeholder

Useful to give a hint or describe content to be typed on input. Hide on type some value.

```html
<mn-input-text placeholder="Type your first name"></mn-input-text>
```

### disabled

Disable all behaviors of input, like navigation, write and selection.
Accept true/false value and works with ommitted value, e.g.

```html
<mn-input-text disabled></mn-input-text>
<!-- or -->
<mn-input-text disabled="true"></mn-input-text>
```

```js
usernameInput.disabled = true
```

### readonly

Set input to read only mode, allowing only selection and navigation.
Accept true/false value and works with ommitted value, e.g.

```html
<mn-input-text readonly></mn-input-text>
```

```js
input.readonly = true
```

### maxlength

Limit number of chars that user can type, e.g.

```html
<mn-input-text maxlength="4"></mn-input-text>
``` 

### autocapitalize

Useful for mobile, turn keyboard as upper case on first letter, e.g.

```html
<mn-input-text autocapitalize="true">
``` 

```js
input.autocapitaze = false
console.log(input.autocapitalize)
```

### autofocus

Useful to focus input automatically once time they are visible.

```html
<mn-input-text autofocus></mn-input-text>
```

### pattern

Enable validation of string, using a regular expression, e.g.

```html
<mn-input-text pattern="^[\w\s]$"></mn-input-text><!-- only letters and space on input -->
```

```html
input.pattern = /^[\w\s]$/
console.log(input.pattern)
```

### required

Set input as required as form validation.

```html
<mn-input-text required></mn-input-text>
```

```js
input.required = true
```

## Properties

### hasValue

Useful to check if input has a value filled, e.g.

```js
console.log(input.hasValue) // return true or false
```

## Methods

### validate()

Check all validations on input, and return true if is valid. Is called by default on events `input` and `blur`, only if parent form already tried submit.

```js
input.validate()
```

### focus()

Focus on input

```js
input.focus()
```

### blur()

Remove the focus from input

```js
input.blur()
```
