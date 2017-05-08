import EASING from './easing'

export default class Animate{


    constructor(options) {
        this.options = Object.assign({}, DEFAULTS, options)
        this.animationId = null
    }

    from(from) {
        this.options.from = from
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

    play(callback, options = {}) {

        Object.assign(options, this.options, options, {callback})

        let start = new Date

        return new Promise((resolve, reject) => {

            this.id = setInterval(() => {

                let t = (new Date - start) / options.speed

                if (t > 1) t = 1

                try {

                    let delta = EASING[options.easing](t, 0, 1, options.speed)

                    delta = options.from + delta * (options.to - options.from)

                    options.callback.call(options.context, delta, ...options.arguments)

                    if (t === 1) {
                        clearInterval(this.id)

                        resolve(this)
                    }
                }

                catch (e) {
                    clearInterval(id)

                    reject(e)
                }

            }, options.step)
        })

    }

    stop() {
        clearInterval(this.id)
        return this
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


window.VDAnimation = Animate.default


