function selectFruit(obj) {
  let fruitEntries = Object.entries(obj).filter(entry => entry[1] === 'Fruit');
  return Object.fromEntries(fruitEntries);
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

function doubleOddIndices(arr) {
  return arr.map((val, idx) => {
    if (idx % 2) return val * 2;
    return val;
  });
}

console.log(doubleOddIndices([1, 3, 4, 5, 2])); //[1, 6, 4, 10, 2]