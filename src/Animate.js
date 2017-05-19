import DEFAULTS from './options'

import EASING from './easing'

import OptionWrapper from './OptionWrapper'

import PromiseWrapper from './PromiseWrapper'


export default class {

    constructor(options = {}) {

        this.options = options

        this.collection = {}

        this.registered = []

        this.fulfilled = []

        this.recentlyPlayed = []


        Object.assign(this.options = {}, DEFAULTS, {context: null, arguments: []}, options)

        this.assignMethod(Object.keys(DEFAULTS))
    }

    register(callback, options = {}) {

        let names = Object.keys(callback)


        names.forEach(name => {
            this.fulfilled[name] = true
            this.collection[name] = {}
            this.collection[name].callback = callback[name]
            this.registered.push(name)
        })

        return new OptionWrapper(names, this, Object.assign({}, options))


    }

    start(play){

        let _this = this,
            test = false

        for(let collection in this.collection){
           this.collection[collection].promise.then(function(){
               if(_this.collection[name].promise instanceof Promise)
                _this.play(play)
           })

        }
    }


    play(...args) {

        let start = new Date,
            _this = this


        args = this.flatten(args)

        this.recentlyPlayed = args

        for (let name of args) {

            console.log(this.fulfilled[name], 'fulfilled', args, name)

            if (!_this.fulfilled[name]) continue

            let promise = new Promise((resolve, reject) => {

                let options = this.collection[name].options


                this.fulfilled[name] = false

                this.collection[name].id = setInterval(() => {

                    let t = (new Date - start) / options.during

                    if (t > 1) t = 1

                    try {

                        let delta = EASING[options.easing](t, 0, 1, options.during)

                        delta = options.from + delta * (options.to - options.from)

                        options.callback.call(options.context, delta, ...options.arguments)

                        if (t === 1) {
                            _this.stop(name)
                        }
                    }

                    catch (e) {
                        console.log(e)
                        _this.stop(name)

                    }

                }, options.every)


            })

            this.collection[name].promise = new Promise((resolve, reject) => {

                let options = this.collection[name].options,
                    callback = this.collection[name].callback


                _this.fulfilled[name] = false

                _this.collection[name].id = setInterval(() => {

                    let t = (new Date - start) / options.during

                    if (t > 1) t = 1

                    try {

                        let delta = EASING[options.easing](t, 0, 1, options.during)

                        delta = options.from + delta * (options.to - options.from)

                        callback.call(options.context, delta, ...options.arguments)

                        if (t === 1) {
                            _this.fulfilled[name] = true
                            clearInterval(_this.collection[name].id)
                            resolve(_this)
                        }
                    }

                    catch (e) {
                        console.log(e)
                        _this.fulfilled[name] = true
                        clearInterval(_this.collection[name].id)
                        reject(e)

                    }

                }, options.every)


            })

        }

    }

    playExcept(...args) {

        this.flatten(args)

        args = Object.keys(this.animations).filter(name => !args.includes(name))

        return this.play(args)
    }

    call(context, ...args) {

        this.options.context = context
        this.options.arguments = args

        return this
    }

    apply(context, args = []) {

        return this.call(context, ...args)
    }

    after(...names) {

        this.flatten(names)

        this.recentlyPlayed = names = names.length ? names : this.recentlyPlayed

        console.log(names, 'name')

        names = names.map(name => this.collection[name].promise)

        console.log(names, 'name')

        return new PromiseWrapper(Promise.all(names), this)
    }

    afterAll() {
        return new PromiseWrapper(Promise.all(Object.value(this.collection).map(collection => collection.promise)), this)
    }

    afterFirst(...names) {

        this.flatten(names)

        this.recentlyPlayed = names = names || this.recentlyPlayed

        names = names.map(name => this.collection[name].promise)

        return new PromiseWrapper(Promise.race(names), this)
    }

    stop(...names) {

        this.flatten(names)

        this.recentlyPlayed = names = names || this.recentlyPlayed

        for (let name of names) {

            clearInterval(this.collection[name].id)

            Promise.resolve(this.collection[name].promise)

            this.fulfilled[name] = true
        }

        return this
    }

    flatten(names) {
        return names = [].concat.apply([], names)
    }

    assignMethod(methods) {
        methods.forEach(method => {

            this.__proto__[method] = function (value) {

                this.options[method] = value

                return this
            }
        })

        return this
    }
}


