// Write your code here
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

/*
 Solution 1 - find the maximum and minumum in one pass
    Worst/Best case - O(m * n) where m is the number of arrays and n is the length of the array
*/

// Best/Worst Case - O(n)
let difference = (arr) => {
  let min = arr[0]
  let max = arr[0]

  for(let i = 1; i < arr.length; i++){
    if(min > arr[i]) { min = arr[i] }
    if(max < arr[i]) { max = arr[i] }
  }

  return max - min
}


// To add this together, O(m*n + m) which translates to O(m*n)
let checkSum = data
  .map((arr) => { return difference(arr) }) // Since this O(n) operation happens m times it is said to be O(m*n)
  .reduce((i,e) => i + e)                   // O(m) operation as well
console.log(`checksum = ${checkSum}` );



/* Solution 2 - Same runtime as before but optimized speed
    Worst/Best case - O(m*n)
*/

let checkSum2 = data
  .map((arr) => { return Math.max(...arr) - Math.min(...arr) })
  .reduce((i,e) => i + e)
console.log(`checksum = ${checkSum2}` );


/* Solution 3 - sorts the array and then computes differences
  Worst/Best case - O(m * nlog(n))
*/

let sort = data
  .map((arr) => arr.sort((a,b) => { return a - b })) // Since we do this operation m times and sort is O(n*log(n)) this is O(m * nlog(n))
  .map((arr) => arr[arr.length - 1] - arr[0]) // This is constant time O(1)
  .reduce((i,e) => i + e) // This is O(m)

console.log(`checksum = ${sort}`)
