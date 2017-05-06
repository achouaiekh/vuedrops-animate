var VAnimate =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

var Animate = function () {
    function Animate(options) {
        _classCallCheck(this, Animate);

        this.options = Object.assign({}, DEFAULTS, options);
        console.log(this.options, 'options');
    }

    _createClass(Animate, [{
        key: 'from',
        value: function from(_from) {

            this.options.from = _from;
            return this;
        }
    }, {
        key: 'to',
        value: function to(_to) {
            this.options.to = _to;
            return this;
        }
    }, {
        key: 'call',
        value: function call(scope) {
            this.options.scope = scope;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            this.options.args = args;
            return this;
        }
    }, {
        key: 'play',
        value: function play(progress) {
            var _this = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


            return new Promise(function (resolve, reject) {

                options = Object.assign({}, _this.options, options, { progress: progress });

                var start = new Date(),
                    id = setInterval(function () {

                    var t = (new Date() - start) / options.speed;

                    if (t > 1) t = 1;

                    try {
                        var _options$progress;

                        var delta = DELTAS[options.delta];
                        delta = EASES[options.easing](delta, t);
                        delta = options.from + delta * (options.to - options.from);

                        (_options$progress = options.progress).call.apply(_options$progress, [options.scope, delta].concat(_toConsumableArray(options.args)));

                        if (t === 1) {
                            clearInterval(id);

                            resolve(_this);
                        }
                    } catch (e) {
                        clearInterval(id);
                        reject(e);
                    }
                    console.log(options);
                }, options.step);
            });
        }
    }]);

    return Animate;
}();

exports.default = Animate;


var DEFAULTS = {
    from: 0,
    to: 1,
    speed: 300,
    step: 10,
    progress: function progress() {},
    scope: null,
    easing: 'easeOut',
    delta: 'linear',
    args: []
};

var DELTAS = {
    elastic: function elastic(progress) {
        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.5;

        return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
    },
    linear: function linear(progress) {
        return progress;
    },
    bounce: function bounce(progress) {
        for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
            if (progress >= (7 - 4 * a) / 11) {

                return -1 * Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
            }
        }
    }
};

var EASES = {
    easeIn: function easeIn(delta, progress) {
        return delta(progress);
    },
    easeOut: function easeOut(delta, progress) {
        return 1 - delta(1 - progress);
    },
    easeInOut: function easeInOut(delta, progress) {
        if (progress <= 0.5) {
            // the first half of the animation)
            return delta(2 * progress) / 2;
        } else {
            // the second half
            return (2 - delta(2 * (1 - progress))) / 2;
        }
    }
};

/***/ })
/******/ ]);