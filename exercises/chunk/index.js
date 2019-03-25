// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//// my solution
// function chunk(array, size) {
//   let newArray = [];

//   while (array.length > 0) {
//     let removed = array.splice(0, size);
//     newArray.push(removed);

//     console.log(array);
//     console.log(newArray);
//   }
//   return newArray;
// }

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

function chunk(array, size) {
  const chunked = [];
  let i = 0;

  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }

  return chunked;
}

module.exports = chunk;
