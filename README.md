jquery.html [![Build Status](https://travis-ci.org/mateusmaso/jquery.html.svg?branch=master)](https://travis-ci.org/mateusmaso/jquery.html)
===========

This library is an extension for jQuery which allows writing HTML using Javascript or Coffeescript, reducing the visual pollution while creating elements dynamically.

## Features

* Build node trees using tag as methods.
* Attributes and string content support.

## Dependencies

* jquery.js (>= 2.1.0)

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

Copyright (c) 2013-2014 Mateus Maso. Released under an MIT license.
