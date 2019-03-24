// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  let count = 1;
  while (count <= n) {
    if (count % 3 === 0 && count % 5 === 0) {
      // or just 'if (count % 15 === 0)'
      console.log("fizzbuzz");
    } else if (count % 3 === 0) {
      console.log("fizz");
    } else if (count % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(count);
    }
    count++;
  }
}

module.exports = fizzBuzz;
