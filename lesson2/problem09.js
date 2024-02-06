/*
PE
Want to take an array of arrays and return a new array,
with each subarray ordered ascending
argument: array of arrays
return: new array of arrays
should not mutate original array!

DA
create deep copy of input array
for each subarray in deep copy:
  if all elements are numbers, sort smallest to largest
  else sort alphabetically
return deep copy
*/

function newSortedArray(arr) {
  let newArr = deepCopy(arr);
  return newArr.map(arr => sortArr(arr));
}

function sortArr(arr) {
  if (arr.every(ele => typeof ele === 'number')) {
    return arr.sort((a, b) => a - b);
  } else {
    return arr.sort();
  }
}

function deepCopy(arr) {
  return JSON.parse(JSON.stringify(arr));
}

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(newSortedArray(arr));
console.log(arr);