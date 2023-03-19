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

  orderPasta: function (ing, ing2, ing3) {
    console.log(ing, ing2, ing3);
  },
};

const array = [7, 8, 9];
// given this array, let's say we want to create a new array based on this one
// but with new elements at the beginning
// we could loop over this array or, even worse, do it manually
const newArray = [1, 2, array[0], array[1], array[2]];
console.log(newArray);

const newArr = [1, 2, ...array];
// what the spread operator does is to basically take all the values
// out of the initial array and then write them individually
// as if we wrote them manually
console.log(newArr);
// this means we can use the spread operator whenever we would otherwise
// write multiple values separated by commas

// let's now say we want to actually log the individual elements of the new array
console.log(...newArr); //* => we get 1, 2, 7, 8, 9 as individual values
// this is useful when we write an array and when we need to pass multiple elements
// into a function

const newMenu = [...restaurant.mainMenu, "Lasagna"];
// here we are creating a completely new array
// we are NOT manipulating the existing one
console.log(restaurant.mainMenu);
console.log(newMenu);

// The spread operator is a bit similar to destructuring,
// as it also helps us get elements out of arrays.
// The big difference is that the spread operator
// takes all the elements from the array
// and it also does NOT create new variables.
// As a consequence, we can only use it in places
// where we would otherwise write values separated by commas.

//* Copy array

const mainMenuCopy = [...restaurant.mainMenu];
// here we're creating a shallow copy of that array
console.log(mainMenuCopy);

//* Join arrays together

const joinedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// here we're joining two existing arrays into a new one
console.log(joinedMenu);

//* The spread operator works on all iterables
// iterables are things like arrays, strings, maps, sets
// but NOT objects

const str = "Pippo";
// with the spread operator we can create an array which contains all the individual letters
const letters = [...str, " ", "and more stuff"];
console.log(letters);

const ingredients = [
  prompt("Let's make pasta! First ingredient?"),
  prompt("Second ingredient?"),
  prompt("Third ingredient?"),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients); // rather than ingredients[0], ingredients[1], ingredients[2]

//* Objects

const newRestaurant = { ...restaurant, founder: "Pippo" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant}
restaurantCopy.name = 'Ristorante Antico'
console.log(restaurant.name)
console.log(restaurantCopy.name)