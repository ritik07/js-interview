//--------currying---------//
// pattern 1

function sum(a) {
    return function (b) {
        return (c) => {
            return (d) => {
                return (e) => {
                    return a + b + c + d + e
                }
            }
        }
    }
}

// console.log(sum(1)(4)(66)(35)(0));


// pattern 2  add(1)(2)(3)…(n)()
function sum2(firstNo) {
    let count = firstNo;
    return function sumUp(secondNo) {
        if (secondNo === undefined) {
            return count
        } else {
            count += secondNo
            return sumUp
        }
    }
}

// console.log('text', sum2(2)(3)(1)(8)())

// patten 3  sum(1,2)(3,4)

function sum3(a, b) {
    return function sumUp(c, d) {
        return a + b + c + d
    }
}

// console.log("data", sum3(1,2)(3,4))

// patten 4  add(1,2..n)(5,6…n)…(n)()

// arr.reduce(callback(accumulator, currentValue), initialValue)
// reduce() executes the given function for each value from left to right.
// reduce() does not change the original array.
// It is almost always safer to provide initialValue.

function sum4(...args) {
    let a = args.reduce((a, b) => a + b, 0)
    return function(...args){
      let b = args.reduce((a, b) => a + b, 0)
      if(b){
        return sum4(a+b)
      }
      return a
    }
}

console.log(sum4(2, 3, 4)(1, 2)())
