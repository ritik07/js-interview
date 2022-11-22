let array = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]

let outputArr = array[0].map((item, colIndex) => array.map((row) => row[colIndex]))
console.log(outputArr)