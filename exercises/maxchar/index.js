// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let obj = {};
//   let max = 0;
//   let biggest;
//   for (let char of str) {
//     if (char in obj) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//     if (obj[char] > max) {
//       max = obj[char];
//       biggest = char;
//     }
//   }

//   return biggest;
// }

// function maxChar(str) {
//   const obj = {}; // this is a self-made charMap
//   let max = 0;
//   let biggest;

//   for (let char of str) {
//     char in obj ? obj[char]++ : (obj[char] = 1);

//     if (obj[char] > max) {
//       max = obj[char];
//       biggest = char;
//     }
//   }

//   return biggest;
// }

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  // iterate over string or array
  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  console.log(charMap);

  // iterate over object
  // char is a key, not value
  for (let char in charMap) {
    console.log(char, charMap[char]); // key, value
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
