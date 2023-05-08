"use strict";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// console.log(restaurant.openingHours.Mon.open); // cannot read properties of undefined (reading 'open')
// To avoid this error, we should first check if Mon actually exists,
// we might even want to check for openingHours as well
// In a scenario with deeply nested optional properties this could easily get out of hand
// With optional chaining, if a certain property doesn't exist,
// then undefined is returned immediately, avoiding the previous error

//* OPTIONAL CHAINING
console.log(restaurant.openingHours.Mon?.open); // undefined with no error
// Only if the property that is BEFORE the question mark
// the next property will be read from there
console.log(restaurant.openingHours.Sat?.open); // 0
// console.log(restaurant.closingHours.Mon?.close) // error
console.log(restaurant.closingHours?.Mon?.close); // undefined with no error

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

for (const day of days) {
  // console.log(day)
  console.log(
    `Restaurant opens on ${day} at ${
      restaurant.openingHours[day]?.open ?? "closed"
    }`
  );
}

// Optional chaining also works for calling methods
console.log(restaurant.order?.(1, 2) ?? "Method does not exists"); // ['Bruschetta', 'Risotto']
console.log(restaurant.pippo?.(1, 2) ?? "Method does not exists"); // Method does not exist

// It also works on arrays
const users = [
  {
    name: "Pippo",
  },
];
// it can be used to check if an array is empty
console.log(users[0]?.name ?? "No user in this list"); // Pippo
const users2 = [];
// it can be used to check if an array is empty
console.log(users2[0]?.name ?? "No user in this list"); // No user in this list
// rather than if(users.length > 0) console.log(users[0].name)
