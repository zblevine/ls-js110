/* eslint-disable max-len */
/*
Understanding the Problem
-input: integer, output: integer
-Thinking of some kind of 3D lego structure
-Each upper block kind of sits on four lower blocks (?)
-Kind of a pyramidal structure
-Optimizing for height first (i.e. each number of blocks to start with has one possible tallest height)
-Good catch from LS notes: to optimize for height, each upper block supported by exactly four lower blocks
-Something I didn't say explicitly: in a "perfect pyramid", highest level has one block, second has four, third has nine, etc (since in optimal structure each level is a nxn square for some n)

Examples and Test Cases
-Yes, these sure are consistent with the last bullet point above

Data Structures
-I don't think I need any special data structures if I am just summing squares

Algorithm

function calculateLeftoverBlocks(num):
  Define level variable, initialize to 1
  Define totalBlocks variable, initialize to 0
  while true:
    if totalBlocks + level**2 > num, break
    totalBlocks += level**2
    level += 1

  return num - totalBlocks
*/

function calculateLeftoverBlocks(num) {
  let level = 1;
  let totalBlocks = 0;

  while (true) {
    if (totalBlocks + (level ** 2) > num) break;
    totalBlocks += (level ** 2);
    level++;
  }

  return num - totalBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true