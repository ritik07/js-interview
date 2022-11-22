function myPromiseAll(taskList) {
  //to store results 
  const results = [];

  //to track how many promises have completed
  let promisesCompleted = 0;

  // return new promise
  return new Promise((resolve, reject) => {

    taskList.forEach((promise, index) => {
      //if promise passes
      promise.then((val) => {
        //store its outcome and increment the count 
        results[index] = val;
        promisesCompleted += 1;

        //if all the promises are completed, 
        //resolve and return the result
        if (promisesCompleted === taskList.length) {
          resolve(results)
        }
      })
        //if any promise fails, reject.
        .catch(error => {
          reject(error)
        })
    })
  });
}


const myPromiseAll1 = (tasklist) => {
  const result = []
  let count = 0

  return new Promise((resolve, reject) => {
    tasklist.forEach((promise, index) => {
      //
      promise.then((value) => {
        result[index] = value
        count += 1
        if (count == tasklist.length) {
          resolve(result)
        }
      }).catch((err) => {
        reject(err)
      })
      //
    })
  })
}

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1 res")
  }, 4000);
})

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2 res")
  }, 3000);
})

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2 res")
  }, 6000);
})

let arrayOfPromise = [p1, p2, p3]

customPromiseAll(arrayOfPromise).then((resolvedAllPromise) => {
  console.log("resolvedAllPromise", resolvedAllPromise)
})

console.log("customPromiseAll",)

function customPromiseAll(promiseList) {
  let result = []
  let count = 0

  return new Promise((resolved, rejected) => {
    promiseList.forEach((promise, index) => {
      promise.then((vaue) => {
        result[index] = vaue
        count += 1

        if (count === promiseList.length) {
          resolved(result)
        }

      }).catch((error)=>{
        rejected(error)
      })
    })
  })
}