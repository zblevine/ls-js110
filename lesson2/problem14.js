/*
PE
Want to take a nested array, keep nesting structure
But only keep multiples of 3
argument: array of arrays, return: array of arrays

DA
get arr, with each inner array element mapped to that element with
only multiples of 3
*/

function keepMultOfThree(arr) {
  return arr.map(ele => ele.filter(num => num % 3 === 0));
}

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
console.log(keepMultOfThree(arr));