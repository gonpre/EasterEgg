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
        eggsters   : []
    };
})(jQuery);

var EasterEgg = function(settings){
    this._settings     = settings;
    this._pressed_keys = '';
    this._timer;
};

EasterEgg.VERSION = '1.0.0';

EasterEgg.prototype = {
    addEgg : function(keys, callback) {
        if ($.type(keys) !== 'string' || keys.lenght == 0 || $.type(callback) !== 'function') {
            return false;
        }

        this._settings.eggsters.push({keys:keys, callback:callback});
    },
    init : function() {
        var _self = this;

        $(document).on('keypress', function(event){
            clearInterval(_self._timer);

            _self._timer        = _self.getTimer();
            _self._pressed_keys += String.fromCharCode(event.which);

            _self._settings.eggsters.forEach(function(eggster){
                if (eggster.keys == _self._pressed_keys) {
                    _self.clearKeys();
                    eggster.callback();
                }
            });
        });

        _self._timer = _self.getTimer();
    },
    clearKeys : function() {
        this._pressed_keys = '';
    },
    getTimer : function() {
        var _self = this;

        return setInterval(function(){
            _self.clearKeys();
        }, _self._settings.delay_time);
    },
};