/*
PE
Want to convert array of two-element arrays (k/v pairs?)
into object with corresponding keys and values
Assumption: without using Object.fromEntries

D
Return object

Algo
Can return whatever is reduced by adding k/v pair to object at each step
Starting with empty object
*/

function arrToObject(arr) {
  return arr.reduce((acc, ele) => {
    let [key, value] = ele;
    acc[key] = value;
    return acc;
  }, {});
}

// eslint-disable-next-line quote-props
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

console.log(arrToObject(arr));

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }