import EASING from './easing'

export default class Animate {


    constructor(options) {
        this.options = Object.assign({}, DEFAULTS, options)
        this.animationId = null
        this.initialValue = this.this.options.from
    }

    from(from) {
        this.options.from = this.initialValue = from
        return this
    }

    to(to) {
        this.options.to = to
        return this
    }

    context(context, ...args) {
        this.options.context = context
        this.options.arguments = args
        return this
    }

    easing(easing) {
        this.options.easing = easing
        return this
    }

    speed(speed) {
        this.options.speed = speed
        return this
    }

    step(step) {
        this.options.step = step
        return this
    }

    play(callback, options = {}) {

        Object.assign(this.options, this.options, options, {callback})

        let start = new Date,
            _this = this,
            options = this.options

        return new Promise((resolve, reject) => {

            this.animationId = setInterval(() => {

                let t = (new Date - start) / options.speed

                if (t > 1) t = 1

                try {

                    let delta = EASING[options.easing](t, 0, 1, options.speed)

                    this.initialValue = delta = options.from + delta * (options.to - options.from)

                    options.callback.call(options.context, delta, ...options.arguments)

                    if (t === 1) {
                        _this.stop()

                        resolve(_this)
                    }
                }

                catch (e) {
                    _this.stop()

                    reject(e)
                }

            }, options.step)
        })

    }

    stop() {
        clearInterval(this.AnimationId)
        return this
    }

    continue() {

        let temp = this.option.from

        this.option.from = this.initialValue

        this.initialValue = temp

        return this.play()
    }

    replay() {
        this.play({from: this.initialValue})
    }
}


const DEFAULTS = {
    from: 0,
    to: 1,
    speed: 300,
    step: 10,
    callback: () => {
    },
    context: null,
    arguments: [],
    easing: 'linear',

}


