// In JavaScript we have another data structure beside arrays: objects.
// In objects, we actually define key-value pairs, which is something
// we cannot do with arrays.

// object literal syntax
const about = {
  firstName: "Rebecca",
  lastName: "Mollica",
  age: 2022 - 1991,
  job: "developer",
  pets: ["Pipo", "Pippo", "Benny", "Ercole"],
};

// Just like arrays, we use objects to group together different variables.
// The big difference between the two is that in objects the order of
// these values does not matter at all when we want to retrieve them.
// This means we should use arrays for more ordered data and objects
// for more unstructured data. How do we get data from an object then?

console.log(about); // properties will likely be ordered A-Z

// The first way of getting a property from an object is by using
//* the dot notation.

console.log(about.lastName);
// this dot here is an operator which will go to that object and then
// retrieve the property with the name we specified.

//* The same thing can be done using the brackets notation.

console.log(about["pets"]);
// the key will be specified as a string here.

// The main difference is that in the brackets notation we can put
// any expression that we'd like, we can compute a value from some
// operation, since an operation is basically an expression, so
// something that produces a value.

const nameKey = "Name";
console.log(about["first" + nameKey]); // firstName via string concatenation
console.log(about["last" + nameKey]); // lastName via string concatenation

// const getToKnow = prompt(
//   "What do you want to know about me? Choose between firstName, lastName, age, job and pets."
// );
// // console.log(getToKnow)
// console.log(about[getToKnow]);
// // undefined will be rendered for properties that do not exists

// if (about[getToKnow]) {
//   console.log(about[getToKnow]);
// } else {
//   console.log(
//     "You either misspelled or picked a not listed choice. Try again."
//   );
// }

// Now, how to add properties to an existing object?
about.location = "Italy";
about["linkedIn"] = "rebecca-mollica";
console.log(about);

// Challenge
// "Rebecca has 4 pets, and one of them is called Pipo" but make it dynamic.

const challenge = `${about.firstName} has ${about.pets.length} pets, and one of them is called ${about.pets[0]}.`;
console.log(challenge);

//* OBJECT METHODS

// As we learned, functions are really just another type of value,
// which means we can create a key-value pair in which the value
// is a function. So, we can add functions to objects.

const about2 = {
  firstName: "Rebecca",
  lastName: "Mollica",
  birthYear: 1991,
  job: "developer",
  pets: ["Pipo", "Pippo", "Benny", "Ercole"],
  hasDriverLicense: true,
  //   calcAge: function (birthYear) {
  //     return 2022 - birthYear;
  //   },

  //   calcAge: function () {
  //     return 2022 - this.birthYear;
  //     // this refers to the current object
  //     // it helps us respect the DRY principle
  //   },
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    // we can also use the this keyword to store a new property
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} yo ${
      this.job
    }, and she has ${
      this.hasDriverLicense ? "a" : "no"
    } driver license.`;
  },
};

// console.log(about2.calcAge(1991))
// console.log(about2['calcAge'](1991));
console.log(about2.calcAge());
console.log(about2.age);
console.log(about2.age);
console.log(about2.age);
console.log(about2.age);
// to avoid unnecessary and heavy computation load
// by calling calcAge just once

// Challenge
// 'Rebecca is a 31 yo developer, and she has a driver license' but make it dynamic.

// const challenge2 = `${about2.firstName} is a ${about2.calcAge()} yo ${
//   about2.job
// }, and she has ${about2.hasDriverLicense ? "a" : "no"} driver license.`;
// console.log(challenge2);

console.log(about2.getSummary())