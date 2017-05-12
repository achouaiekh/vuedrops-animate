
import DEFAULTS from './options'

export default class Animation{
    constructor(animate, callback, options={}){

        this.animate = animate

        console.log(this.animate.options)

        Object.assign(this.options = {}, this.animate.options, options, {callback})

        for( let method in Object.keys(DEFAULTS)){
            Animation.prototype[method] = function(value){
                this.options[method] = value

                return this
            }
        }
    }

    options(option){
        Object.assign(this.options, this.options, options)
        return this
    }

    register(callback, options){
        return this.animate.register(callback, options)
    }

    play(value){
        return this.animate.play(value)
    }



}