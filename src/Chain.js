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

    register(callbacks, options) {

        if (Array.isArray(callbacks)) {

            let temp = {}

            callbacks.forEach(v => temp[v] = this.options[v].function)

            callbacks = temp
        }

        return new OptionWrapper(this, callbacks)
    }


    play(args) {

        let start = new Date,
            _this = this

        args.forEach(id => {

            this.promises[id] = new Promise((resolve, reject) => {

                let options = _this.options[id],
                    animationId

                _this.animationIds[id] = {}

                _this.animationIds[id].cleared = false

                _this.animationIds[id].id = animationId = setInterval(() => {

                    let t = (new Date - start) / options.during

                    if (t > 1) t = 1

                    try {

                        let delta = EASING[options.easing](t, 0, 1, options.during)

                        delta = options.from + delta * (options.to - options.from)

                        options.function.call(options.context, delta, ...options.arguments)

                        if (t === 1 || _this.animationIds[id].cleared) {
                            _this.animationIds[id].cleared = true
                            clearInterval(animationId)
                            resolve(id)
                        }
                    }

                    catch (e) {
                        _this.animationIds[id].cleared = true
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

    then(callback) {

        this.registeredPromises = []

        this.previousPromise = this.nextPromises

        if (typeof callback === 'function') this.previousPromise.then(callback)


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

    stop(...args) {

        this.flatten(args)
            .forEach(id => {
                if(this.animationIds[id] !== undefined)  this.animationIds[id].cleared = true
            })
    }

}
