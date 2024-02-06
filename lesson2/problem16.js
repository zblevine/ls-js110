/* eslint-disable max-len */
/*
PE
Idea: for each value in object, get color array if fruit, size string if vegetable
argument: obj with objects as values
returns: array, some elements strings some elements inner arrays

D
return array to hold color subarrays and size strings

A
Convert objects to array of objects objArr
Map each object in objArr to whatever helper mapObj returns on it
return mapped array

Helper mapInnerObj:
argument object, returns either array or string

algo:
if type is fruit, return colors with elements capitalized
  helper function capitalizeArrStrings helps with this
else, return size in uppercase

capitalizeArrStrings:
map each string to that string with first letter capitalized
*/

function mapInnerObj(innerObj) {
  if (innerObj['type'] === 'fruit') {
    return capitalizeArrStrings(innerObj['colors']);
  } else {
    return innerObj['size'].toUpperCase();
  }
}

function capitalizeArrStrings(stringArr) {
  return stringArr.map(str => str[0].toUpperCase() + str.slice(1));
}

function getColorSizeArray(outerObj) {
  let objArray = Object.values(outerObj);
  return objArray.map(mapInnerObj);
}

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

console.log(getColorSizeArray(obj));

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]