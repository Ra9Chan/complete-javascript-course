'use strict';

// Function

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('Lh123');
// createBooking('H123', 2, 800);
// createBooking('H123', 5);
// createBooking('H123', undefined, 1000);

// const flight = 'LH234';
// const wray = {
//   name: 'Wray Chan',
//   passport: 2358439242,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 2358439242) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };
// checkIn(flight, wray);

// const newPssprot = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPssprot(wray);
// checkIn(flight, wray);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // Js callback all the time
// const high5 = function () {
//   console.log('😛');
// };
// document.body.addEventListener('click', high5);

// ['wray', 'john', 'k'].forEach(high5);

//challenge
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Wray');
// greeterHey('John');
// greet('Hello')('Ra9c');

const lufthansa = {
  airline: 'Lifthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function (){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Ra9c');
lufthansa.book(635, 'John');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Dose Not work
// book(23, 'Sarah');

// call method
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);
book.call(lufthansa, 239, 'Cherry');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary');
console.log(swiss);

//apply method
const flightData = [583, 'Cooper'];
// (not used)
// book.apply(swiss, flightData);
book.call(swiss, ...flightData);
console.log(swiss);

//bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'King');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jc');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//bind(null, ...arg)
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

//challenge
const addTaxRate = rate => value => value + value * rate;
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
