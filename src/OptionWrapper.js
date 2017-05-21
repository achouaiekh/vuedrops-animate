export default class OptionWrapper {

    constructor(chain, callbacks) {

        this.callbacks = callbacks

        this.chain = chain

        this.Options = this.chain.defaultOptions

        this.options()

        this.assignMethod()



    }

    options(options = {}) {

        this.Options = Object.assign({}, this.Options, options)

        this.setOptions()

        return this
    }

    call(context, ...args) {

        return this.chain.setCallbacks(this.callbacks, context, ...args)
    }


    register(callbacks, context, ...args) {

        return this.chain.register(callbacks, context, ...args)

    }

    animate(...args) {

        return this.chain.animate(...args)
    }


    assignMethod(methods) {

        for (let method in this.chain.defaultOptions)
            this.__proto__[method] = (v) => {
                return this.options({[method]: v})
            }

    }

    setOptions(options = this.Options) {

        for (let name in this.callbacks) {

            this.chain.options[name] = options

        }

        return this
    }

}
