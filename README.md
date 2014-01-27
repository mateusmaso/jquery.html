jquery.html
===========

## Javascript DSL

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

## Coffeescript DSL

```coffeescript
$('body').$div ->
  @$h1 id: "hello-world", "Hello World"
  @$ul class: "list", ->
    @$li "One"
    @$li "Two"
    @$li "Three"
```

## HTML result

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
