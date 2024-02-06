/*
PE
Want to filter input array to get objects that have only even numbers
Argument: array of objects, return: array of objects

DA
Filter input array on isEven function

isEven:
input object, returns true/false
if every number in every value of input obj is even, true
else false
*/

function isEven(obj) {
  return Object.values(obj)
    .every(arr => arr.every(num => num % 2 === 0));
}

function filterOnEven(arr) {
  return arr.filter(isEven);
}

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

console.log(filterOnEven(arr));
