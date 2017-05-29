export default class OptionWrapper {

    constructor(chain, callbacks, options) {

        this.callbacks = callbacks

        this.chain = chain

        this.Options = Object.assign({}, this.chain.defaultOptions, options)

        this.options()

        this.assignMethod()


    }

    options(options = {}) {

        this.Options = Object.assign({}, this.Options, options)

        this.setOptions()

        return this
    }

    call(context, ...args) {

        this.arguments(...args)
        this.context(context)
    }

    arguments(...args) {

        this.options({arguments: args})
    }


    register(callbacks, context, ...args) {

        return this.chain.register(callbacks, context, ...args)

    }

    animate(...args) {

        return this.chain.animate(...args)
    }

    then(callback) {

        return this.chain.then(callback)
    }

    stop(...args) {

        return this.chain.stop(...args)
    }


    assignMethod(methods) {

        ['from', 'to', 'easing', 'during', 'every', 'context'].forEach(method =>
            this.__proto__[method] = (v) =>
                this.options({[method]: v})
        )


    }

    setOptions(options = this.Options) {

        for (let name in this.callbacks) {

            this.chain.options[name] = Object.assign({}, options, {function: this.callbacks[name]})

        }

        return this
    }

}
