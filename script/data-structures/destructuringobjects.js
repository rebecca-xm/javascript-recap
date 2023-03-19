"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// To destructure objects we use the curly braces. Then, just like for
// arrays destructuring, we have to provide variables that exactly match the
// property names that we want to retrieve from the object.

const { name, openingHours, categories } = restaurant;
// Note: in objects, unline arrays, the order of the elements does not
// matter, which means we don't have to skip any element we don't want.
console.log(name, openingHours, categories);

//? What if we wanted the variable names to be different from the property names?

//* Default values
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// ^ this is a way to change the existing variable names with new ones
console.log(restaurantName, hours, tags);

// Just like for arrays destructuring, it can come in handy to have default
// values for objects destructuring as well.

const { menu = [], starterMenu: starters = [] } = restaurant;
// menu does not exist, so we'll get an empty array as default value
console.log(menu, starters);
// this is especially helpful when we don't have any hard-coded data

//* Mutating variables while destructuring objects.

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
// we cannot say const { a, b } because they are already declared up here
// we can also not do let { a, b } because that would create new variables
({ a, b } = obj);
// to mutate the initial values we have to wrap the destructuring assignment into parenthesis
console.log(a, b);

//* Nested objects

// const { fri } = openingHours;
// console.log(fri);
// we already know that the opening hours is an obect
// now we can further destructure that object
const {
  fri: { open, close },
} = openingHours;
// we use the colon and then again the exact property name of the inner object
console.log(open, close);

//* practical application
// many times in JavaScript we have functions with a lot of parameters
// then it can be hard to know their order for someone who's using it
// so instead of defining the parameters manually, we can just pass an object
// into the function as an argument and the function will immediately
// destructure that object.

const restaurant2 = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  orderDelivery: function ({ mainIndex = 0, starterIndex = 1, time = '20:00', address }) {
    // console.log(obj);
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant2.orderDelivery({
  time: "22:30",
  address: "Via Pippo, 8",
  mainIndex: 2,
  starterIndex: 2,
});
// here we're passing an object of options

restaurant2.orderDelivery({
  address: "Via Pippo, 8"
  // testing default values
});