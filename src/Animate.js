import defaultOptions from './default-options'
import easings from './easings'
import OptionsWrapper from './OptionWrapper'

export default class Animation {
    constructor(options = {}) {

        this.requestAnimationFrame = Animation.registerRAF()

        Object.assign(this.defaultOptions = {}, defaultOptions, options)

        this.callbacks = {}
        this.canceled = {}
        this.registeredPromises = []
        this.currentPromise = Promise.resolve(0)
    }


    //register the requestAnimationFrame
    static registerRAF() {

        let lastTime = 0;

        if (!window.requestAnimationFrame)

            ['webkit', 'moz'].forEach(prefix => {
                window.requestAnimationFrame = window[prefix + 'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
            })

        if (!window.requestAnimationFrame)

            window.requestAnimationFrame = callback => {

                let currTime = new Date().getTime(),
                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                    id = window.setTimeout(() => callback(currTime + timeToCall), timeToCall);

                lastTime = currTime + timeToCall;

                return id;
            };

        if (!window.cancelAnimationFrame)

            window.cancelAnimationFrame = id => clearTimeout(id)


        return window.requestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60)
            }

    }

    // register callback and setup animation options
    register(name, callback = () => {
    }, options = {}) {

        this.callbacks[name] = Object.assign({}, this.defaultOptions, options, {callback})

        return new OptionsWrapper(this, name, options)
    }

    play(args) {

        args.forEach(name => {

            let options = this.callbacks[name]

            options.callback(options.from)

            this.canceled[name] = false

            let easing = easings[options.easing] || easings.linear

            let promise = new Promise((resolve, reject) => {

                let _this = this

                let rfa = this.requestAnimationFrame

                let start = window.performance && window.performance.now ?
                    window.performance.now() : +new Date()

                function loop(timestamp) {

                    if (_this.canceled[name]) {
                        resolve()
                        return
                    }

                    let time = (timestamp || +new Date()) - start;

                    if (time >= 0)
                        options.callback(easing(time, options.from, options.to - options.from, options.during));

                    if (time >= 0 && time >= options.during) {
                        options.callback(options.to);
                        resolve()
                    }
                    else {
                        rfa(loop);
                    }
                }

                rfa(loop)

            })

            this.registeredPromises.push(promise)

        })

        return this
    }


    animate(...args) {


        this.flatten(args)

        let _this = this

        this.currentPromise.then(function () {
            _this.play(args)
        })

        return this
    }

    then(callback = () => {
    }, context = this) {

        let _this = this

        this.currentPromise = this.currentPromise.then(function () {

            let registered = _this.registeredPromises

            _this.registeredPromises = []

            return Promise.all(registered)
        })

        this.currentPromise.then(() => callback.call(context))

        return this
    }

    after(delay = 0) {

        let _this = this

        this.currentPromise = this.currentPromise.then(() => {

            _this.registeredPromises = []

            return new Promise((resolve, reject) => setTimeout(() => resolve(), delay))
        })

        return this
    }

    flatten(names) {

        return names = [].concat.apply([], names)
    }

    stop(...args) {

        this.flatten(args).forEach(id => {
            if (this.canceled[id] !== undefined) this.canceled[id] = true
        })
    }

    static setStyle(element, property, value) {

        let prefix

        if (element.style[property] !== undefined) element.style[property] = value

        else {
            prefix = ['Webkit', 'Moz', 'ms'].find(vendor => element.style[vendor + property] !== undefined) || ''
            element.style[prefix + property] = value
        }
    }

    static setStyles(element, properties, value) {
        if (typeof properties === "string") properties = {[properties]: value}

        for (let property in properties) {
            Animation.setStyle(element, property, properties[property])
        }
    }

    static setAttributes(element, attributes, value) {
        if (typeof attributes === "string") attributes = {[attribute]: value}
        for (let property in attributes) {
            element.setAttribute(property, attributes[property])
        }
    }

    static isElement(obj) {
        try {
            //Using W3 DOM2 (works for FF, Opera and Chrom)
            return obj instanceof HTMLElement;
        }

        catch (e) {
            //Browsers not supporting W3 DOM2 don't have HTMLElement and
            //an exception is thrown and we end up here. Testing some
            //properties that all elements have. (works on IE7)
            return (typeof obj === "object") &&
                (obj.nodeType === 1) && (typeof obj.style === "object") &&
                (typeof obj.ownerDocument === "object");
        }
    }

    setStyles(element, properties) {

        Animation.setStyles(element, properties)

        return this
    }

    registerCss(name, element, properties = {}, options = {}) {
        let callback = (value) => {
            for (let property in properties)
                Animation.setStyle(element, property, properties[property].replace('<value>', value))
        }

        return this.register(name, callback, options)

    }


}

export var __useDefault = true;


