EasterEgg
==========

[![Latest release](https://img.shields.io/badge/release-v1.0.0-blue.svg)](https://github.com/gonpre/EasterEgg/releases/latest)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

Jquery plugin to create easter eggs in your apps in a very simple way by Francisco Gonzalez

## Observation

This allow to set a word to type that will trigger the custom function.
For this to work you need to include the Jquery library
```html
<script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
```
## Authors

[Francisco Gonzalez](https://github.com/gonpre),
[Jorge Rodriguez](https://github.com/grandulgoliat)

## Usage

In your javascript, just add the lines:
```js
    var easter = $(window).eastereggs();
    easter.addEgg('magicword', function(){
        // Do something
    });
    easter.init();
```
You can add as many as you want, using a string or a array of charcodes:
```js
    var easter = $(window).eastereggs();
    easter.addEgg('magicword', function(){
        // Do something
    });
    easter.addEgg([68,69,77,79], function(){
        // Do something 2
    });
    easter.init();
```
By default we added the KONAMI (up, up, down, down, left, right, left, right, b, a, b, a) code and it's very easy to use:
```js
    var easter = $(window).eastereggs();
    easter.setKonami(function(){
        // Do something
    });
    easter.init();
```
## Copyright and license

Copyright (C) 2015 Francisco Gonzalez

Licensed under [the MIT license](LICENSE).