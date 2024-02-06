/*
PE
need to sort arr ascending by sum of odd elements
arg + return both array of arrays

DA
helper function arrValue:
arg is array, returns integer
sums odd values

sort larger array by arrValue
*/

function sortSumOdd(arr) {
  return arr.sort((arr1, arr2) => arrValue(arr1) - arrValue(arr2));
}

function arrValue(arr) {
  return sumArr(arr.filter(ele => ele % 2));
}

function sumArr(arr) {
  return arr.reduce((acc, ele) => acc + ele, 0);
}

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
console.log(sortSumOdd(arr));