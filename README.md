# vuedrops-animate

## Synopsis
A simple Animation tool 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [License](#license)

## Installation
``` bash
npm install -S vuedrops-animate
```
## Usage
```javascript
  import Animate from "vuedrops-animate" 
  ```  
  or
  ```javascript
  let Animaton = new Animate({speed: 300, easing: 'linear'})
```  


## Code Example
```javascript
  import Animation from "vuedrops-animate"
  
  let Element = ducument.querySelector('#element'),
      animateHeight = function(height){ Element.style.height = height + 'px' }
  
  // first we create a new instance of the Animation Class, the prarameter are the options of the animation chain
  // they will be the default parameter for every animation callback
  let animation = new VDAnimate({easing:'linear')
           // then we register our first callback animation
          .register("height1", setHeight)
          //then we set the option of this animation
          .from(0).to(100).during(100).every(20)
          //we register our second callback animation and set the options
          .register("height2").callback(setHeight).options({from: 100, to: 50, every(25), during(250)})
          //we can also use css directly
          .register("height3").css({height: "&lt;value&gt;px"}).options({from: 50, to: 0, every(25), during(250)})
          //we start ou first animation
          .animate('height1')
          //then after the first animation is completed we trigger the second one
          .then().animate('height2')
          //then after .3s the second animation is completed we animate the third one
          .then().after(500).animate('height3')
```  



## API
### Options
#### from
* Type : `Number`
* Default : `0`

the initial value of the animated property
#### to
* Type : `Number`
* Default : `1`

the final value of the animated property
#### easing
* Type : `String`
* Default : `linear`
* Easing Type: `linear, swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExgitpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic , easeInBack, easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce`
#### speed
* Type : `Number`
* Default : `300`

The speed or duration of the animation in milliseconds


## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

## License

[ISC License](https://github.com/nevir/readable-licenses/blob/master/markdown/ISC-LICENSE.md). © 2017 [Amine Chouaiekh](https://github.com/achouaiekh).

Thanks to [javascript.info](https://javascript.info/) and [jQuery Easing v1.3](http://gsgd.co.uk/sandbox/jquery/easing/) that inspired `vuedrops-animate` 
