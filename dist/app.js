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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _OptionWrapper = __webpack_require__(1);

var _OptionWrapper2 = _interopRequireDefault(_OptionWrapper);

var _easing = __webpack_require__(3);

var _easing2 = _interopRequireDefault(_easing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chain = function () {
    function Chain() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Chain);

        this.animationIds = {};
        this.callbacks = {};
        this.promises = {};
        this.options = {};
        this.defaultOptions = {};
        this.registeredPromises = [];

        this.previousPromise = this.nextPromises = Promise.resolve(0);

        Object.assign(this.defaultOptions = {}, _options2.default, options);
    }

    _createClass(Chain, [{
        key: 'register',
        value: function register(callbacks) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            this.setCallbacks.apply(this, [callbacks, context].concat(args));

            return new _OptionWrapper2.default(this, callbacks);
        }
    }, {
        key: 'setCallbacks',
        value: function setCallbacks(callbacks) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }

            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultOptions.context;


            for (var id in callbacks) {
                this.callbacks[id] = {
                    func: callbacks[id],
                    context: context,
                    args: args
                };
            }return this;
        }
    }, {
        key: 'play',
        value: function play(args) {
            var _this2 = this;

            var start = new Date(),
                _this = this;

            args.forEach(function (id) {

                _this2.promises[id] = new Promise(function (resolve, reject) {

                    var options = _this.options[id],
                        callback = _this.callbacks[id],
                        animationId = void 0;

                    _this.animationIds[id] = animationId = setInterval(function () {

                        var t = (new Date() - start) / options.during;

                        if (t > 1) t = 1;

                        try {
                            var _callback$func;

                            var delta = _easing2.default[options.easing](t, 0, 1, options.during);

                            delta = options.from + delta * (options.to - options.from);

                            (_callback$func = callback.func).call.apply(_callback$func, [callback.context, delta].concat(_toConsumableArray(callback.args)));

                            if (t === 1) {
                                clearInterval(animationId);
                                resolve(id);
                            }
                        } catch (e) {
                            clearInterval(animationId);
                            reject(e);
                        }
                    }, options.every);
                });

                _this2.registeredPromises.push(_this2.promises[id]);

                // return this.registeredPromises
            });

            return this;
        }
    }, {
        key: 'then',
        value: function then() {

            this.registeredPromises = [];

            this.previousPromise = this.nextPromises;

            return this;
        }
    }, {
        key: 'animate',
        value: function animate() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            this.flatten(args);

            var _this = this;

            this.nextPromises = this.previousPromise.then(function () {
                _this.play(args);
                return Promise.all(_this.registeredPromises);
            });

            return this;
        }
    }, {
        key: 'flatten',
        value: function flatten(names) {
            return names = [].concat.apply([], names);
        }
    }]);

    return Chain;
}();

exports.default = Chain;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OptionWrapper = function () {
    function OptionWrapper(chain, callbacks) {
        _classCallCheck(this, OptionWrapper);

        console.log(this);

        this.callbacks = callbacks;

        this.chain = chain;

        this.Options = this.chain.defaultOptions;

        this.options();

        this.assignMethod();
    }

    _createClass(OptionWrapper, [{
        key: "options",
        value: function options() {
            var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            Object.assign(this.Options, this.Options, _options);

            this.setOptions();

            return this;
        }
    }, {
        key: "call",
        value: function call(context) {
            var _chain;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return (_chain = this.chain).setCallbacks.apply(_chain, [this.callbacks, context].concat(args));
        }
    }, {
        key: "register",
        value: function register(callbacks, context) {
            var _chain2;

            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }

            return (_chain2 = this.chain).register.apply(_chain2, [callbacks, context].concat(args));
        }
    }, {
        key: "animate",
        value: function animate() {
            var _chain3;

            return (_chain3 = this.chain).animate.apply(_chain3, arguments);
        }
    }, {
        key: "assignMethod",
        value: function assignMethod(methods) {
            var _this = this;

            var _loop = function _loop(method) {
                _this.__proto__[method] = function (v) {
                    return _this.options(_defineProperty({}, method, v));
                };
            };

            for (var method in this.chain.defaultOptions) {
                _loop(method);
            }
        }
    }, {
        key: "setOptions",
        value: function setOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Options;


            for (var name in this.callbacks) {
                this.chain.options[name] = options;
            }

            return this;
        }
    }]);

    return OptionWrapper;
}();

exports.default = OptionWrapper;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chain = __webpack_require__(0);

var _chain2 = _interopRequireDefault(_chain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chain = new _chain2.default({ every: 100 }).register({
    height: function height(h) {
        console.log('height: ', h);
    }
}).register({
    width: function width(w) {
        console.log('width: ', w);
    }
}).register({
    width2: function width2(w) {
        console.log('width2: ', w);
    }
}).register({
    width3: function width3(w) {
        console.log('width3: ', w);
    }
}).from(5).to(10).during(900).register({
    width4: function width4(w) {
        console.log('width4: ', w);
    }
}).animate('height', 'width').then().animate('width2').then().animate('width3');

/***/ }),
/* 3 */
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
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
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
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
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
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
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

/***/ }),
/* 4 */
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
    context: null
};

/***/ })
/******/ ]);