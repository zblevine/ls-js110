/*
PE
Want to make deep copy of munsters object
In addition, inner objects must be frozen
Want to check if inner obj is alterable

algo
Can deep copy munsters with JSON trick
Then freeze each inner object in deep copy
*/

function deepCopyFreeze(obj) {
  let deepCopy = JSON.parse(JSON.stringify(obj));
  Object.keys(deepCopy).forEach(key => {
    Object.freeze(deepCopy[key]);
  });
  return deepCopy;
}

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let newMunsters = deepCopyFreeze(munsters);
console.log(newMunsters);
newMunsters.herman.age = 33;
console.log(newMunsters);
munsters.herman.age = 33;
console.log(munsters);