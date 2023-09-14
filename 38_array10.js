// Array practice

// convert string to title case

const convertTitleCase = function (title) {
  const exceptions = ["a", "the", "an", "but", "or", "on", "in", "with", "and"];

  const convertedString = title
    .toLowerCase()
    .split(" ")
    .map((str) =>
      exceptions.includes(str) ? str : str[0].toUpperCase() + str.slice(1)
    )
    .join(" ");

  return convertedString[0].toUpperCase() + convertedString.slice(1);
};

console.log(convertTitleCase("This is A string"));
console.log(convertTitleCase("javaScript is AweSOme"));
console.log(convertTitleCase("and here we go...."));
