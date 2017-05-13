export default class PromiseWrapper{
    constructor(name, promise, animate){
        this.name = name
        this.animate = animate
        this.promise = promise
    }

    play(...args){
        this.promise.then(function(animate){
            this.animate.play(...args)
        })
    }
    
    stop(...args){
        this.promise.then(function(animate){
            this.animate.stop(...args)
        })
    }
}
