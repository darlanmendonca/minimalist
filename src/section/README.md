# mn-section

Useful to define a section of content.

```sass
@import 'path/to/node_modules/minimalist-ui/components/section/section.scss';
```

### Usage

Just use the class `.mn-section` in a element. To add a padding, use the class `.padding`

```html
<div class="mn-section padding">
  <h2>Title</h2>
  <p>lorem ipsum</p>
</div>
```

If you want padding only in header, and not in content, use the class `.padding-title`

```html
<div class="mn-section padding-title">
  <h2>Title</h2>
  <p>lorem ipsum</p>
</div>
```

Too works if you use a <header> wraping the tags h2, h3, e.g.
