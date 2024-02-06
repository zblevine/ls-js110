/*
PE: for each person in munsters, need to interpolate string with:
(Name) is a (age)-year-old (gender).
We could say for each key/value pair:
arguments: key and inner object
return: properly formatted string

DA:
get array of K/V pairs
for each KV pair:
  extract name from key, age and gender from value obj
  print string with capitalized name, age and gender

helper capitalizeName:
  argument and return val both strings
  capitalize first character of argument, leave rest of string as is
*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

function getFormattedString(keyValue) {
  let name = capitalizeName(keyValue[0]);
  let age = keyValue[1]['age'];
  let gender = keyValue[1]['gender'];
  return `${name} is a ${age}-year-old ${gender}.`;
}

function capitalizeName(str) {
  return str[0].toUpperCase() + str.slice(1);
}

Object.entries(munsters).forEach(kv => {
  console.log(getFormattedString(kv));
});