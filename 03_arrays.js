"use strict";

const friends = [
  "Shubham",
  "Rohit",
  "Kunal",
  "Jiten",
  "Mayank",
  "Mayur",
  "Sushant",
];
console.log(friends);

const years = new Array(2020, 2021, 2022, 2023);
console.log(years);

console.log(friends[2]);
console.log(friends[4]);
console.log(years[3]);

console.log(years.length);
console.log(friends[friends.length - 1]); // accesses last element.
console.log(years[years.length - 2]); // accesses second to last element.

const pawan = ["Pawan", "Patel", 2023 - 1997, 1997, "Student", friends, years];
console.log(pawan);
console.log(typeof pawan); // will return object

const ageCalc = (age) => {
  return 2023 - age;
};

const years1 = [2020, 2021, 2022, 2023];
console.log(ageCalc(years1[0]));
