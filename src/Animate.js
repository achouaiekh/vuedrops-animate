import DEFAULTS from './options'

import EASING from './easing'

import Animation from './Animation'


export default class {

    constructor(options = {}) {
        this.collection = {}
        this.registered = []
        this.option = options
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
            this.collection[name].options = Object.assign({}, options, {callback: callback[name]})
        
        return new OptionWrapper(Object.keys(callback), animate)
        
        
    }

    play(...args) {

        let start = new Date,
            _this = this
        
        this.flatten(args)
        
        this.previousThen = args

        for (let name of args) {
            
            if(!this.fulfilled[name]) continue
            
            let promise =  new Promise((resolve, reject) => {

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

            this.collection[name].promise = new PromiseWrapper(promise, this)
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
        name = names.map(name => this.collection[name].promise) 
        return Promise.all(names)
    }
    
    afterAll(){
        return Promise.all(Object.value(this.collection).map(collection => collection.promise))
    }
    
    afterFirst(...names) {
        this.flatten(names)
        this.previousThen = names = names || this.previousThen
        names = names.map(name => this.collection[name].promise) 
        return Promise.race(names) 
    }

    stop(...names) {
        
        this.flatten(names)
        
        this.previousThen = names = names || this.previousThen

        for (let name of names) {
            clearInterval(this.collection[name].id)
            Promise.resolve(this.collection[name].promise)
            this.fulfilled[name] = true
        }
    }
    
    flatten(names){
        return names = [].concat.apply([], names)
    }
}


