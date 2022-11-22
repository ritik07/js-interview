// 1. count the frequency of items in array

// const arr = [1, 2, 23, 4, 434, 12, 2, 3, 4, 5, 'q', 't', 'a', 'a', 'b', 'g', 5, 4, 2]

// let result = arr.reduce((acc, current) => {
//   acc[current] ? ++acc[current] : acc[current] = 1
//   return acc
// }, {})

// // console.log("frequency result", result)

// // 2. make an array unique
// let unique = arr.reduce((acc, current) => {
//   if (acc.indexOf(current) == -1) {
//     acc.push(current)
//   }
//   return acc
// }, [])

// console.log("unique", unique)

// const ApiCall1 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     resolved("yesss 1")
//   }, 4000);
//   // rejected("rejected")
// })

// const ApiCall2 = new Promise((resolved, rejected) => {
//   try {
//     // setTimeout(() => {
//     //   resolved("yesss 2")
//     // }, 3000);
//     setTimeout(() => {
//       rejected("rejected")
//     }, 3000);
//   } catch {

//   }
// })

// Promise.allSettled([ApiCall1, ApiCall2]).then((value) => {
//   console.log("result", value)
// }).catch((err) => {
//   console.log("err", err)
// })

// ApiCall1.then((data) => {
//   console.log("data", data)
// }).catch((err) => {
//   console.log("err", err)
// })

// concepts of node js
// react make a counter
// 



// find the output

// const a = "sreeni";

// first();

// function first() {

//   const b = "hello";

//   console.log(a, b); // "sreeni" ,  "hello";

//   second();

//   function second() {

//     const c = "hi";

//     console.log(a, b, c); // "sreeni" ,  "hello", "hi"

//     third();

//   }

// }

// function third() {

//   const d = "how are you";

//   console.log(a, b, c, d);  // "sreeni" , "hello", "hi", "how are you"

// }


// const debounce = (fn, delay) => {
//   let timer
//   return () => {
//     let context = this,
//       args = arguments
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.apply(context, args)
//     }, delay);
//   }
// }

// const throttling = (fn, delay) => {
//   let isThrottling;
//   return () => {
//     let context = this,
//       args = arguments
//     if (!isThrottling) {
//       isThrottling = true
//       fn.apply(context, args)
//       setTimeout(() => {
//         isThrottling = false
//       }, delay);
//     }
//   }
// }


// function sum(a) {
//   return (b) => {
//     return (c) => {
//       return (d) => {
//         return a + b + c + d
//       }
//     }
//   }
// }

// console.log("data", sum(2)(23)(3)(1))


// function sumFn(firstValue) {
//   let a = firstValue;
//   return function sumUp(secondValue) {
//     if (secondValue == undefined) {
//       return a
//     } else {
//       a += secondValue
//       return sumUp
//     }
//   }
// }

// console.log("", sumFn(3)(3)(3)(3)(1)())

// let s = s.toLowerCase().replace(/[^0-9az-A-z]/g, "");

// setTimeout
// clearTimeout

// setInterval
// clearInterval

// function delayPrint(n) {
//   for (let i = 1; i <= n; i++) {
//     // setTimeout(() => {
//     //   console.log(i)
//     // }, (i * i - 1) * 500);
//   }
// }

// delayPrint(5)

// function asynchronous_operational_method() {
//   let first_promise = new Promise((resolve, reject) => resolve("Hello"));
//   let second_promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(" GeeksforGeeks..");
//     }, 1000);
//   });
//   let combined_promise = Promise.all([first_promise, second_promise]);
//   return combined_promise;
// }

// async function display() {
//   let data = await asynchronous_operational_method();
//   console.log(data);
// }

// display();



// function myFunc() {
//   setTimeout(() => console.log("TimeOut 1"), 0);
//   Promise.resolve().then(() => console.log("Promise 1")); 
//   const promise = Promise.resolve();
//   setTimeout(() => console.log("TimeOut 2"), 0); 
//   console.log("First Func"); 
//   setTimeout(() => promise.then(() => console.log("Promise 2")), 0); 
//   Promise.resolve().then(() => console.log("Promise 3")); 
// }
// myFunc()
// // first fn
// // Promise 1
// // Promise 3
// // to 1
// // to 2
// Promise 2

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b); // true
// console.log(a === b); // false
// console.log(b === c); // false

// largest = array.sort((a,b)=>a-b)[array.length - 1];

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<array.length; i++){
//     if (array[i]>largest) {
//         largest=array[i];
//     }
// }




// console.log(largest);

['20','120','111','215','54','78'].sort(function(a, b) { return b - a; })[1];