import Animate from './Animate'


let animation = new Animate().register({
    height: function (h) {
        console.log('height: ', h)
    }
}).every(30).during(120)
    .register({
        width: function (w) {
            console.log('width: ', w)
        }
    }).from(2).to(5).every(30).during(90)
    .play(['height', 'width'])
    .then()
