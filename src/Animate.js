
import DEFAULTS from './options'

import Animation from './Animation'


export default class {

    constructor(options = {hello: 'hello'}) {
        console.log(DEFAULTS, options)
        this.animations = {}
        this.animationIds = {}

        Object.assign(this.options = {}, DEFAULTS, options)
        console.log(this.options)
    }

    register(callback, options = {}) {

        for (let name in callback)
            console.log(name)
            return this.animations[name] = new Animation(this, callback[name], options)

    }

    play(callbacks) {

        let start = new Date,
            _this = this

        return new Promise((resolve, reject) => {

            for (let name of callbacks) {

                let options = this.animations[name].options

                this.animationIds[name] = setInterval(() => {

                    let t = (new Date - start) / options.speed

                    if (t > 1) t = 1

                    try {

                        let delta = EASING[options.easing](t, 0, 1, options.speed)

                        delta = options.from + delta * (options.to - options.from)

                        options.callback.call(options.context, delta, ...options.arguments)

                        if (t === 1) {

                            _this.stop(name)

                            resolve(_this)
                        }
                    }

                    catch (e) {

                        _this.stop(name)

                        reject(e)
                    }

                }, options.step)

            }

        })
    }

    stop(names) {

        for (let name of names) {
            clearInterval(this.animationIds[name])
        }
    }
}


