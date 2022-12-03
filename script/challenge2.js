//* 1. Write a function 'calcTip' that takes any bill value as an input
// and returns the corresponding tip. Test the function using a bill value of 100.

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100));

//* 2. Create an array 'bills' containing the test data below.

const bills = [125, 555, 44];

//* 3. Create an array 'tips' containing the tip value for each bill,
// calculated from the function previously created.

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

//* 4. BONUS: Create an array 'total' containing the total values,
// so the bill + tip.

function totalValue(bill, tip) {
    return bill + tip
}

const total = [totalValue(bills[0], tips[0]), totalValue(bills[1], tips[1]), totalValue(bills[2], tips[2])]
console.log(total)