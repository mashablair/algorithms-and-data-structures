// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   if (n === 0) {
//     return 0;
//   }

//   let str = n.toString();
//   let reversed = "";
//   for (char of str) {
//     reversed = char + reversed;
//   }

//   reversed = parseInt(reversed);
//   if (n < 0) {
//     return -reversed;
//   } else {
//     return reversed;
//   }
// }

// // using array reverse
// function reverseInt(n) {
//   if (n === 0) {
//     return 0;
//   }

//   const reverse = parseInt(
//     n
//       .toString()
//       .split("")
//       .reverse()
//       .join("")
//   );

//   if (n < 0) {
//     return reverse * -1;
//   } else {
//     return reverse;
//   }
// }

function reverseInt(n) {
  if (n === 0) {
    return 0;
  }

  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  // Math.sign(n) will return -1 if n < 0
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
