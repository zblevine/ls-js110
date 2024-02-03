let arr = ['10', '11', '9', '7', '8'];

/*
idea:
sort descending by:
number representation of string
helper function: string compare
*/

function stringCompare(a, b) {
  return parseInt(b, 10) - parseInt(a, 10);
}

console.log(arr.sort(stringCompare));