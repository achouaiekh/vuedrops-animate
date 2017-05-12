import Animate from './Animate'


let animation = new Animate().register({
    height: function (h) {
        console.log('height: ', h)
    }
}).register({
    width: function (w) {
        console.log('width: ', w)
    }
}).from(2).to(5).play(['height', 'width'])
