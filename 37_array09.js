// Ways of creating and filling Arrays

// Empty arrays + fill method
const x = new Array(7);
// x.fill(1);
x.fill(1, 3, 6);
console.log(x);

/*
fill method ==> 1st param is value to fill array
                2nd param is index to start filling array at
                3rd param is index tos stop filling array at
*/

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 5);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Array.from ==> 1st param is iterable object to convert to array
//                2nd param is map function to be called on each element

const newArr = Array.from([1, 2, 3, 4, 5], (el) => el * 100);
console.log(newArr);

const strArr = Array.from("JavaScript is Awesome");
console.log(strArr);
