/*
PE
want to create new array of objects with all numbers +1
argument: array of objects
return: new array of objects
don't mutate original array!
console log of return should be all +1
then console log of orig array should be unchanged

DA
create deep copy of original array
for each object in deep copy:
  for each key in object:
    corresponding value +1
return deep copy
*/

function incrementOne(arr) {
  let newArr = deepCopy(arr);
  return newArr.map(obj => {
    Object.keys(obj).forEach(key => {
      obj[key] += 1;
    });
    return obj;
  });
}

function deepCopy(arr) {
  return JSON.parse(JSON.stringify(arr));
}

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(incrementOne(arr));
console.log(arr);