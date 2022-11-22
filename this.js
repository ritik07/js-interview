// # this in a function invocation
// # this is the global object in a function invocation.

// # An example of a function called in strict mode: this is undefined in strict mode

// # this in a method invocation
// # this is the object that owns the method in a method invocation

const calc = {
  num: 0,
  increment() {
    console.log(this === calc); // => true
    this.num += 1;
    return this.num;
  }
};
// method invocation. this is calc
// calc.increment(); // => 1
// calc.increment(); // => 2

//questions

//1
const object1 = {
  message: 'Hello, World!',
  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
};
// console.log(object.getMessage()); // -> 'Hello, World!',

//2
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet('Fluffy');
// console.log(cat.getName()); // What is logged? //  Fluffy
const { getName } = cat;
// console.log(getName());     // What is logged? // Fluffy

//3
var length = 4;
function callback() {
  console.log(this.length); // What is logged? // 4
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);