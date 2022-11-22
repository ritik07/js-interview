// Unlike regular functions, Arrow functions does not have a this of their own, 
// only regular functions and global scope have this of their own.

const data = {
  name: "Roger",
  func: function () {
    return console.log(this.name)
  }
}

const myName = {
  name: "ritik"
}

// data.func.call(myName)
const newFn = data.func.bind(myName)

newFn()
// data.func()


function sum(num1, num2) {
  console.log(this + num1 + num2);
}

sum.call(2, 3, 4); // Output: 9
sum.apply(2, [3, 4]); // Output: 9
