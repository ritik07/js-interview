function sayHello() {
    setTimeout(function () {
        console.log('Hello')
    }, 1000)
}

// Create a promise.Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout.
// Print the contents of the promise after it has been resolved by passing console.log to.then

var promiseFn = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("Resolved!")
    }, 200)
})

promiseFn.then((x) => {
    // console.log(x)
})

// Create another promise.Now have it reject with a value of "Rejected!" without using setTimeout. 
// Print the contents of the promise after it has been rejected by passing console.log to.catch

const promiseRejFn = new Promise((resolved, rejected) => {
    rejected("Rejected!")
})

promiseRejFn.then((resolved) => {
    console.log(resolved)
}).catch((rejected) => {
    // console.log(rejected)
})

// Promises are asynchronous and we're now going to prove that they indeed are! 
// Create a promise and have it resolve with the value of "Promise has been resolved!" 
// Then uncomment the code at bottom of Challenge 4. What order do we expect 
// "Promise has been resolved!" and "I'm not the promise!" to print? Why?

const promise = new Promise(function (resolve, reject) {
    // resolve('Promise has been resolved!');
});

promise.then((value) => console.log(value)).catch((rejected) => {
    console.log(rejected)
});
// console.log('I am not the promise');


// Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms
function delay() {
    return new Promise((resolve, rejected) => {
        return setTimeout(() => {
            resolve("resolved")
        }, 1000)
    })
}

const sayHelloFn = () => {
    console.log("Hello")
}

// delay().then(sayHelloFn)

// This challenge we'll chain promises together using ".then" Create two variables: firstPromise and secondPromise 
// Set secondPromise to be a promise that resolves to "Second!" 
// Set firstPromise to be a promise that resolves to secondPromise Call the firstPromise with a ".then", 
// which will return the secondPromise> promise. Then print the contents of the promise after it has been resolved by 
// passing console.log to .then

const firstPromise = new Promise(function (resolve, reject) {
    resolve("resolved")
})

const secondPromise = new Promise(function (resolve, reject) {
    resolve("resolved 2")
})

// firstPromise.then((resolved) => console.log("resolved 1")).then((resolve2) => console.log("resolve 2"))


// promise.all 

function resolveAll() {
    Promise.all([firstPromise, secondPromise]).then((value) => {
        console.log("value", value)
    })
}

resolveAll()

// promise.allSettled

const ApiCall1 = new Promise((resolved, rejected) => {
    setTimeout(() => {
        resolved("yesss 1")
    }, 4000);
    // rejected("rejected")
})

const ApiCall2 = new Promise((resolved, rejected) => {
    try {
        // setTimeout(() => {
        //   resolved("yesss 2")
        // }, 3000);
        setTimeout(() => {
            rejected("rejected")
        }, 3000);
    } catch {

    }
})

Promise.allSettled([ApiCall1, ApiCall2]).then((value) => {
    console.log("result", value)
}).catch((err) => {
    console.log("err", err)
})

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function (result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function (result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function (result) {

    alert(result); // 4
    return result * 2;

});
