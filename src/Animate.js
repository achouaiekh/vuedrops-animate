import DEFAULTS from './options'

import EASING from './easing'

import Animation from './Animation'


export default class {

    constructor(options = {hello: 'hello'}) {

        this.animations = {}
        this.animationIds = {}
        this.promises = {}

        Object.assign(this.options = {}, DEFAULTS, {context: null, arguments: []}, options)

        for (let method in DEFAULTS) {

            this.__proto__[method] = function (value) {

                this.options[method] = value

                return this
            }
        }
    }

    register(callback, options = {}) {
        
        for (let name in callback)
            return this.animations[name] = new Animation(this, callback[name], options)
    }

    play(...args) {

        let start = new Date,
            _this = this,
            callbacks = this.flatten(args)
        
        this.previousThen = callbacks

        for (let name of callbacks) {

            let promise =  new Promise((resolve, reject) => {


                let options = this.animations[name].options

                this.animationIds[name] = setInterval(() => {

                    let t = (new Date - start) / options.during

                    if (t > 1) t = 1

                    try {

                        let delta = EASING[options.easing](t, 0, 1, options.during)

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

                }, options.every)


            })

            this.promises[name] = new PromiseWrapper(promise, this)
        }

        return this
    }
    
    playExcept(...args){
        this.flatten(args)
        args = Object.keys(this.animations).filter(name=> !args.includes(name))
        
        return this.play(args)
    }

    call(context, ...args) {
        this.options.context = context
        this.options.arguments = args

        return this
    }

    apply(context, args = []) {
        this.options.context = context
        this.options.arguments = Array.isArray(args) ? args : Array.of(args)

        return this
    }
    
    after(...names){
        this.flatten(names)
        this.previousThen = name = names || this.previousThen
        name = names.map(name => this.promises[name]) 
        return Promise.all(names)
    }
    
    afterAll(){
        return Promise.all(Object.value(this.promises))
    }
    
    afterFirst(...names) {
        this.flatten(names)
        this.previousThen = names = names || this.previousThen
        names = names.map(name => this.promises[name]) 
        return Promise.race(names) 
    }

    stop(...names) {
        
        this.flatten(names)
        
        this.previousThen = names = names || this.previousThen

        for (let name of names) {
            clearInterval(this.animationIds[name])
            Promise.resolve(this.promises[name])
        }
    }
    
    flatten(names){
        return names = [].concat.apply([], names)
    }
}


