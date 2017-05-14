import DEFAULTS from './options'

export default class Animation {
    constructor(animate, callback, options = {}) {

        this.animate = animate

        Object.assign(this.options = {}, this.animate.options, options, {callback})

        for (let method in DEFAULTS) {

            this.__proto__[method] = function (value) {

                this.options[method] = value

                return this
            }
        }

    }

    options(option) {
        Object.assign(this.options, this.options, options)
        return this
    }

    call(context, ...args) {
        return this.animate.call(this, context, ...args)
    }

    apply(context, args = []) {
        return this.animate.call(this, context, args)
    }

    register(callback, options) {
        return this.animate.register(callback, options)
    }

    play(value) {
        return this.animate.play(value)
    }

    stop(value) {
        
    }


}
