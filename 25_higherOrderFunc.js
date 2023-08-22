const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is awesome", upperFirstWord);
transformer("JavaScript is awesome", oneWord);

// Function returning another function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greet1 = greet("Hello");
greet1("Pawan");

greet("Hey")("Pawan");

const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};
greet2("Hey")("You");

// Above arrow function can also be written as
const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet3("Hey")("You there");
