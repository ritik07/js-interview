function myPromise(executor) {
  //
  let onResolve;
  let onReject;
  //
  let isFulFilled = false
  let isRejected = false
  let isCalled = false
  // 
  let value
  let error

  //
  function resolve(val) {
    value = val
    isFulFilled = true
    if (!isCalled && typeof onResolve === 'function') {
      onResolve(val)
      isCalled = true
    }
  }

  //
  function reject(err) {
    isRejected = true
    error = err
    if (!isCalled && typeof onReject === 'function') {
      onReject(err)
      isCalled = true
    }
  }

  //then
  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFulFilled) {
      onResolve(value)
      isCalled = true
    }
    return this;
  }

  //catch
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error)
      isCalled = true
    }
    return this;
  }

  executor(resolve, reject);
}

function myPromisePractice(executor) {
  //
  let value
  let error

  //
  let isFulFilled = false;
  let isCalled = false;
  let isRejected = false;

  //
  let onResolve
  let onReject

  //resolve
  function resolve(val) {
    value = val
    isFulFilled = true
    if (!isCalled && typeof onResolve === 'function') {
      onResolve(val)
      isCalled = true
    }
  }

  //reject
  function reject(err) {
    error = err
    isFulFilled = true
    if (!isCalled && typeof onReject === 'function') {
      onReject(err)
      isFulFilled = true
    }
  }

  //then
  this.then = function (thenHandler) {
    onResolve = thenHandler
    if (!isCalled && isFulFilled) {
      onResolve(value)
      isCalled = true
    }
    return this
  }

  //catch
  this.catch = function (catchHandler) {
    onReject = catchHandler
    if (!isCalled && isRejected) {
      onReject(error)
      isCalled = true
    }
    return this
  }

  executor(resolve, reject)
}


const p1 = new myPromisePractice((resolve, reject) => {
  setTimeout(() => {
    resolve('yeesssss')
  }, 500);
})


const p2 = new myPromisePractice((resolve, reject) => {
  setTimeout(() => {
    resolve('p2300')
  }, 1000);
})

let promiseTask = [p1, p2]

p1.then((value) => {
  console.log(value)
})

// promise.all

function PromiseAll(promiseList) {
  let result = []
  let count = 0

  return new myPromisePractice((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = value
        count++

        if (count === promiseList.length) {
          resolve(result)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })
}

PromiseAll(promiseTask).then((result) => {
  console.log(result)
})


function practicepromise(executor) {
  //
  let value
  let error
  //
  let onResolve
  let onReject
  //
  let isCalled = false
  let isFulFilled = false
  let isRejected = false


  //
  function resolve(val) {
    value = val
    isFulFilled = true
    if (!isCalled && typeof onResolve === 'function') {
      onResolve(val)
      isCalled = true
    }
  }

  //
  function reject(err) {
    error = err
    isFulFilled = true
    if (!isCalled && typeof onReject === 'function') {
      onReject(val)
      isCalled = true
    }
  }

  //
  this.then = function (thenHandler) {
    onResolve = thenHandler
    if (!isCalled && isFulFilled) {
      onResolve(value)
      isCalled = true
    }
    return this
  }

  //
  this.catch = function (catchHandler) {
    onReject = catchHandler
    if (!isCalled && isRejected) {
      onReject(error)
      isCalled = true
    }
    return this
  }
  executor(resolve, reject)
}

function promiseall(promiseList) {
  let result = []
  let count = 0

  return new practicepromise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = value
        count += 1
        if (count === promiseList.length) {
          resolve(result)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })

}

// let data = [1, 2, 3, 4, 5, 6, 6]
// let dataSet = new Set(data)
// dataSet.add(33)
// dataSet.add(33)
// dataSet.add(33)

// for (const item of dataSet) {
//   console.log("add", dataSet)
// }