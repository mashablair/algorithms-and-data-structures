// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   // clean up strings by using RegEx
//   stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

//   console.log(stringA);
//   console.log(stringB);

//   if (stringA.length !== stringB.length) {
//     return false;
//   }

//   // build 2 char maps
//   const obj1 = {};
//   const obj2 = {};

//   // loop through string A and stringB
//   function buildCharMap(str, obj) {
//     for (let char of str) {
//       if (char in obj) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }

//   buildCharMap(stringA, obj1);
//   buildCharMap(stringB, obj2);

//   console.log(obj1);
//   console.log(obj2);

//   // compare obj1 and obj2
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }

//   // compare charMaps!
//   for (let char in obj1) {
//     if (obj1[char] !== obj2[char]) {
//       return false;
//     }
//   }

//   // don't forget a return statement
//   return true;
// }

// easier solution!!
// it uses array.sort()
function anagrams(stringA, stringB) {
  return _cleanString(stringA) === _cleanString(stringB);
}

// helper func to clean up strings, turn them into array, sort and turn back into string
function _cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;
