'use strict';
window.$ = window.jQuery = require("jquery"); // needed for notify plugin
require('prismjs');
// require('prismjs/components/prism-markup.min.js');
// require('prismjs/components/prism-yaml.min.js');
require('prismjs/components/prism-docker.min.js');
require('prismjs/components/prism-bash.min.js');
require('prismjs/components/prism-json.min.js');
require('prismjs/plugins/line-highlight/prism-line-highlight.js');
require('prismjs/plugins/line-numbers/prism-line-numbers.js');

// require('notifyjs');
// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  atomantic = require('bespoke-theme-atomantic'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  // backdrop = require('bespoke-backdrop'),
  // scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');
  // forms = require('bespoke-forms');

// Bespoke.js
var deck = bespoke.from('article', [
  atomantic(),
  keys(),
  touch(),
  bullets('.nextBullet > li'),
  // backdrop(),
  // scale(),
  hash(),
  progress()
  // forms()
]);

// $('x-gif').on('x-gif-finished', function(){
//   console.log('finished', $(this).closest('.bespoke-slide'))
//  $(this).closest('.bespoke-slide').addClass('x-gif-finished');
// });
deck.on('activate', function(/*slide*/){
  var $highlight = $('.bespoke-active pre[data-line]').not('.rendered');
  if($highlight.length) {
    // re-trigger prism to activate line-highlight properly
    $highlight.each(function(){
      var $el = $(this);
      setTimeout(function(){
        Prism.highlightElement($el.find('code').get(0))
        $el.addClass('rendered')
      }, 50);
    })
  }
});
