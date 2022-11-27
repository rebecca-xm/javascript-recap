"use strict";
//* 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

const calcAverage = (firstScore, secondScore, thirdScore) => {
  const scoreSum = firstScore + secondScore + thirdScore;
  return scoreSum / 3;
};

//* 2. Use the function to calculate the average for both teams

const data1Dolphins = calcAverage(44, 23, 71);
const data1Koalas = calcAverage(65, 54, 49);
console.log(data1Dolphins);
console.log(data1Koalas);

const data2Dolphins = calcAverage(85, 54, 41);
const data2Koalas = calcAverage(23, 34, 27);
console.log(data2Dolphins);
console.log(data2Koalas);

//* 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points.

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins won! ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas won! ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log("No team won.");
  }
}
checkWinner(data1Dolphins, data1Koalas);
checkWinner(data2Dolphins, data2Koalas);
