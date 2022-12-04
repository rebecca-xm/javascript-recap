//* 1. Create an array 'bills' containing all ten test values.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//* 2. Create empty arrays for the tips and the totals.

const tips = [];
const totals = [];

//* 3. Use the previously created 'calcTip' function to calculate tips
// and total values for every bill value in the bills array.
// Use a for loop to perform the 10 calculations.

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}

console.log(tips)
console.log(totals)