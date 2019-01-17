// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let s = Math.abs(n).toString();
  let reversedNum = parseInt(s.split("").reverse().join(""));
  return reversedNum* Math.sign(n);
}

// function reverseInt(n) {
//   let s = Math.abs(n).toString();
//   let reversedNum = parseInt(s.split("").reverse().join(""));
//   return reversedNum* Math.sign(n);
// }

module.exports = reverseInt;
