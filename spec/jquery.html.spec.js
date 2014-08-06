var chai = require("chai");
var jsdom = require('jsdom');

global.window = jsdom.jsdom().createWindow();
global.document = window.document;
global.$ = global.jQuery = require('jquery');

require('../src/jquery.html');

describe("jquery.html", function() {
  it("should create html tree", function() {
    var body = $("<body>");

    body.$div(function() {
      this.$h1({id: "hello-world"}, "Hello World");
      this.$ul({class: "list"}, function() {
        this.$li("One");
        this.$li("Two");
        this.$li("Three");
      });
    });

    chai.expect(body.html()).to.equal([
      '<div>',
        '<h1 id="hello-world">Hello World</h1>',
        '<ul class="list">',
          '<li>One</li>',
          '<li>Two</li>',
          '<li>Three</li>',
        '</ul>',
      '</div>'
    ].join(""));
  });
});