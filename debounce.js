// Debounce is a higher-order function, which is a function that returns another function. 
// This is done to form a closure around the func and delay function parameters and the timer variable 
// so that their values are preserved.

// Debouncing in Javascript
let counter = 0;
const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

const betterFunction = debounce(getData, 300);

betterFunction()
betterFunction()