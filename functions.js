// use of self invocking function

const counter = (function () {
  let count = 0; // Private variable

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  // Return an object with public methods
  return {
    increment,
    decrement,
    getCount,
  };
})();

console.log(counter.getCount()); // Output: 0
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Output: 1
