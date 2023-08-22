// Manually setting the value of 'this' keyword

const airIndia = {
  airline: "Air India",
  iataCode: "AI",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode} ${flightNum}`,
      name,
    });
  },
};

airIndia.book(969, "Pawan Patel");
airIndia.book(999, "Shubham Kamble");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = airIndia.book;
// book(25, 'Hello'); error because book is now a regular function and contains "this" keyword which points to undefined.

// Call Method
book.call(eurowings, 254, "Jiten Potil");
book.call(airIndia, 321, "Mayank Asthama");

// Apply Method
const flightData = [123, "MK"];
book.apply(eurowings, flightData);
book.apply(airIndia, flightData);

book.call(eurowings, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookAI = book.bind(airIndia);
bookEW(456, "Mr. X");
bookAI(456, "Mr. X");

const bookEW23 = book.bind(eurowings, 23); // called as partial application(arguments are already set.)
bookEW23("Mrs. Z");

// With Event Listeners
airIndia.planes = 300;
airIndia.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

console.log(airIndia);
console.log(eurowings);
// document.querySelector('.buy').addEventListener('click', airIndia.buyPlane); // 'this' points to the element in event handler functions, in this case button
// document.querySelector('.buy').addEventListener('click', airIndia.buyPlane.bind(airIndia));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Above same function in different way
const addTax1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax1(0.23);
console.log(addVAT2(200));
