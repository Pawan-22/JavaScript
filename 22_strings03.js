console.log("a+very+nice+string".split("+")); // stores elements in an array
console.log("Pawan Patel".split(" "));

const [firstName, lastName] = "Pawan Patel".split(" ");
//console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const captilizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
captilizeName("pawan dilip kumar patel");
captilizeName("shubham kamble");

// Padding
const message = "Go to gate 23";
console.log(message.padStart(25, "+"));
console.log(message.padStart(25, "+").padEnd(35, "+"));

const maskCreditCard = function (number) {
  const str = number + ""; // converts numnber to string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(256502445052565));
console.log(maskCreditCard("9985152465323654555"));

// Repeat
const message2 = "Bad weather... All departures delayed...";
console.log(message2.repeat(5));

console.log(message2.split("").reverse().join("")); // reverses a string
