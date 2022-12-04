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

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
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
(({ a, b } = obj));
console.log(a, b);
