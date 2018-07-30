### Usage

In your html, you can use the tag `mn-input` i.e.

```html
<mn-input placeholder="Username"></mn-input>
```

# mn-input

A input component. Useful to insert text, with some validation and other states like disabled, readonly, etc.

### Usage

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

### Disabled 

Accept true/false value to set up attrubute. Works with ommitted value, e.g.

```html
<mn-input disabled></mn-input>
<!-- or -->
<mn-input disabled="true"></mn-input>
```

And offer a getter/setter to javascript, e.g.

```js
usernameInput.disabled = true
console.log(form.disabled)
```

### Readonly

Useful to set all childrens as readonly, e.g.

```html
<mn-input readonly></mn-input>
```

And offer a getter/setter to javascript, e.g.

```js
input.readonly = true
console.log(input.readonly)
```

