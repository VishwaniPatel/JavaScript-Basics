// use of let and const
let myName = "Vishwani";
console.log(myName);

myName = "Vini";
console.log(myName);

// use of let and const
const pie = 3.14;
console.log(pie);

// It gives error while redeclaring
// pie = 3.147;
// console.log(pie);

// Use of function
function printMyName(name) {
  console.log("Hey my name is " + name);
}

printMyName("Vishwani");

// Use of arrow function
const printName = (name) => {
  console.log("Hey my name is " + name);
};
printName("Vishwani");

const printNameHobby = (name, hobby) => {
  console.log("Hey my name is " + name + " I like to do " + hobby);
};
printNameHobby("Vishwani", "art");

const multiply = (number) => {
  return number * 2;
};
console.log(multiply(2));

const multiplyNumber = (number) => number * 2;
console.log(multiplyNumber(4));

// Use of class
class Person {
  constructor() {
    this.name = "Vishwani";
  }
  displayMyName() {
    console.log("Display name using class: " + this.name);
  }
}

const person = new Person();
person.displayMyName();

// Inheritance
class Human {
  constructor() {
    this.gender = "Female";
  }
  printGender() {
    console.log(this.gender);
  }
}

class PersonalInfo extends Human {
  constructor() {
    super();
    this.name = "Vishwani";
  }
  printInfo() {
    console.log(this.name);
  }
}

const personInfo = new PersonalInfo();
personInfo.printGender();
personInfo.printInfo();

// properties and method syntax used in ES7
class PersonalData {
  gender = "Female";
  printGender = () => {
    console.log(this.gender);
  };
}

// Spread operator
const numbers = [1, 2, 3];
// const newNumbers = [numbers, 4];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const Vehicle = {
  type: "Car",
};
const newVehicle = {
  ...Vehicle,
  color: "red",
};
console.log(newVehicle);

// rest operator
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));

// Destructuring array
const num = [1, 2, 3];
[num1, num3] = num;
console.log(num1, num3);

// Referencing
const data = {
  value: 20,
};
// const secondValue = data;
// create copy
const secondValue = {
  ...data,
};

data.value = 30;
console.log(secondValue);

// map method
const doubleNumbers = num.map((num) => {
  return num * 2;
});
console.log(num);
console.log(doubleNumbers);
