// Loops are one of the control structures available in JavaScript.
// They allow us to automate repetitive tasks.

for (let i = 1; i <= 10; i++) {
  console.log(
    `This thing has been repeated ${i > 1 ? `${i} times` : `${i} time`}`
  );
}

//* The loop statement has three parts:
//* - the initial value of a counter;
//* - the condition that keeps the iteration running as loong as it's true;
//* - the counter increase.

//* LOOPING ARRAYS, BREAKING AND CONTINUING

const about = [
  "Rebecca",
  "Mollica",
  2022 - 1991,
  "developer",
  ["Pipo", "Pippo", "Benny", "Ercole"],
];

const test = [];

for (let i = 0; i < about.length; i++) {
  // reading from an array
  console.log(about[i]);

  // filling an array #1
  //   test[i] = typeof about[i];

  // filling an array #2
  test.push(typeof about[i]);
}
console.log(test);

const years = [1991, 1990, 1989, 1988];
const ages = [];

for (let i = 0; i < years.length; i++) {
  const currentYear = new Date().getFullYear();
  ages.push(currentYear - years[i]);
}
console.log(ages);

//* the continue statement is to exit the current iteration of the loop
//* and continue to the next one.
//* on the other hand, break completely terminates the whole loop.

console.log("TEST CONTINUE W/ STRING");
for (let i = 0; i < about.length; i++) {
  if (typeof about[i] !== "string") continue;
  // everything that's not a string will basically be skipped
  console.log(about[i]);
}

console.log("TEST CONTINUE W/ NUMBER");
for (let i = 0; i < about.length; i++) {
  if (typeof about[i] !== "number") continue;
  // everything that's not a number will basically be skipped
  console.log(about[i]);
}

console.log("TEST BREAK W/ NUMBER");
for (let i = 0; i < about.length; i++) {
  if (typeof about[i] === "number") break;
  // loop will be terminated once a number is reached
  console.log(about[i], typeof about[i]);
}

//* LOOPING BACKWARDS AND LOOPS IN LOOPS

for (let i = about.length - 1; i >= 0; i--) {
  console.log(about[i]);
}

// Let's say we have three tasks and we want to repeat each of them
// five times. That's when a loop inside a loop comes in handy.

for (let task = 1; task <= 3; task++) {
  console.log(`Starting task n° ${task}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(
      ` Task n° ${task} repeated ${rep > 1 ? `${rep} times` : `${rep} time`}`
    );
  }
}

//* THE WHILE LOOP
// it's called the while loop because it'll run while the condition is true

// for comparison
// for (let i = 1; i <= 10; i++) {
//   console.log(
//     `This thing has been repeated ${i > 1 ? `${i} times` : `${i} time`}`
//   );
// }

//* in the while loop we can only specify a condition,
// the other two parts will be defined separately.

let i = 1;
while (i <= 10) {
  console.log(
    `This while loop has been repeated ${i > 1 ? `${i} times` : `${i} time`}`
  );
  // the counter update is placed at the end of the iteration
  i++;
}

// unlike the for loop, the while loop does not really need a counter,
// all it really needs is the condition.

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    // we reassign the value at the end of each iteration
    // in order to avoid an infinite loop over the same value
    if (dice === 6) {
        console.log('Loop ends here')
    }
}

// num !== 6 -> loop due to condition met -> new value
// if new value !== 6 -> loop due to condition met -> new value
// and so on till the condition turns true.