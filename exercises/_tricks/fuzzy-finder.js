// fuzzy finder

// // 1.
// function fuzzy_match(str, pattern) {
//   str = str.toLowerCase();
//   pattern = pattern.split(""); // ["s", "o", "p", "h", "i", "e"]
//   pattern = pattern.join(".*"); // s.*o.*p.*h.*i.*e
//   pattern = new RegExp(pattern); // /s.*o.*p.*h.*i.*e/
//   return pattern.test(str); // true or false
// }

// let result = fuzzy_match("masha", "ma");
// console.log(result);

// result = fuzzy_match("MASHA", "msha");
// console.log(result);

function fuzzy_match(str, pattern) {
  str = str.toLowerCase();
  pattern = pattern.split("").join("*");
  pattern = new RegExp(pattern);
  return pattern.test(str); // true/false
}

// 2. find sum inside array elems
const noSum = [4, 6, 7]; // Sum = 8
const yesSum = [1, 2, 4, 6]; // Sum = 8

// if array is NOT sorted
function hasPair(arr, sum) {
  const complimentaryArr = []; // [7]

  for (item of arr) {
    let complimentary = sum - item;

    // if complimentary exists in compArr
    if (complimentaryArr.includes(complimentary)) {
      let index = complimentaryArr.indexOf(complimentary);
      console.log("sum:", item, complimentary);
      return true;
    }

    complimentaryArr.push(complimentary);
    console.log(complimentaryArr);
  }

  return false;
}

// if arr is sorted
// function hasPair(arr, sum) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low < high) {
//     if (arr[low] + arr[high] === sum) {
//       console.log(arr[low], arr[high]);
//       return true;
//     }
//     low++;
//   }
//   return false;
// }

// let result = hasPair(noSum, 8);
// console.log(result);

result = hasPair(yesSum, 8);
console.log(result);

// // #3.
// function toRoman(num) {
//   var result = "";
//   var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

//   // loop over every element of our arrays
//   for (let i = 0; i < decimal.length; i++) {
//     console.log("decimal[i]", decimal[i]);
//     // try num until it won't fit anymomre
//     while (num % decimal[i] < num) {
//       console.log("num % decimal[i] < num:", num % decimal[i]);
//       // add the matching roman number to result string
//       result += roman[i];
//       console.log(num);
//       // remove decimal value of the roman number from our number
//       num -= decimal[i];
//       console.log(num);
//     }
//   }
//   return result;
// }

// let romanNum = toRoman(646);
// console.log(romanNum);

// #4.
// do 2 arrays contain a common number?
const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "j"];
const arr3 = ["z", "y", "a"];

// // using includes -- only 1 loop!
// function containCommonItem(arr1, arr2) {
//   for (let item of arr1) {
//     if (arr2.includes(item)) {
//       return item;
//     }
//   }
//   return false;
// }

// using hash table
function containCommonItem(arr1, arr2) {
  // loop through 1st array and create a hash table object
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[i]) {
      map[arr1[i]] = true;
    }
  }
  // loop through 2nd array and check if its item exists in this object
  for (let item of arr2) {
    if (map[item]) {
      console.log(map[item], item);
      return item;
    }
  }
  return false;
}

console.log(containCommonItem(arr1, arr2));
console.log(containCommonItem(arr1, arr3));
