# mn-list

A list style to display items.

### Usage

```scss
@import 'path/to/node_modules/minimalist-ui/src/list/list.scss';
```

Just use the tag `ul` with class `mn-list`, e.g.

```html
<ul class="mn-list">
  <li><!-- content here --></li>
  <li><!-- content here --></li>
</ul class="mn-list">
```


You can use nested lists, like below

```html
<ul class="mn-list">
  <li>
    Some title for this item
    <ul class="mn-list">
      <li>nested item 1</ul>
      <li>nested item 2</ul>
    </mn-list>
  </ul>
  <li><!-- content here --></ul>
</mn-list>
```