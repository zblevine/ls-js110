/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
// Implement function that finds all fibonacci slices in a given array of integers. A Fibonacci slice is a sequence where every number after the first two is the sum of the two preceding ones. The minimum length is 3. -- Zach

/*
PE
Slice has at least 3 numbers
Input: array, output: array of arrays
Array: non-decreasing in test cases

DA
Data structure: array of arrays

Can do this recursively

algo(arr):
  if array length = 3:
    if ele 1 + ele 2 = ele 3 return [arr]
    else return []
  if last ele is sum of prev 2:
    oldFiboSlices = call algo on array minus last element
    add last three elements
    for each element that has same last two: copy, add last element, push to oldFiboSlices
    return oldFiboSlices
*/

function findFibonacciSlices(arr) {
  if (arr.length === 3) {
    if (arr[0] + arr[1] === arr[2]) return [arr];
    return [];
  }

  let oldFiboSlices = findFibonacciSlices(arr.slice(0, arr.length - 1));

  if (arr[arr.length - 1] === arr[arr.length - 2] + arr[arr.length - 3]) {
    let relevantSlices = oldFiboSlices.filter(ele => {
      return (ele[ele.length - 2] === arr[arr.length - 3]) && (ele[ele.length - 1] === arr[arr.length - 2]);
    });
    relevantSlices.forEach(ele => {
      let newEle = ele.slice();
      newEle.push(arr[arr.length - 1]);
      oldFiboSlices.push(newEle);
    });
    oldFiboSlices.push([arr[arr.length - 3], arr[arr.length - 2], arr[arr.length - 1]]);
  }

  return oldFiboSlices;
}

// Test cases
console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2], [1, 1, 2, 3], [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3], [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]
console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ], [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]
console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ], [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]
console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16]));  // [[2, 4, 6], [2, 4, 6, 10], [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, 16], [6, 10, 16]]
console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []
