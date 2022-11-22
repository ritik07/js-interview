// 1.
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); // true
console.log(a === b); // false
console.log(b === c); // false

// 2. Implement custom promise.all (polyfill)

// const promise1 = new Promise((resolve, rejected)=>{
//     setTimeout(()=>{
//          resolve("resolved 1")
//     },2000)
// })


// const promise2 = new Promise((resolve, rejected)=>{
//      setTimeout(()=>{
//          resolve("resolved 2")
//     },4000)
// })


// const output = Promise.all([promise1, promise2]).then((value)=>{
//     console.log("result", value)
// }).catch((err)=>{
//     console.log("err",err)
// })

// Not able to write

// 3. Write a function that'll flatten the given array and return the flatten array without modifing the original array
//  


// let arr = [1,[1,2,[4,5]],[3],[33]]

// function flattenArray(arr){
//    let output = arr.reduce((acc, current)=>{
//         if(Array.isArray(current)){
//             acc = acc.concat(flattenArray(current))
//         }else{
//             acc.push(current)
//         }
//         return acc
//     },[])
//     return output
// }

// console.log(flattenArray(arr))


// 4. "Q: Write an implementation of a function called 'memoize' which enables caching of the results returned by another function.

// For example:
// const getDoubleOfNumber = function(number) {console.log('inside function'); return 2*number;}
// const memoizedGetDoubleOfNumber = memoize(getDoubleOfNumber);
// memoizedGetDoubleOfNumber(3)     //=> this function should print the console statememnt and return result as 6
// memoizedGetDoubleOfNumber(3)     //=> this time, only the result should be returned as 6

// Expectation - The candidate should write generic solution, by using closures, and considering any number of arguments to the function"


// function memoize(callback){
//     // params is same it'll return the calculated  value which
// }



//  getDoubleOfNumber = function(number) {
//     //  2s taking time
//      console.log('inside function'); return 2*number;
//      }


//  console.log("output",output)

// 5. 
// function myFunc() {
//   setTimeout(() => console.log("TimeOut 1"), 0);
//   Promise.resolve().then(() => console.log("Promise 1")); // before sto
//   const promise = Promise.resolve();
//   setTimeout(() => console.log("TimeOut 2"), 0); // after 1st promise
//   console.log("First Func"); //->1st
//   setTimeout(() => promise.then(() => console.log("Promise 2")), 0); // 
//   Promise.resolve().then(() => console.log("Promise 3")); // after
// }

// myFunc();

//  
// Promise 1
// TimeOut 2
//console.log("First Func"); 
// Promise 2
// Promise 3
// TimeOut 1