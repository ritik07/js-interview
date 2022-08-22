
// Advantages of closures:
// Callbacks implementation in javascript is heavily dependent on how closures work
// Mostly used in Encapsulation of the code
// Also used in creating API calling wrapper methods

// Disadvantages of closures:
// Variables used by closure will not be garbage collected
// Memory snapshot of the application will be increased if closures are not used properly

// problem 1
function outer() {
    var a = 123;

    function inner() { // this function act as closure
        console.log(a);
    }

    inner();
}

// outer(); // it will print '123'

// problem 2
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        // console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

// two solution of above problem

// 1. replace var with let because let has a block scope and it every times get declared as a new scrope 
// so the previous value keep as it is but in case of var it is being replaced due to initalized in global scope

for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        // console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

// 2. use of closures with a function returned 
for (var i = 0; i < arr.length; i++) {
    (function (i) {
        setTimeout(function () {
            console.log('Index: ' + i + ', element: ' + arr[i]);
        }, 3000);
    })(i)
}
