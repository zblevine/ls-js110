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
  if all elements are numbers, sort largest to smallest
  else sort reverse alphabetically
return deep copy

reverse alphabetical sort:
  arguments: a, b
  returns: if a is BEFORE (less than) b in alpha, return 1 (desc)
  if a is AFTER (greater than) b, return -1
  else return 0
*/

function newSortedArray(arr) {
  let newArr = deepCopy(arr);
  return newArr.map(arr => sortArr(arr));
}

function sortArr(arr) {
  if (arr.every(ele => typeof ele === 'number')) {
    return arr.sort((a, b) => b - a);
  } else {
    return arr.sort((a, b) => reverseAlphaSort(a, b));
  }
}

function reverseAlphaSort(str1, str2) {
  if (str1 < str2) return 1;
  if (str1 > str2) return -1;
  return 0;
}

function deepCopy(arr) {
  return JSON.parse(JSON.stringify(arr));
}

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(newSortedArray(arr));
console.log(arr);