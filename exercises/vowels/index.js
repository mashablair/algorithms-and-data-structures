// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// // iterative solution
// function vowels(str) {
//   const checker = ["a", "e", "i", "u", "o"];
//// you can use a string too, but array is better
//   let counter = 0;

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       counter++;
//     }
//   }
//   return counter;
// }

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  // it returns arrays of matches or null
  // e.g. ["a", "a"] for 'masha'

  return matches ? matches.length : 0;
}

module.exports = vowels;
