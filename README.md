EasterEgg
==========

[![Latest release](https://img.shields.io/badge/release-v1.0.0-blue.svg)](https://github.com/gonpre/EasterEgg/releases/latest)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

Jquery plugin to create easter eggs in your apps in a very simple way by Francisco Gonzalez

## Observation

This allow to set a word to type that will triger the custom function

## Author

[Francisco Gonzalez](https://github.com/gonpre)

## Usage

In your javascript, just add the lines:
```js
    var easter = $(window).eastereggs();
    easter.addEgg('magicword', function(){
        // Do something
    });
    easter.init();
```
You can add as many as you want:
```js
    var easter = $(window).eastereggs();
    easter.addEgg('magicword', function(){
        // Do something
    });
    easter.addEgg('otherword', function(){
        // Do something 2
    });
    easter.init();
```
## Copyright and license

Copyright (C) 2015 Francisco Gonzalez

Licensed under [the MIT license](LICENSE).