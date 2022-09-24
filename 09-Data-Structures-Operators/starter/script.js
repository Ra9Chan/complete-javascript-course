'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const upper = function (str) {
  return str.slice(0, 3).toUpperCase();
};
for (const iterator of flights.split('+')) {
  const [type, from, to, time] = iterator.split(';');

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replace(
    '_',
    ' '
  )} from ${upper(from)} to ${upper(to)} (${time.replace(':', 'h')})`.padStart(
    48
  );
  console.log(output);
  // const title = msg[0].slice(1, msg[0].length);
  // const from = msg[1].toUpperCase().slice(0, 3);
  // const to = msg[2].toUpperCase().slice(0, 3);
  // const time = msg[3].replace(':', 'h');
  // const showMsg = `${title} ${from} ${to} ${time}`;
  // console.log(showMsg.padStart(36));
}
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [index, value] of rows.entries()) {
    const [first, second] = value.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)} ${'✅'.repeat(index + 1)}`);
  }
});

// console.log('a+very+nice+string'.split('+'));
// console.log('wray chan'.split(' '));
// const [firstName, lastName] = 'wray chan'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const newName = [];
//   for (const iterator of names) {
//     // newName.push(iterator[0].toUpperCase() + iterator.slice(1));
//     newName.push(iterator.replace(iterator[0], iterator[0].toUpperCase()));
//   }
//   console.log(newName.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// //padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log(message.padEnd(25, '-'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4).padStart(str.length, '*');
//   console.log(last);
// };
// maskCreditCard(3412894721213879);
// maskCreditCard('4950104912909240');

// //repeat

// const message2 = 'Bad weather... All Departues Delayed...';

// console.log(message2.repeat(3));
// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };
// planesInLine(2);
// planesInLine(5);
// planesInLine(10);
// string
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name
// const passenger = 'RaYC';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // check email
// const email = 'hello@github.com';
// const loginEmail = '     HellO@github.Com \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(normalizedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail === email);

// replacing
// const priceGB = '288,97$';
// const priceUS = priceGB.replace('$', '22').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to barding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Being'));
// console.log(plane.startsWith('Air'));

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('NOT allowed on board');
//   } else console.log('welcome');
// };
// checkBaggage('I have a laptop, some Food and a pocker Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
// console.log(plane[0]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('Portu2al'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   if (typeof seat === 'string') {
//     if (seat.indexOf('B') !== -1 || seat.indexOf('E') !== -1) {
//       console.log(`Your seat is ${seat} ,it's a middle seats`);
//     }
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('13A');
// checkMiddleSeat('14E');

// // boxing
// console.log(new String('Ra9c'));

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
//code challenge 3
// const events = [...new Set([...gameEvents.values()])];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes" `
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes" `
// );

// first half or second half [FIRST HALF] 17: ⚽️ GOAL

// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF]${key}: ${value}`);
// }
// const question = new Map([
//   ['question', 'What is the best programing language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct🧨'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// // Convert obj to map

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(key, value);
// }
// const answer = Number(prompt('Your answer is 1,2, 3?'));
// console.log(question.get(question.get('correct') === answer));
// console.log([...question]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, portugal'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open ')
//   .set(false, 'We are closed');
// console.log(rest.get(true));
// console.log(rest.get('open'));

// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// console.log(new Set('wraisgiasd').size);
//coding challenge 2
// 1
// for (const [index, playerName] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${playerName}`);
// }

// // 2
// const odds = Object.values(game.odds);
// let averageOdds = 0;
// for (const [index, odd] of Object.entries(game.odds)) {
// for (const odd of odds) {
//   averageOdds += odd;
// }
// averageOdds /= odds.length;
// console.log(averageOdds);

// 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const str = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${str}: ${odd}`);
// }

// 4
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
//coding challenge 1

// const [player1, player2] = game.players;
// const [gk, ...fieldPlayers] = player1;
// const allPlayers = [...player1, ...player2];
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// const { team1, x: draw, team2 } = game.odds;
// const printGoals = function (...player) {
//   console.log(`${player.length} has gold, they are ${player}`);
// };
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// team1 > team2 && console.log(`team2 win`);
// team1 < team2 && console.log(`team1 win`);

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days`;

// for (const day of Object.keys(openingHours)) {
//   openStr += ` ${day},`;
// }
// console.log(openStr);

// const value = Object.values(openingHours);
// console.log(value);

// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(key, open, close);
// }
