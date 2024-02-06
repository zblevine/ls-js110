/*
PE: want to sum up all ages of male elements of object
input is object with keys as names, values as nested object
nested object: keys age and gender, values int and str

D:
array of nested objects is helpful

A:
get array of nested objects
filter that array on gender male
sum up ages of filtered array
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

function sumAges(familyObj) {
  let nestedObjs = Object.values(familyObj);
  return nestedObjs.filter(obj => obj['gender'] === 'male')
    .reduce((acc, obj) => acc + obj['age'], 0);
}

console.log(sumAges(munsters));