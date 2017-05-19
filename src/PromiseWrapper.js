export default class PromiseWrapper{

    constructor(promise, animate){

        this.animate = animate
        this.promise = promise
    }

    play(...args){

        let _this = this

        this.promise.then(function(animate){
            _this.animate.play(...args)
        })

        return this.animate
    }
    
    stop(...args){

        this.promise.then(function(animate){
            animate.stop(...args)
        })

        return this.animate
    }
}
