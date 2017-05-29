(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OptionWrapper = function () {
    function OptionWrapper(chain, callbacks, options) {
        _classCallCheck(this, OptionWrapper);

        this.callbacks = callbacks;

        this.chain = chain;

        this.Options = Object.assign({}, this.chain.defaultOptions, options);

        this.options();

        this.assignMethod();
    }

    _createClass(OptionWrapper, [{
        key: 'options',
        value: function options() {
            var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.Options = Object.assign({}, this.Options, _options);

            this.setOptions();

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
        key: 'arguments',
        value: function _arguments() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            this.options({ arguments: args });
        }
    }, {
        key: 'register',
        value: function register(callbacks, context) {
            var _chain;

            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            return (_chain = this.chain).register.apply(_chain, [callbacks, context].concat(args));
        }
    }, {
        key: 'animate',
        value: function animate() {
            var _chain2;

            return (_chain2 = this.chain).animate.apply(_chain2, arguments);
        }
    }, {
        key: 'then',
        value: function then(callback) {

            return this.chain.then(callback);
        }
    }, {
        key: 'stop',
        value: function stop() {
            var _chain3;

            return (_chain3 = this.chain).stop.apply(_chain3, arguments);
        }
    }, {
        key: 'assignMethod',
        value: function assignMethod(methods) {
            var _this = this;

            ['from', 'to', 'easing', 'during', 'every', 'context'].forEach(function (method) {
                return _this.__proto__[method] = function (v) {
                    return _this.options(_defineProperty({}, method, v));
                };
            });
        }
    }, {
        key: 'setOptions',
        value: function setOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Options;


            for (var name in this.callbacks) {

                this.chain.options[name] = Object.assign({}, options, { function: this.callbacks[name] });
            }

            return this;
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
/*
 * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
 */

// Preserve the original jQuery "swing" easing as "jswing"

var pow = Math.pow,
    sqrt = Math.sqrt,
    sin = Math.sin,
    cos = Math.cos,
    PI = Math.PI,
    c1 = 1.70158,
    c2 = c1 * 1.525,
    c3 = c1 + 1,
    c4 = 2 * PI / 3,
    c5 = 2 * PI / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
    var n1 = 7.5625,
        d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + .75;
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + .9375;
    } else {
        return n1 * (x -= 2.625 / d1) * x + .984375;
    }
}

exports.default = {
    linear: function linear(x) {
        return x;
    },
    swing: function swing(x) {
        return x * x;
    },
    easeInQuad: function easeInQuad(x) {
        return x * x;
    },
    easeOutQuad: function easeOutQuad(x) {
        return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function easeInOutQuad(x) {
        return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function easeInCubic(x) {
        return x * x * x;
    },
    easeOutCubic: function easeOutCubic(x) {
        return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function easeInQuart(x) {
        return x * x * x * x;
    },
    easeOutQuart: function easeOutQuart(x) {
        return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function easeInOutQuart(x) {
        return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function easeInQuint(x) {
        return x * x * x * x * x;
    },
    easeOutQuint: function easeOutQuint(x) {
        return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function easeInSine(x) {
        return 1 - cos(x * PI / 2);
    },
    easeOutSine: function easeOutSine(x) {
        return sin(x * PI / 2);
    },
    easeInOutSine: function easeInOutSine(x) {
        return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function easeInExpo(x) {
        return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function easeOutExpo(x) {
        return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function easeInOutExpo(x) {
        return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function easeInCirc(x) {
        return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function easeOutCirc(x) {
        return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function easeInOutCirc(x) {
        return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function easeInElastic(x) {
        return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function easeOutElastic(x) {
        return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function easeInOutElastic(x) {
        return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
    },
    easeInBack: function easeInBack(x) {
        return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function easeOutBack(x) {
        return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function easeInOutBack(x) {
        return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function easeInBounce(x) {
        return 1 - bounceOut(1 - x);
    },

    easeOutBounce: bounceOut,
    easeInOutBounce: function easeInOutBounce(x) {
        return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
    }
};

/***/ }),
/* 2 */
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
    function: function _function() {},
    context: null,
    arguments: []

};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _options = __webpack_require__(2);

var _options2 = _interopRequireDefault(_options);

var _OptionWrapper = __webpack_require__(0);

var _OptionWrapper2 = _interopRequireDefault(_OptionWrapper);

var _easing = __webpack_require__(1);

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
        value: function register(callbacks, options) {
            var _this2 = this;

            if (Array.isArray(callbacks)) {

                var temp = {};

                callbacks.forEach(function (v) {
                    return temp[v] = _this2.options[v].function;
                });

                callbacks = temp;
            }

            return new _OptionWrapper2.default(this, callbacks, options);
        }
    }, {
        key: 'play',
        value: function play(args) {
            var _this3 = this;

            var start = new Date(),
                _this = this;

            args.forEach(function (id) {

                _this3.promises[id] = new Promise(function (resolve, reject) {

                    var options = _this.options[id],
                        animationId = void 0;

                    _this.animationIds[id] = {};

                    _this.animationIds[id].cleared = false;

                    _this.animationIds[id].id = animationId = setInterval(function () {

                        var t = (new Date() - start) / options.during;

                        if (t > 1) t = 1;

                        try {
                            var _options$function;

                            var delta = _easing2.default[options.easing](t);

                            delta = options.from + delta * (options.to - options.from);

                            (_options$function = options.function).call.apply(_options$function, [options.context, delta].concat(_toConsumableArray(options.arguments)));

                            if (t === 1 || _this.animationIds[id].cleared) {
                                _this.animationIds[id].cleared = true;
                                clearInterval(animationId);
                                resolve(id);
                            }
                        } catch (e) {
                            _this.animationIds[id].cleared = true;
                            clearInterval(animationId);
                            reject(e);
                        }
                    }, options.every);
                });

                _this3.registeredPromises.push(_this3.promises[id]);

                // return this.registeredPromises
            });

            return this;
        }
    }, {
        key: 'then',
        value: function then(callback) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;


            this.registeredPromises = [];

            this.previousPromise = this.nextPromises;

            if (typeof callback === 'function') this.previousPromise.then(this.proxy(callback, context));

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

            this.nextPromises = this.previousPromise.then(function () {

                _this.play(args);

                return Promise.all(_this.registeredPromises);
            });

            return this;
        }
    }, {
        key: 'proxy',
        value: function proxy(fn) {
            var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

            return function () {
                return fn.apply(object, arguments);
            };
        }
    }, {
        key: 'flatten',
        value: function flatten(names) {

            return names = [].concat.apply([], names);
        }
    }, {
        key: 'stop',
        value: function stop() {
            var _this4 = this;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            this.flatten(args).forEach(function (id) {
                if (_this4.animationIds[id] !== undefined) _this4.animationIds[id].cleared = true;
            });
        }
    }]);

    return Chain;
}();

exports.default = Chain;

/***/ })
/******/ ]);
});