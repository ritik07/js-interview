function slowFn(num) {
  for (let i = 0; i <= num; i++) {
    if (i === num) {
      return i;
    }
  }
}

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn(...args);
    cache[args] = result;
    return result;
  };
};

const memoizePractice = (fn) => {
  let cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn(...args);
    cache[args] = result;
    return result;
  };
};

const fasterFn = memoizePractice(slowFn);

console.time("1");
console.log("fn", fasterFn(2000000));
console.timeEnd("1");

console.time("2");
console.log("fn", fasterFn(2000000));
console.timeEnd("2");

//  Question 1: Basic Memoization
//  Implement a function fibonacciMemo that calculates the nth Fibonacci number using memoization. The function should have the following signature:

function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

// ^^ more optimize
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  console.log("computing");
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  console.log(memo);
  return memo[n];
}

function memoize(fn) {
  let cache = {};
  return (...args) => {
    if (cache[args]) return cache[args];

    const result = fn(...args);
    cache[args] = result;
    return result;
  };
}

const fastFunction = memoize(fibonacciMemo);

console.log(fastFunction(6));
console.log(fastFunction(6));
console.log(fastFunction(6));

// fn = fn-2 + fn-1
