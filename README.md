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
  
  let Animation = new Animation({from: 1, to: 10, during: 300, every: 10, easing: 'linear'})
                        .animate({height: function(count){ console.log('height: ', count)})
                        .animate({width: function(count){ console.log('width: ', count)}).from(1).to(3)
                        .play('height', 'width')
                        .update('height').from().to().after('width').play('height')
                        .then(function(){ console.log("Counting finished")})

```  

> the result will be:
>
>     1
>     2   
>     3
>     Counting finished

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
