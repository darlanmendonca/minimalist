# mn-card

Useful to define a section, or content.

```sass
@import 'path/to/node_modules/minimalist-ui/components/card/card.scss';
```

### Usage

Just use the class `.mn-card` in a element. To add a padding, use the class `.padding`

```html
<div class="mn-card padding">
  <h2>Title</h2>
  <p>lorem ipsum</p>
</div>
```

If you want padding only in header, and not in content, use the class `.padding-title`

```html
<div class="mn-card padding-title">
  <h2>Title</h2>
  <p>lorem ipsum</p>
</div>
```

Too works if you use a <header> wraping the tags h2, h3, e.g.
