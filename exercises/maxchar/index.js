// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = 0;
  let biggest;
  for (let char of str) {
    if (char in obj) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
    if (obj[char] > max) {
      max = obj[char];
      biggest = char;
    }
  }

  return biggest;
}

module.exports = maxChar;
