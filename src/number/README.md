# mn-number

A input component, extending behaviors from `mn-input` but specific behaviors to input a number.

## Usage

```js
import '@darlanmendonca/minimalist'
```

```html
<mn-form id="someID">
  <mn-number label="Number" name="number"></mn-number>
</mn-form>
```

```js
const form = window.someId
const number = form.number
```

## Attributes

- [label](../input/#label)
- [value](../input/#value)
- [name](../input/#name)
- [placeholder](../input/#placeholder)
- [disabled](../input/#disabled)
- [readonly](../input/#readonly)
- [autofocus](../input/#autofocus)
- [required](../input/#required)

### precision

Format number with precision specified. By default, user is free to type integer or float values, using a comma instead dot.

```html
<mn-number precision="2"></mn-number>
```

```js
number.value = 5
console.log(number.value) // return 5, to user display 5,00
```

### currency

Format number as currency value, like $ 5,00. Default precision is 2, but can be changed using `precision` attribute.

```html
<mn-number currency></mn-number>
```

To change the prefix, change the css varible `currency-symbol`, like example below:

```css
.mn-number {
  --currency-symbol: '€';
}
```

### percentage

Format number as percentage value, e.g.

```html
<mn-number percentage></mn-number>
```

```js
number.value = 1
// display value as 100%
```

### min

Validate a minimum value, e.g.

```html
<mn-number min="0"></mn-value>
```

### max

Validate a maximum value, e.g.

```html
<mn-number max="10"></mn-number>
```

### step

User can increment or decrement value using arrow keys, Up and Down. By default, increment is by 1, if user hold Shift, the value is multiply by 10, and with Alt, divided by 10. To set a different increment, just use attribute, e.g.

```html
<mn-number step="100"></mn-number>
```
