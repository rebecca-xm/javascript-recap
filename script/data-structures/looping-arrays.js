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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const dish of menu) console.log(dish);
// This for-of loop will automatically loop over the entire array
// and each iteration will give access to the current array element
// In the for-of loop it's possible to use the continue and break keywords as well

for (const dish of menu.entries()) console.log(dish);
// Each of the dish is now an array itself
// with the index as part of it
// That's one way to retrieve it in the for-of loop

console.log([...menu.entries()]);
// menu.entries() returns an array which in each position contains a new array,
// which contains the element and the index number of that element

for (const dish of menu.entries()) console.log(`${dish[0] + 1}: ${dish[1]}`);

// Since dish is an array, it's possible to desctructure it
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
