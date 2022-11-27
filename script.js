"use strict";
//* ^ to be activated, this statement has to be the first line of the script

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
//! ^ with strict mode, it'll return an uncaught reference error
// otherwise nothing would be rendered in console
if (hasDriversLicense) console.log('I can drive')

const interface = 'Audio';
//! ^ unexpected strict mode reserved word
*/

function logger() {
  console.log("This is a function");
}

logger();
// ^ calling / running / invoking function

// A function cannot only reuse a piece of code,
// it can also receive data and return it back

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
// parameters are like variables that are specific only to this function
// and they will get defined once the function is called

fruitProcessor(3, 4);
// these arguments will be the input data of the function

const mixedJuice = fruitProcessor(5, 5);
// if we want to use the value that was returned,
// we need to store it in a variable
console.log(mixedJuice);

const appleJuice = fruitProcessor(5, 0);
// the function can now be called as many times as we want
// with different arguments
console.log(appleJuice);

// Not all functions need to return something
// nor all functions need to accept parameters

function test(par1, par2) {
  const exercise = `This string has both the ${par1} and the ${par2} parameter`;
  return exercise;
}

console.log(test("first", "second"));

//* to be precise, the parameter is the placeholder in the function
//* and the argument is the actual value that gets passed to fill it

//* function declaration
function calcAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}
const age1 = calcAge(1991);
console.log(age1);

//* function expression or anonymous function
const calcAge2 = function (birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
};
const age2 = calcAge2(1992);
console.log(age2);

// function declaration can be called before they are defined,
// while the same cannot be done with function expression
// that's because of the hoisting process

//* arrow function
const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear;
// the return can be omitted in case of a one-liner function

const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = new Date().getFullYear() - birthYear;
  const retirement = 65 - age;
  return retirement;
};
const age4 = yearsUntilRetirement(1991);
console.log(age4);

const moreInfo = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  const retirement = 65 - age;
  const statement = `${firstName} retires in ${retirement} years.`;
  return statement;
};
const age5 = moreInfo(1991, "Rebecca");
console.log(age5);

//* note: arrow functions do not get the so-called this keyword

//--------------------------------//
//* FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitsPieces(fruit) {
  return fruit * 4;
}

function fruitsProcessor(apples, oranges) {
  const applePieces = cutFruitsPieces(apples);
  const orangePieces = cutFruitsPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
const juice = fruitsProcessor(3, 4);
console.log(juice);

//* data flow:
// we call the fruitsProcessor function with the arguments 3 and 4
// this will then replace the apples parameter in the function with 3
// and the oranges parameter with 4.
// the values of these parameters is then used to call cutFruitsPieces.
// apples and oranges replace the fruit parameter in the function,
// so the arguments we passed for apples and oranges are now * 4
// applePieces = 3 * 4 & orangePieces = 4 * 4
// in the string where we used to have the apples and oranges values,
// we now use the updated values stored in applePieces and orangePieces.

function cutPieces(fruit, pieces) {
  return fruit * pieces;
}

function test2(apples, oranges) {
  const applePieces = cutPieces(apples, 5);
  const orangePieces = cutPieces(oranges, 9);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}
const testResult = test2(3, 4);
console.log(testResult);

//--------------------------------//

const calcAge4 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const retirementYears = function (retAge, currAge) {
  return retAge - currAge;
};

const untilRetirement = function (birthYear, firstName, retAge) {
  const age = calcAge4(birthYear);
  const retirement = retirementYears(retAge, age);
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} already retired!`);
    return -1;
  }
  // const statement = `${firstName} retires in ${retirement} years.`
  // return statement
};
const testRetirement = untilRetirement(1991, "Rebecca", 65);
console.log(testRetirement);
const testRetirement2 = untilRetirement(1953, "Giuseppe", 65);
console.log(testRetirement2);
