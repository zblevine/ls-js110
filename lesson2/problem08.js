/*
PE:
for each string array element in the below obj, output all vowels
assumption: each string gets its own line
assumption: y is a consonant
argument: the below object, output to console: nine strings in total

DA:
get array of all arrays here (obj values)
for each smaller array:
  for each string:
    convert string to char array
    filter char array on only vowels
    convert filtered array back to string
    output final string
*/

function logVowels(obj) {
  let objValues = Object.values(obj);
  let vowels = 'aeiou';
  objValues.forEach(arr => {
    arr.forEach(str => {
      let newStr = str.split('')
        .filter(char => vowels.includes(char))
        .join('');

      console.log(newStr);
    });
  });
}

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

logVowels(obj);