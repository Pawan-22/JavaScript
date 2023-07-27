"use strict";

const ageCalculator = (birthYear) => 2023 - birthYear;
const age1 = ageCalculator(1997);
console.log(age1);

const ageUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
};

const age2 = ageUntilRetirement(1997, "Pawan");
console.log(age2);

//////////////////////////////////////////////////////////////

const ageCalc = (age) => {
  return 2023 - age;
};

const ageUntilRetirement1 = (birthYear, firstName) => {
  const age = ageCalc(birthYear);
  const retirement = 60 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired`;
  }
};

const age4 = ageUntilRetirement1(1997, "Pawan");
const age5 = ageUntilRetirement1(1961, "Dad");
console.log(age4);
console.log(age5);
