/*
PE
Want to create a valid UUID
No arguments, returns string (hex and dashes)
Each call should return a different uuid (randomly generated)
(8 char string)-(4 chars)-(4 chars)-(4 chars)-(12 chars)

DA
String interpolation will suffice
interp getHexString calls with dashes

helper method: getHexString
  input: string length
  start with empty string
  for each character up to length of string:
    generates random number between 0 and 15
    then converts 10-15 to a-f
*/

function getHexString(len) {
  let str = '';
  let alphabetChars = 'abcdef';
  for (let idx = 0; idx < len; idx++) {
    let randNum = Math.floor(Math.random() * 16);
    let newChar = randNum > 9 ? alphabetChars[randNum - 10] : randNum;
    str += newChar;
  }
  return str;
}

function uuid() {
  let str1 = getHexString(8);
  let str2 = getHexString(4);
  let str3 = getHexString(4);
  let str4 = getHexString(4);
  let str5 = getHexString(12);

  return `${str1}-${str2}-${str3}-${str4}-${str5}`;
}

console.log(uuid());
console.log(uuid());
console.log(uuid());