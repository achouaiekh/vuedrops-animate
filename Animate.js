export default class {

    constructor(options) {
        this.options = Object.assign({}, DEFAULTS, options);
        console.log(this.options, 'options')
    }

    from(from) {

        this.options.from = from;
        return this
    }

    to(to) {
        this.options.to = to;
        return this
    }

    call(scope, ...args) {
        this.options.scope = scope;
        this.options.args = args;
        return this
    }

    play(progress, options = {}) {

        return new Promise((resolve, reject) => {

            options = Object.assign(
                {},
                this.options,
                options,
                {progress}
            )

            let start = new Date,

                id = setInterval(() => {

                    let t = (new Date - start) / options.speed;

                    if (t > 1) t = 1;

                    try {
                        let delta = DELTAS[options.delta];
                        delta = EASES[options.easing](delta, t);
                        delta = options.from + delta * (options.to - options.from);

                        options.progress.call(options.scope, delta, ...options.args);

                        if (t === 1) {
                            clearInterval(id);

                            resolve(this)
                        }
                    }

                    catch (e) {
                        clearInterval(id);
                        reject(e)
                    }
                    console.log(options)


                }, options.step)
        })

    }
}


const DEFAULTS = {
    from: 0,
    to: 1,
    speed: 300,
    step: 10,
    progress: () => {
    },
    scope: null,
    easing: 'easeOut',
    delta: 'linear',
    args: [],
};

const DELTAS = {
    elastic(progress, x = 1.5) {
        return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress)
    },

    linear(progress) {
        return progress
    },

    bounce(progress) {
        for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
            if (progress >= (7 - 4 * a) / 11) {

                return (-1) * Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
            }
        }
    }
};

const EASES = {
    easeIn(delta, progress) {
        return delta(progress)
    },

    easeOut(delta, progress) {
        return 1 - delta(1 - progress)
    },

    easeInOut(delta, progress) {
        if (progress <= 0.5) { // the first half of the animation)
            return delta(2 * progress) / 2
        }
        else { // the second half
            return (2 - delta(2 * (1 - progress))) / 2
        }

    }
};
