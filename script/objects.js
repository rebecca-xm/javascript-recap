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
