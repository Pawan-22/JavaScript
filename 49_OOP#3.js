// ES6 Classes

// class expression
// const PersonCl = class {};

// class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // This method is stored in prototype & not on object itself
  calcAge() {
    console.log(2030 - this.birthYear);
  }

  get age() {
    console.log(2030 - this.birthYear);
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  // Static method : this hey method is not added to protoype property & thus cannot be inherited by object created by the class.
  static hey() {
    console.log("Hey there");
    console.log(this); // points to entire class
  }
}

const shivam = new PersonCl("Shivam Patel", 1997);
console.log(shivam);
shivam.calcAge();
shivam.age;
// shivam.hey(); // error
PersonCl.hey();

//////////////////////////////////////////////////////

// Setters & Getters

const account = {
  owner: "Shivam",
  movements: [100, 200, 5000, 1000],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest); // 1000
account.latest = 2000;
console.log(account.movements);

////////////////////////////////////////////////////

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2050 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const pawan = Object.create(PersonProto);
pawan.init("Pawan", 1997);
console.log(pawan);
pawan.calcAge();
