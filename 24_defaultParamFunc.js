const booking1 = [];
const createbooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  booking1.push(booking);
};

createbooking("256");
createbooking("255", 10);
createbooking("255", undefined, 10); // skips default parameter

// Passing arguments Value vs. Reference

const flight = "Lh321";
const pawan = {
  name: "Pawan Patel",
  passport: 2561545313265,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "Lh767";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 2561545313265) {
    console.log("checked in");
  } else {
    console.log("Wrong Passport");
  }
};

checkIn(flight, pawan);
console.log(flight);
console.log(pawan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(pawan);
checkIn(flight, pawan);
