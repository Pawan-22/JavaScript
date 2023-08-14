const airline = "TAP Air Portugal";

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// Fix captilization in name
const passenger = "paWaN";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

const nameCorrect = function (name) {
  //const nameString = String(name);
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
};

nameCorrect("shuBhAM");

// Comparing Email
const email = "hello@gmail.com";
const loginEmail = "  Hello@gmail.Com \n";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);
console.log(email === normalisedEmail);

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23";

console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate")); // this is called regular expression. g stands for global.

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("neo")); // true
console.log(plane.includes(320)); // true
console.log(plane.includes("A320")); // true
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the New Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife")) {
    console.log("Not allowed to Board");
  } else {
    console.log("Allowed to Board");
  }
};
checkBaggage("I have a laptop, some Food, and a pocket Knife");
checkBaggage("Socks, camera");
checkBaggage("Got some snacks and a gun for protection");
