# Extends 

Sass (Syntactically Awesome Stylesheets) provides a feature called @extend which allows you to extend the styles of one selector into another.

```scss 
.base-style {
  color: red;
  font-size: 16px;
}

.additional-style {
  @extend .base-style;
  background-color: yellow;
  padding: 10px;
}
```

