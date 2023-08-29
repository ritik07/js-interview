// A closure is a fundamental and powerful concept in JavaScript that arises from its support for lexical scoping.
// In simple terms, a closure is a function that remembers the variables in the scope where it was created,
// even if that function is executed in a different scope.

// Advantages of closures:
// Callbacks implementation in javascript is heavily dependent on how closures work
// Mostly used in Encapsulation of the code
// Also used in creating API calling wrapper methods

// Disadvantages of closures:
// Variables used by closure will not be garbage collected
// Memory snapshot of the application will be increased if closures are not used properly

// They enable functional programming patterns like currying, partial application, and memoization.

// helps in callbacks:
// In JavaScript, callbacks are functions passed as arguments to other functions, and they are executed later,
// usually after some asynchronous operation completes. Closures allow callbacks to "remember" the variables and
// context in which they were defined, ensuring that the callback function has access to the relevant data when it is executed.

// Event Listeners:
// Event listeners in JavaScript are functions that respond to events triggered by user interactions or other actions.
// When you attach an event listener, it forms a closure with the context in which it was defined, allowing access to the
// variables within that context when the event is triggered.

// problem 1
function outer() {
  var a = 123;

  function inner() {
    // this function act as closure
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
      console.log("Index: " + i + ", element: " + arr[i]);
    }, 3000);
  })(i);
}

/////

function outer(x) {
  return function inner(y) {
    return x + y;
  };
}

var closureFn = outer(10);
console.log(closureFn(5));
console.log(closureFn(8));

/////

function outer(x) {
  function middle(y) {
    function inner(z) {
      console.log(x + y + z);
    }
    return inner;
  }
  return middle;
}

var closureFn1 = outer(10);
var closureFn2 = closureFn1(5);
closureFn2(2);
