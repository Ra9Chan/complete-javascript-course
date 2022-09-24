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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
