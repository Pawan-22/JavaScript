"use strict";

const pawan = {
  firstName: "Pawan",
  lastName: "Patel",
  birthYear: 1997,
  friends: ["Shubham", "Kiran"],
  device: "Iphone XS Max",
  hasDriversLicense: false,
  occupation: "Student",
  // calcAge: function (birthYear) {
  //     return 2023 - birthYear;
  // }
  // calcAge: function () {
  //     console.log(this.birthYear);
  //     return 2023 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.occupation
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(pawan); // age will not be added to object because function call is not made.
console.log(pawan.calcAge());
console.log(pawan["age"]);
console.log(pawan); // age gets added to object because function call is made.
// console.log(pawan['calcAge'](1997));

// Challenge
// Pawan is 26 years old student who has a drivers has Drivers License.
console.log(pawan.getSummary());
