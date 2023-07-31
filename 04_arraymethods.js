const friends = ["Shubham", "Rohit", "Kunal", "Jiten", "Mayank", "Sushant"];
const newLength = friends.push("Mayur"); //newLength will have new length of array. push() adds element at the end of an Array.

console.log(friends, newLength);

friends.unshift("Kiran"); // Adds element to the beginning of an Array. Also returns new length of an Array.
console.log(friends, friends.length);

const deletedElement = friends.pop(); // returns the removed element.
console.log(friends, deletedElement);

friends.shift();
console.log(friends); // Also returns removed element.

console.log(friends.indexOf("Mayank"));
console.log(friends.indexOf("Kiran")); // Will return -1 because Kiran element is not present in the Array.

console.log(friends.includes("Kunal")); // returns Boolean
console.log(friends.includes("Mayur")); // returns Boolean
