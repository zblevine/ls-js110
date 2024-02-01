/* eslint-disable max-len */
/*
P
-input: array, output: array
-order by number of adjacent consonants, tie goes to orig order in input array
-y and w are consonants (even when y is a vowel sound)
-question: "shrill" has 3, or 5? i.e. do multiple groups each count?
-multiple words lol
-no newline chars / other whitespace?

E
-looks like in descending order
-looks like max adjacent group, not sum of groups (else would just be number of total consonants)

D
-input, output array

A
function sortStringsByConsonants(list):
  sort all strings with comparator stringCompare (descending)

helper function stringCompare(str1, str2):
  return maxAdjConsonants(str2) - maxAdjConsonants(str1)

helper function maxAdjConsonants(str):
  remove all spaces from str
  set maxAdj = 0, currAdj = 0
  for each char in string:
    if char is vowel currAdj = 0, continue
    currAdj++
    if currAdj > maxAdj then maxAdj = currAdj
  return maxAdj
*/

function sortStringsByConsonants(list) {
  return list.sort(stringCompare);
}

function stringCompare(str1, str2) {
  return maxAdjConsonants(str2) - maxAdjConsonants(str1);
}

function maxAdjConsonants(str) {
  let newStr = str.split(' ').join('');
  let maxAdj = 0;
  let currAdj = 0;
  let vowels = 'aeiou';
  // eslint-disable-next-line id-length
  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      if (currAdj > maxAdj) {
        maxAdj = currAdj;
      }
      currAdj = 0;
      continue;
    }

    currAdj++;
  }

  if (currAdj > maxAdj) {
    maxAdj = currAdj;
  }
  return Math.max(maxAdj, 1);
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']