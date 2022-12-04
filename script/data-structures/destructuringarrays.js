"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring is a JavaScript ES6 feature and it's basically a way
// of unpacking values from an array or an object into separate variables.
// In other words, destructuring is to break a complex structure down
// into a smaller data structure like a variable.
// For arrays, we use destructuring to retrieve elements from the array
// and store them into variables in a very easy way.

const num = [2, 3, 4];

// traditional way of retrieving elements
const a = num[0];
const b = num[1];
const c = num[2];

// with destructuring
const [x, y, z] = num;
// ^ looks like an array, but it's just the destructuring assignment
console.log(x, y, z);

// The original array is not affected by the destructuring.

const [first, second] = restaurant.categories;
// the variables follow the order in which elements are listed in the array
console.log(first, second);

let [main, _, secondary] = restaurant.categories;
// to skip elements, we leave a placeholder in the destructuring operator
console.log(main, secondary);
// this way we avoid creating variables for values we don't need

//? What if we wanted to switch them?

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Another trick with destructuring is that we can have a function
// returning an array and then we can immediately destruct the result
// into different variables.

const [starter, mainCourse] = restaurant.order(2, 0);
// receives two return values from a function
console.log(starter, mainCourse);

//? What if we have a nested array?

const nested = [2, 3, [4, 5]];
const [i, , j] = nested;
console.log(i, j);

const [k, , [l, m]] = nested;
console.log(k, l, m);

// We can also set default values for the variables when we are extracting
// them. This can be useful when we don't know the length of the array.

// const [p, q, r] = [8, 9]
// let's pretend we don't know the real length of the array
const [p = 1, q = 1, r = 1] = [8, 9];
// this is extra useful when we get data from an API
console.log(p, q, r);
