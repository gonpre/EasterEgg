/*!
 * Jquery EasterEgg v1.0.0 (https://github.com/gonpre/EasterEgg)
 *
 * Copyright 2015 Francisco Gonzalez
 * Licensed under MIT (https://github.com/gonpre/EasterEgg/blob/master/LICENSE)
 */
(function($){
    $.fn.easteregg = function(settings) {
        var _settings    = $.extend({}, $.fn.easteregg.default_settings, settings);
        var _o_easteregg = new EasterEgg(_settings);

        return _o_easteregg;
    };

    $.fn.easteregg.default_settings = {
        delay_time : 1000,
        eggsters   : [
            {
                keys : [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 66, 65],
                callback : null
            }
        ]
    };

    function is_same_array(array1, array2) {
        return array1.lenght == array2.lenght && array1.every(function(element, index) {
            return element === array2[index];
        });
    }

    var EasterEgg = function(settings){
        this._settings     = settings;
        this._pressed_keys = [];
        this._timer;
    };

    EasterEgg.VERSION = '1.0.0';

    EasterEgg.prototype = {
        init : function() {
            var _self = this;

            $(document).on('keydown', function(event){
                clearInterval(_self._timer);

                _self._timer        = _self.getTimer();
                _self._pressed_keys.push(event.keyCode);

                _self._settings.eggsters.forEach(function(eggster){
                    if (is_same_array(eggster.keys, _self._pressed_keys)) {
                        _self.clearKeys();
                        if ($.type(eggster.callback) === 'function') {
                            eggster.callback();
                        }
                    }
                });
            });

            _self._timer = _self.getTimer();
        },
        setKonami : function(callback) {
            this._settings.eggsters[0].callback = callback;
        },
        addEgg : function(keys, callback) {
            if (!($.type(keys) === 'array' || $.type(keys) === 'string') || keys.lenght == 0 || $.type(callback) !== 'function') {
                return false;
            }

            if ($.type(keys) === 'string') {
                var keys = keys.split('');

                keys.forEach(function(element, index, array){
                    array[index] = element.toUpperCase().charCodeAt();
                });
            }

            this._settings.eggsters.push({keys:keys, callback:callback});
        },
        clearKeys : function() {
            this._pressed_keys = [];
        },
        getTimer : function() {
            var _self = this;

            return setInterval(function(){
                _self.clearKeys();
            }, _self._settings.delay_time);
        },
    };
})(jQuery);
