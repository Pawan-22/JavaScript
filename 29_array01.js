// Slice (does not change the original array)
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(1));

console.log(arr.slice(1, 3));

console.log(arr.slice(-2));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log(arr);

console.log("-----splice-----");

// Splice (changes the original array)
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);

console.log(arr);

// Reverse (changes the original array)
const arr2 = ["n", "a", "w", "a", "p"];
console.log(arr2.reverse());
console.log(arr2);

// Concat
arr = ["a", "b", "c", "d", "e"];
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join("-"));

// The New At method

const arr1 = [24, 15, 445];
console.log(arr1[0]);
console.log(arr1.at(1));

// To get last element of array
console.log(arr1[arr1.length - 1]);
console.log(arr1.slice(-1)[0]);

console.log(arr1.at(-1));

console.log("pawan".at(0)); // also works on strings
