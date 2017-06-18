(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VDAnimation", [], factory);
	else if(typeof exports === 'object')
		exports["VDAnimation"] = factory();
	else
		root["VDAnimation"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OptionWrapper = function () {
    function OptionWrapper(animation, name) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, OptionWrapper);

        this.name = name;

        this.animation = animation;

        Object.assign(this.animation.callbacks[this.name], this.animation.callbacks[this.name], options);

        this._assignMethod();
    }

    _createClass(OptionWrapper, [{
        key: '_assignMethod',
        value: function _assignMethod(methods) {
            var _this = this;

            ['from', 'to', 'context', 'arguments', 'easing', 'every', 'during', 'callback'].forEach(function (method) {
                return _this.__proto__[method] = function (v) {
                    _this.animation.callbacks[_this.name][method] = v;
                    return _this;
                };
            });
        }
    }, {
        key: 'options',
        value: function options() {
            var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            Object.assign(this.animation.callbacks[this.name], this.animation.callbacks[this.name], _options);

            return this;
        }
    }, {
        key: 'call',
        value: function call(context) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            this.arguments.apply(this, args);
            this.context(context);
        }
    }, {
        key: 'apply',
        value: function apply(context, args) {

            this.call.apply(this, [context].concat(_toConsumableArray(args)));
        }
    }, {
        key: 'register',
        value: function register(name) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


            return this.animation.register(name, callback, options);
        }
    }, {
        key: 'registerCss',
        value: function registerCss(name, element) {
            var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


            return this.animation.registerCss(name, element, properties, options);
        }
    }, {
        key: 'css',
        value: function css(element, properties) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


            return this.animation.registerCss(this.name, element, properties, options);
        }
    }, {
        key: 'animate',
        value: function animate() {
            var _animation;

            return (_animation = this.animation).animate.apply(_animation, arguments);
        }
    }, {
        key: 'then',
        value: function then(callback) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.animation;


            return this.animation.then(callback, context);
        }
    }, {
        key: 'stop',
        value: function stop() {
            var _animation2;

            return (_animation2 = this.animation).stop.apply(_animation2, arguments);
        }
    }, {
        key: 'after',
        value: function after() {
            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;


            return this.animation.after(delay);
        }
    }]);

    return OptionWrapper;
}();

exports.default = OptionWrapper;

/***/ }),
/* 1 */
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
    easing: 'linear',
    callback: null,
    context: null,
    arguments: []
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * TinyAnimate.easings
 *  Adapted from jQuery Easing
 */
