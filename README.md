jquery.html
===========

This library is an extension for jQuery which allows to write HTML documents using Javascript or Coffeescript reducing the visual polution while creating elements dynamically.

## Features

* Build node trees using tag methods.
* Supports attributes and string content.

## Dependencies

* jquery.js (>= 2.0)

## Examples

### Javascript DSL

```javascript
$('body').$div(function() {
  this.$h1({id: "hello-world"}, "Hello World");
  this.$ul({class: "list"}, function() {
    this.$li("One");
    this.$li("Two");
    this.$li("Three");
  });
});
```

### Coffeescript DSL

```coffeescript
$('body').$div ->
  @$h1 id: "hello-world", "Hello World"
  @$ul class: "list", ->
    @$li "One"
    @$li "Two"
    @$li "Three"
```

### Expected result

```html
<body>
  <div>
    <h1 id="hello-word">Hello World</h1>
    <ul class="list">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </div>
</body>
```

## License

Copyright (c) 2012-2014 Mateus Maso. Released under an MIT license.
