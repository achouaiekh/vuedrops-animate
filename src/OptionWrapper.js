export default class OptionWrapper {

    constructor(animation, name, options = {}) {

        this.name = name

        this.animation = animation

        Object.assign(this.animation.callbacks[this.name], this.animation.callbacks[this.name], options)

        this._assignMethod()

    }

    _assignMethod(methods) {

        ['from', 'to', 'context', 'arguments', 'easing', 'every', 'during', 'callback'].forEach(method =>
            this.__proto__[method] = (v) => {
                this.animation.callbacks[this.name][method] = v
                return this
            }
        )
    }


    options(options = {}) {

        Object.assign(this.animation.callbacks[this.name], this.animation.callbacks[this.name], options)

        return this
    }

    call(context, ...args) {

        this.arguments(...args)
        this.context(context)
    }

    apply(context, args) {

        this.call(context, ...args)
    }

    register(name, callback = () => {
    }, options = {}) {

        return this.animation.register(name, callback, options)
    }

    registerCss(name, element, properties = {}, options = {}) {

        return this.animation.registerCss(name, element, properties, options)
    }

    css(element, properties, options = {}) {

        return this.animation.registerCss(this.name, element, properties, options)
    }

    animate(...args) {

        return this.animation.animate(...args)
    }

    then(callback, context = this.animation) {

        return this.animation.then(callback, context)
    }

    stop(...args) {

        return this.animation.stop(...args)
    }

    after(delay = 0) {

        return this.animation.after(delay)
    }

}