exports.default = {
    linear: function linear(t, b, c, d) {
        return c * t / d + b;
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
    easeInOutExpo: function easeInOutExpo(t, b, c, d) {
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
        return c - easeOutBounce(d - t, 0, c, d) + b;
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
        if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * .5 + b;
        return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.__useDefault = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultOptions = __webpack_require__(1);

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

var _easings = __webpack_require__(2);

var _easings2 = _interopRequireDefault(_easings);

var _OptionWrapper = __webpack_require__(0);

var _OptionWrapper2 = _interopRequireDefault(_OptionWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
    function Animation() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Animation);

        this.requestAnimationFrame = Animation.registerRAF();

        Object.assign(this.defaultOptions = {}, _defaultOptions2.default, options);

        this.callbacks = {};
        this.canceled = {};
        this.registeredPromises = [];
        this.currentPromise = Promise.resolve(0);
    }

    //register the requestAnimationFrame


    _createClass(Animation, [{
        key: 'register',


        // register callback and setup animation options
        value: function register(name) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


            this.callbacks[name] = Object.assign({}, this.defaultOptions, options, { callback: callback });

            return new _OptionWrapper2.default(this, name, options);
        }
    }, {
        key: 'play',
        value: function play(args) {
            var _this2 = this;

            args.forEach(function (name) {

                var options = _this2.callbacks[name];

                options.callback(options.from);

                _this2.canceled[name] = false;

                var easing = _easings2.default[options.easing] || _easings2.default.linear;

                var promise = new Promise(function (resolve, reject) {

                    var _this = _this2;

                    var rfa = _this2.requestAnimationFrame;

                    var start = window.performance && window.performance.now ? window.performance.now() : +new Date();

                    function loop(timestamp) {

                        if (_this.canceled[name]) {
                            resolve();
                            return;
                        }

                        var time = (timestamp || +new Date()) - start;

                        if (time >= 0) options.callback.call(options.context, easing(time, options.from, options.to - options.from, options.during));

                        if (time >= 0 && time >= options.during) {
                            options.callback.call(options.context, options.to);
                            resolve();
                        } else {
                            rfa(loop);
                        }
                    }

                    rfa(loop);
                });

                _this2.registeredPromises.push(promise);
            });

            return this;
        }
    }, {
        key: 'animate',
        value: function animate() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.flatten(args);

            var _this = this;

            this.currentPromise.then(function () {
                _this.play(args);
            });

            return this;
        }
    }, {
        key: 'then',
        value: function then() {
            var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;


            var _this = this;

            this.currentPromise = this.currentPromise.then(function () {

                var registered = _this.registeredPromises;

                _this.registeredPromises = [];

                return Promise.all(registered);
            });

            this.currentPromise.then(function () {
                return callback.call(context);
            });

            return this;
        }
    }, {
        key: 'after',
        value: function after() {
            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;


            var _this = this;

            this.currentPromise = this.currentPromise.then(function () {

                _this.registeredPromises = [];

                return new Promise(function (resolve, reject) {
                    return setTimeout(function () {
                        return resolve();
                    }, delay);
                });
            });

            return this;
        }
    }, {
        key: 'flatten',
        value: function flatten(names) {

            return names = [].concat.apply([], names);
        }
    }, {
        key: 'stop',
        value: function stop() {
            var _this3 = this;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            this.flatten(args).forEach(function (id) {
                if (_this3.canceled[id] !== undefined) _this3.canceled[id] = true;
            });
        }
    }, {
        key: 'setStyles',
        value: function setStyles(element, properties) {

            Animation.setStyles(element, properties);

            return this;
        }
    }, {
        key: 'registerCss',
        value: function registerCss(name, element) {
            var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var callback = function callback(value) {
                for (var property in properties) {
                    Animation.setStyle(element, property, properties[property].replace('<value>', value));
                }
            };

            return this.register(name, callback, options);
        }
    }], [{
        key: 'registerRAF',
        value: function registerRAF() {

            var lastTime = 0;

            if (!window.requestAnimationFrame) ['webkit', 'moz'].forEach(function (prefix) {
                window.requestAnimationFrame = window[prefix + 'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
            });

            if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {

                var currTime = new Date().getTime(),
                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                    id = window.setTimeout(function () {
                    return callback(currTime + timeToCall);
                }, timeToCall);

                lastTime = currTime + timeToCall;

                return id;
            };

            if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
                return clearTimeout(id);
            };

            return window.requestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        }
    }, {
        key: 'setStyle',
        value: function setStyle(element, property, value) {

            var prefix = void 0;

            if (element.style[property] !== undefined) element.style[property] = value;else {
                prefix = ['Webkit', 'Moz', 'ms'].find(function (vendor) {
                    return element.style[vendor + property] !== undefined;
                }) || '';
                element.style[prefix + property] = value;
            }
        }
    }, {
        key: 'setStyles',
        value: function setStyles(element, properties, value) {
            if (typeof properties === "string") properties = _defineProperty({}, properties, value);

            for (var property in properties) {
                Animation.setStyle(element, property, properties[property]);
            }
        }
    }, {
        key: 'setAttributes',
        value: function setAttributes(element, attributes, value) {
            if (typeof attributes === "string") attributes = _defineProperty({}, attribute, value);
            for (var property in attributes) {
                element.setAttribute(property, attributes[property]);
            }
        }
    }, {
        key: 'isElement',
        value: function isElement(obj) {
            try {
                //Using W3 DOM2 (works for FF, Opera and Chrom)
                return obj instanceof HTMLElement;
            } catch (e) {
                //Browsers not supporting W3 DOM2 don't have HTMLElement and
                //an exception is thrown and we end up here. Testing some
                //properties that all elements have. (works on IE7)
                return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === "object" && obj.nodeType === 1 && _typeof(obj.style) === "object" && _typeof(obj.ownerDocument) === "object";
            }
        }
    }]);

    return Animation;
}();

exports.default = Animation;
var __useDefault = exports.__useDefault = true;

/***/ })
/******/ ]);
});
//# sourceMappingURL=vuedrops-animate.js.map