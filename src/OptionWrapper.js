import DEFAULTS from './options'

export default class Animation {
    constructor(names, animate) {
        
        this.names = names
        
        this.animate = animate

        Object.assign(this.options = {}, this.animate.options, options, {callback})

        for (let method in DEFAULTS) {

            this.__proto__[method] = function (value) {
                this.names.forEach(name => this.animate.collection[name].options[method] = value
                return this
            }
        }

    }

    options(option) {
        Object.assign( this.animate.collection[name].options, this.animate.collection[name].options, options)
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
