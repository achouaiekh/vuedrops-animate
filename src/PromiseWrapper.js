export default class PromiseWrapper{
    constructor(promise, animate){
        this.animate = animate
        this.promise = promise
    }

    play(...args){
        this.promise.then(function(animate){
            this.animate.play(...args)
        })


    }
}