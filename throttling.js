// Throttling or sometimes is also called throttle function is a practice used in websites.
// To throttle a function means to ensure that the function is called at most once in a 
// specified time period (for instance, once every 10 seconds). 
// This means throttling will prevent a function from running if it has run “recently”. 
// Throttling also ensures a function is run regularly at a fixed rate.

// Throttling is used to call a function after every millisecond or a particular interval of time only the 
// first click is executed immediately.

let counter = 0;

function punch() {
    console.log('punch', counter++);
}

const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// const throttlePractice = (fn, delay) => {
//     let isTh;
//     return function () {
//         let context = this,
//             args = arguments
//         if (!isTh) {
//             fn.apply(context, args)
//             isTh = true
//             setTimeout(() => {
//                 isTh = false
//             }, delay);
//         }
//     }
// }

const throttleFn = throttlePractice(punch, 300)

throttleFn()
throttleFn()
throttleFn()
// Examples:
// Gaming — In action games, the user often performs a key action by pushing a button (example: shooting, punching). 
// But, as any gamer knows, users often press the buttons much more than is necessary, probably
// due to the excitement and intensity of the action. So the user might hit “Punch” 10 times in 5 seconds, 
// but the game character can only throw one punch in one second. In such a situation, it makes sense to throttle the action. 
// In this case, throttling the “Punch” action to one second would ignore the second button press each second.

