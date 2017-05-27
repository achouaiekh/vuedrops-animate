import Chain from './chain'


let chain = new Chain({every: 100, easing: 'easeInElastic'})
    .register({
        height: function (h) {
            console.log('height: ', h)
        }
    })
    .register({
        width: function (w) {
            console.log('width: ', w)
        }
    }).register({
        width2: function (w) {
            console.log('width2: ', w)
        }
    }).register({
        width3: function (w) {
            console.log('width3: ', w)
        }
    }).from(5).to(10).during(900).register({
        width4: function (w) {
            console.log('width4: ', w)
        }
    }).animate('height', 'width').then().animate('width2').then(function () {
        console.log('then initiated')
    }).animate('width3').then().animate('width4').register(['width']).from(5).to(10).animate('width')


document.querySelector('#stop').addEventListener('click', function(event){
    chain.stop( 'width3')
})
