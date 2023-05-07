"use strict";

// The nullish coalescing operator (??) was introduced in ES2020
// and it works almost in the same way as the || operator

const restaurant = {};

restaurant.guests = 0;

const guests2 = restaurant.guests || 10;
console.log(guests2); // returns 10 because 0 is also a falsy value

const correctGuests = restaurant.guests ?? 10;
console.log(correctGuests); // 0

// The ?? operator works with the concept of nullish value
// instead of falsy values
// Nullish values are null and undefined
// it does not include the zero or the empty string('')
// For the ?? operator it is as if the 0 or the '' were not falsy values
