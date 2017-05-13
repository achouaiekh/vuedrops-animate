var VDAnimate =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    from: 0,
    to: 1,
    during: 300,
    every: 10,
    easing: 'linear'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _options = __webpack_require__(0);

var _options2 = _interopRequireDefault(_options);

var _easing = __webpack_require__(4);

var _easing2 = _interopRequireDefault(_easing);

var _Animation = __webpack_require__(2);

var _Animation2 = _interopRequireDefault(_Animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        var _this2 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { hello: 'hello' };

        _classCallCheck(this, _class);

        console.log(_options2.default, options);
        this.animations = {};
        this.animationIds = {};

        Object.assign(this.options = {}, _options2.default, { context: null, arguments: [] }, options);

        var _loop = function _loop(method) {

            _this2.__proto__[method] = function (value) {

                this.options[method] = value;

                return this;
            };
        };

        for (var method in _options2.default) {
            _loop(method);
        }
    }

    _createClass(_class, [{
        key: 'register',
        value: function register(callback) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


            for (var name in callback) {
                return this.animations[name] = new _Animation2.default(this, callback[name], options);
            }
        }
    }, {
        key: 'play',
        value: function play() {
            var _this3 = this;

            var start = new Date(),
                _this = this,
                callbacks = [].concat.apply([], arguments);

            console.log(callbacks);

            return new Promise(function (resolve, reject) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    var _loop2 = function _loop2() {
                        var name = _step.value;


                        var options = _this3.animations[name].options;

                        _this3.animationIds[name] = setInterval(function () {

                            var t = (new Date() - start) / options.during;

                            if (t > 1) t = 1;

                            try {
                                var _options$callback;

                                var delta = _easing2.default[options.easing](t, 0, 1, options.during);

                                delta = options.from + delta * (options.to - options.from);

                                (_options$callback = options.callback).call.apply(_options$callback, [options.context, delta].concat(_toConsumableArray(options.arguments)));

                                if (t === 1) {

                                    _this.stop(name);

                                    resolve(_this);
                                }
                            } catch (e) {

                                _this.stop(name);

                                reject(e);
                            }
                        }, options.every);
                    };

                    for (var _iterator = callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        _loop2();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });
        }
    }, {
        key: 'call',
        value: function call(context) {
            this.options.context = context;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            this.options.arguments = args;

            return this;
        }
    }, {
        key: 'apply',
        value: function apply(context) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            this.options.context = context;
            this.options.arguments = Array.isArray(args) ? args : Array.of(args);

            return this;
        }
    }, {
        key: 'stop',
        value: function stop() {
            var names = [].concat.apply([], arguments);

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = names[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _name = _step2.value;

                    clearInterval(this.animationIds[_name]);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return _class;
}();

exports.default = _class;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _options2 = __webpack_require__(0);

var _options3 = _interopRequireDefault(_options2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
    function Animation(animate, callback) {
        var _this = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, Animation);

        this.animate = animate;

        Object.assign(this.options = {}, this.animate.options, options, { callback: callback });

        var _loop = function _loop(method) {

            _this.__proto__[method] = function (value) {

                this.options[method] = value;

                return this;
            };
        };

        for (var method in _options3.default) {
            _loop(method);
        }
    }

    _createClass(Animation, [{
        key: 'options',
        value: function (_options) {
            function options(_x) {
                return _options.apply(this, arguments);
            }

            options.toString = function () {
                return _options.toString();
            };

            return options;
        }(function (option) {
            Object.assign(this.options, this.options, options);
            return this;
        })
    }, {
        key: 'call',
        value: function call(context) {
            var _animate;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return (_animate = this.animate).call.apply(_animate, [this].concat(args));
        }
    }, {
        key: 'apply',
        value: function apply(context) {
            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            return this.animate.call(this, args);
        }
    }, {
        key: 'register',
        value: function register(callback, options) {
            return this.animate.register(callback, options);
        }
    }, {
        key: 'play',
        value: function play(value) {
            return this.animate.play(value);
        }
    }, {
        key: 'stop',
        value: function stop(value) {}
    }]);

    return Animation;
}();

exports.default = Animation;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Animate = __webpack_require__(1);

var _Animate2 = _interopRequireDefault(_Animate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = new _Animate2.default().register({
    height: function height(h) {
        console.log('height: ', h);
    }
}).every(30).during(120).register({
    width: function width(w) {
        console.log('width: ', w);
    }
}).from(2).to(5).every(30).during(90).play(['height', 'width']);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

//Inspired from :->

/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */

exports.default = {
    // t: current time, b: beginning value, c: change In value, d: duration

    linear: function linear(t) {
        return t;
    },
    swing: function swing(t) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    easeInQuad: function easeInQuad(t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function easeOutQuad(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function easeInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b;
    },
    easeInCubic: function easeInCubic(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function easeOutCubic(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function easeInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function easeInQuart(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function easeOutQuart(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function easeInOutQuart(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function easeInQuint(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function easeOutQuint(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function easeInOutQuint(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function easeInSine(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function easeOutSine(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function easeInOutSine(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function easeInExpo(t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function easeOutExpo(t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExgitpo: function easeInOutExgitpo(t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function easeInCirc(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function easeOutCirc(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function easeInOutCirc(t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function easeInElastic(t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function easeOutElastic(t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function easeInOutElastic(t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function easeInBack(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function easeOutBack(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function easeInOutBack(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function easeInBounce(t, b, c, d) {
        return c - EASING.easeOutBounce(d - t, 0, c, d) + b;
    },
    easeOutBounce: function easeOutBounce(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
        }
    },
    easeInOutBounce: function easeInOutBounce(t, b, c, d) {
        if (t < d / 2) return EASING.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return EASING.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
};

/***/ })
/******/ ]);