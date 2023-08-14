const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log("B737"[0]);
console.log("B737".length);
console.log(airline.length);

// String Methods

console.log(airline.indexOf("P")); // will return -1 if not found.
console.log(airline.lastIndexOf("P"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // (paramStart, paramEnd)

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the midde Seat");
  } else {
    console.log("You got lucky!");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Pawan")); // see in console
console.log(typeof new String("Pawan")); // object
