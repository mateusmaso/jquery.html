// jquery.html
// -----------
// v0.1.1
//
// Copyright (c) 2013-2014 Mateus Maso
// Distributed under MIT license
//
// http://github.com/mateusmaso/jquery.html

(function(root, factory) {

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(global.$);
    exports = factory(global.$);
  } else {
    factory(root.$);
  }

}(this, function($) {

  var tags = ['html', 'head', 'title', 'base', 'link', 'meta', 'style', 'script',
    'noscript', 'body', 'body', 'section', 'nav', 'article', 'aside', 'h1', 'h2',
    'h3', 'h4', 'h5', 'h6', 'h1', 'h6', 'header', 'footer', 'address', 'main',
    'main', 'p', 'hr', 'pre', 'blockquote', 'ol', 'ul', 'li', 'dl', 'dt', 'dd',
    'dd', 'figure', 'figcaption', 'div', 'a', 'em', 'strong', 'small', 's',
    'cite', 'q', 'dfn', 'abbr', 'data', 'time', 'code', 'var', 'samp', 'kbd',
    'sub', 'sup', 'i', 'b', 'u', 'mark', 'ruby', 'rt', 'rp', 'bdi', 'bdo',
    'span', 'br', 'wbr', 'ins', 'del', 'img', 'iframe', 'embed', 'object',
    'param', 'object', 'video', 'audio', 'source', 'video', 'audio', 'track',
    'video', 'audio', 'canvas', 'map', 'area', 'area', 'map', 'svg', 'math',
    'table', 'caption', 'colgroup', 'col', 'tbody', 'thead', 'tfoot', 'tr', 'td',
    'th', 'form', 'fieldset', 'legend', 'fieldset', 'label', 'input', 'button',
    'select', 'datalist', 'optgroup', 'option', 'select', 'datalist', 'textarea',
    'keygen', 'output', 'progress', 'meter', 'details', 'summary', 'details',
    'menuitem', 'menu'];

  var properties = ['async', 'autofocus', 'checked', 'location', 'multiple', 'readOnly',
    'selected', 'selectedIndex', 'tagName', 'nodeName', 'nodeType', 'ownerDocument',
    'defaultChecked', 'defaultSelected'];

  var setAttribute = function(element, attribute, value) {
    if (attribute == 'value') {
      element.val(value);
    } else if ($.contains(properties, attribute)) {
      element.prop(attribute, value);
    } else {
      element.attr(attribute, value);
    }
  };

  $.each(tags, function(index, tag) {
    $.fn["$" + tag] = function(arg1, arg2) {
      var element = $("<" + tag + "/>");
      var attributes, contents;

      if ($.isFunction(arg1) || $.type(arg1) == "string") {
        attributes = {};
        contents = arg1;
      } else {
        attributes = arg1 || {};
        contents = arg2;
      }

      $.each(attributes, function(attribute, value) {
        setAttribute(element, attribute, value);
      });

      if ($.isFunction(contents)) {
        contents.apply(element);
      } else {
        element.html(contents);
      }

      $(this).append(element);
    };
  });

}));
