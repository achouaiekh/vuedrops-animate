import DEFAULT_OPTIONS from './options'
import OptionWrapper from './OptionWrapper'
import EASING from './easing'

export default class Chain {

    constructor(options = {}) {
        this.animationIds = {}
        this.callbacks = {}
        this.promises = {}
        this.options = {}
        this.defaultOptions = {}
        this.registeredPromises = []


        this.previousPromise = this.nextPromises = Promise.resolve(0)

        Object.assign(this.defaultOptions = {}, DEFAULT_OPTIONS, options)
    }

    register(callbacks, context = null, ...args) {

        this.setCallbacks(callbacks, context, ...args)

        return new OptionWrapper(this, callbacks)
    }

    setCallbacks(callbacks, context = this.defaultOptions.context, ...args) {

        for (let id in callbacks)
            this.callbacks[id] = {
                func: callbacks[id],
                context,
                args
            }

        return this

    }


    play(args) {

        let start = new Date,
            _this = this


        args.forEach(id => {

            this.promises[id] = new Promise((resolve, reject) => {

                let options = _this.options[id],
                    callback = _this.callbacks[id],
                    animationId

                _this.animationIds[id] = animationId = setInterval(() => {

                    let t = (new Date - start) / options.during

                    if (t > 1) t = 1

                    try {

                        let delta = EASING[options.easing](t, 0, 1, options.during)

                        delta = options.from + delta * (options.to - options.from)

                        callback.func.call(callback.context, delta, ...callback.args)

                        if (t === 1) {
                            clearInterval(animationId)
                            resolve(id)
                        }
                    }

                    catch (e) {
                        clearInterval(animationId)
                        reject(e)

                    }

                }, options.every)


            })


            this.registeredPromises.push(this.promises[id])

            // return this.registeredPromises

        })

        return this
    }

    then() {

        this.registeredPromises = []

        this.previousPromise = this.nextPromises

        return this
    }

    animate(...args) {

        this.flatten(args)

        let _this = this

        this.nextPromises = this.previousPromise.then(function () {
            _this.play(args)
            return Promise.all(_this.registeredPromises)
        })


        return this
    }

    flatten(names) {
        return names = [].concat.apply([], names)
    }

}
