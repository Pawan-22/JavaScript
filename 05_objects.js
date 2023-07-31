"use strict";

const pawan = {
  firstName: "Pawan",
  lastName: "Patel",
  age: 25,
  friends: ["Shubham", "Kiran"],
  device: "Iphone XS Max",
};
console.log(pawan.lastName); // dot notation
console.log(pawan["device"]); // bracket notation

const nameKey = "Name";
console.log(pawan["first" + nameKey]);

pawan.location = "Maharashtra";
pawan["email"] = "pawanptl34@gmail.com";
console.log(pawan);

// Pawan has 2 friends and his best friend is Kiran
console.log(
  `${pawan.firstName} has ${pawan.friends.length} friends and his best friend is ${pawan["friends"][1]}`
);
