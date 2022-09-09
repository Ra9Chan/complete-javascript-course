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

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open ')
  .set(false, 'We are closed');
console.log(rest.get(true));
console.log(rest.get('open'));

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
