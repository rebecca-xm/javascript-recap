//* 1. For each of them, create an object  with properties for their full name,
// mass, and height (Mark Miller and John Smith).

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
// };

//* 2. Create a 'calcBMI' method on each object to calculate the BMI.
// Store the BMI value to a property, and also return it from the method.

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

//* 3. Log to the console who has the higher BMI, together with the full name
// and the respective BMI.

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI (${Math.floor(
      mark.BMI
    )}) is higher than ${john.firstName} ${john.lastName}'s (${Math.floor(
      john.BMI
    )})!`
  );
} else {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI (${Math.floor(
      john.BMI
    )}) is higher than ${mark.firstName} ${mark.lastName}'s (${Math.floor(
      mark.BMI
    )})!`
  );
}
