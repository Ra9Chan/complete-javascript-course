'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Skywalker';
//       const str = `Oh, and your're a millenial， ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Wray';
// calcAge(1996);

// console.log(me, job, year);
// var me = 'wray';
// let job = 'teacher';
// const year = 1996;

// console.log(addDecl(1, 2));
// // console.log(addExpr(1, 2));
// // console.log(addArrow(1, 2));
// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// //Example

// if (!numProducts) deleteShoppingCar();

// var numProducts = 10;

// function deleteShoppingCar() {
//   console.log('All products deleted!');
// }

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(this);
// };
// calcAge(1991);
// const calcAgeArr = birthYear => {
//   console.log(this);
// };
// calcAgeArr(1991);
// const wray = {
//   year: 1996,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// wray.calcAge();
// const john = {
//   year: 1852,
// };
// john.calcAge = wray.calcAge;
// john.calcAge();

const wray = {
  firstName: 'wray',
  year: 1996,
  calcAge: function () {
    console.log(this);
  },
  greet: () => console.log(this.firstName),
};
wray.greet();
