

function slowFn(num) {
  for (let i = 0; i <= num; i++) {
    if (i === num) {
      return i
    }
  }
}

const memoize = (fn) => {
  let cache = {}
  return (...args) => {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn(...args)
    cache[args] = result
    return result
  }
}

const memoizePractice = (fn) => {
  let cache = {}
  return (...args) => {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn(...args)
    cache[args] = result
    return result
  }
}

const fasterFn = memoizePractice(slowFn)

console.time("1")
console.log("fn", fasterFn(2000000))
console.timeEnd("1")

console.time('2')
console.log("fn", fasterFn(2000000))
console.timeEnd('2')

