/*
PE
Need to create deep copy of argument array without JSON methods
argument: object with keys and array values
return: deep copy of that object
if we modify new arrays, original should not be affected!
shallow copies of array values is OK in this case

D
New object to hold our deep copy

A
Create new object (newObj)
For each key in old object:
  create empty array (arrValue)
  add copy of array
  assign arrValue to key in newObj
return newObj
*/

function deepCopy(obj) {
  let newObj = {};
  Object.keys(obj).forEach(key => {
    newObj[key] = obj[key].slice();
  });
  return newObj;
}

const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

let newTruth = deepCopy(truthiness);
console.log(newTruth);
newTruth['truthy'].push('and that includes empty arrays');
console.log(newTruth);
console.log(truthiness);