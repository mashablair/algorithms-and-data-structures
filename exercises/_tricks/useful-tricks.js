// 1.
// filter array for unique values
const arr = ["a", "b", "a", 1, 1];
let unique = arr.filter((item, pos) => {
  return arr.indexOf(item) === pos;
});

console.log("unique with filter", unique);

// shorter way to filter array for unique
unique = [...new Set(arr)];
console.log("unique with Set", unique);
// but only works w/ primitive types: undefined, null, boolean, string and number

// 2.
// cache array length in loops
for (let i = 0, length = arr.length; i < length; i++) {
  console.log("i in arr:", i);
}

// 3.
// Ternary operators
let x = 200;

let result = x > 100 ? "Over 100" : "Less than 100";
console.log("result:", result);

result =
  x > 100 ? (x > 200 ? "Over 200" : "Between 100 and 200") : "Less than 100";
console.log("result:", result);

// 4
// Short-circuit evals
let one = null,
  two = null,
  three = 3;

result = one && two && three;
console.log("short-circuit evals w/ &&:", result);
// if at least 1 is falsy, result is false (--> null)

result = one || two || three;
console.log("short-circuit evals w/ ||:", result);
// if at least 1 is truthy, result is true (--> 3)

// 5.
// return length of a var, but you don't know var's type
// as long as it has a 'length' property (can be arr or str)
function returnLength(someVar) {
  return (someVar || []).length;
}

let length = returnLength(arr);
console.log("length of arr:", length);

const str = "masha";
length = returnLength(str);
console.log("length of str:", length);
