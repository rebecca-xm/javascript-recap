"use strict";

const rest1 = {
  name: "Pipo's",
  guests: 20,
};

const rest2 = {
  name: "Ercole's",
  owner: "Rebecca",
};

rest1.guests = rest1.guests || 25;
console.log(rest1); // 20
rest2.guests = rest2.guests || 25;
console.log(rest2); // 25

//* OR ASSIGNMENT OPERATOR
// Same logic as before but in a more concise way
// It assigns a value to a variable if that variable is actually falsy

rest1.guests ||= 10;
console.log(rest1); // 20
rest2.guests ||= 10;
console.log(rest2); // 25

// This works great except for one situation
const rest3 = {
  name: "Pipo's",
  guests: 0,
};

// rest3.guests ||= 10;
// console.log(rest3) // 10 will be assigned because 0 is a falsy value

//* NULLISH COALESCING ASSIGNMENT OPERATOR
// This one comes to help with situations like the previous one

rest3.guests ??= 10;
console.log(rest3); // 0

//* AND ASSIGNMENT OPERATOR

// rest1.owner = rest1.owner && 'ANONYMOUS' // owner: undefined
// rest2.owner = rest2.owner && 'ANONYMOUS'

rest1.owner &&= "ANONYMOUS";
console.log(rest1); // this time the variable won't be set at all
rest2.owner &&= "ANONYMOUS";
console.log(rest2);
