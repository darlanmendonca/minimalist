### Usage

In your html, you can use the tag `mn-input` i.e.

```html
<mn-input placeholder="Username"></mn-input>
```

# mn-input

A input component. Useful to insert text, with some validation and other states like disabled, readonly, etc.

## Usage

```js
import '@darlanmendonca/minimalist'
```

```html
<mn-form id="someID">
  <mn-input label="Type a name" name="username"></mn-input>
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

### label

Describe to user what type on input.

```html
<mn-input label="Username"></mn-input>
```

```js
input.label = 'Username'
```

### value

Set initial value of input, e.g.

```html
<mn-input value="John Snow"></mn-input>
```

```js
input.value = 'John Snow'
```

### name

Identify input on form context.

```html
<mn-input name="username"></mn-input>
```

```js
console.log(form.username)
```

### placeholder

Useful to give a hint or describe content to be typed on input. Hide on type some value.

```html
<mn-input placeholder="Type your first name"></mn-input>
```

### disabled

Disable all behaviors of input, like navigation, write and selection.
Accept true/false value and works with ommitted value, e.g.

```html
<mn-input disabled></mn-input>
<!-- or -->
<mn-input disabled="true"></mn-input>
```

```js
usernameInput.disabled = true
```

### readonly

Set input to read only mode, allowing only selection and navigation.
Accept true/false value and works with ommitted value, e.g.

```html
<mn-input readonly></mn-input>
```

```js
input.readonly = true
```

### maxlength

Limit number of chars that user can type, e.g.

```html
<mn-input maxlength="4"></mn-input>
``` 

### autocapitalize

Useful for mobile, turn keyboard as upper case on first letter, e.g.

```html
<mn-input autocapitalize="true">
``` 

```js
input.autocapitaze = false
console.log(input.autocapitalize)
```

### autofocus

Useful to focus input automatically once time they are visible.

```html
<mn-input autofocus></mn-input>
```

### pattern

Enable validation of string, using a regular expression, e.g.

```html
<mn-input pattern="^[\w\s]$"></mn-input><!-- only letters and space on input -->
```

```html
input.pattern = /^[\w\s]$/
console.log(input.pattern)
```

### required

Set input as required as form validation.

```html
<mn-input required></mn-input>
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

### Methods

### validate()

Check all validations on input, and return true if is valid. Is called by default on events `input` and `blur`, only if parent form already tried submit.

```js
input.validate()
```
