"use strict";

// Logical operators can use ANY data type
// they can return ANY data type
// and they do short-circuiting

//* ----- || OPERATOR -----

console.log(8 || "Rebecca"); // 8

// In the case of the || operator,
// short-circuiting means that if the first value is truthy
// it will immediately return that first value

console.log("" || "Pippo"); // Pippo
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || "" || "Hello" || 22 || null); // Hello

const restaurant = {};

const guests = restaurant.guests ? restaurant.guests : 10;
console.log(guests);
const guests2 = restaurant.guests || 10;
console.log(guests2);
// By the way, both of these will not work if the number is 0
// as 0 is a falsy value

//* ----- && OPERATOR -----

// The && operator works in the exact opposite way of the || operator

console.log(0 && 'Rebecca') // 0
console.log(22 && undefined) // undefined
// What this means is that the && operator short-circuits
// when the first value is falsy and then immediately returns that falsy value
// without even evaluating the second operand

console.log(22 && 'Rebecca') // Rebecca
// When the first value is truthy, the evaluation continues
// and then simply the last value is returned

// The && operator is true only if all the operands are true
// If the first one is false, it means the entire result of the && operation
// will be false anyway, so there's no need to look at any of the other operands

console.log(22 && 'Rebecca' && null && 'Hi') // null
