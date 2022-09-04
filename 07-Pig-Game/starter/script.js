'use strict';

// const rollBtn = document.querySelector('.btn--roll');
// const holdBtn = document.querySelector('.btn--hold');
// const resetBtn = document.querySelector('.btn--new');
// const dice = document.querySelector('.dice');

// let player = 0;
// let num = Math.trunc(Math.random() * 6 + 1);
// let score = 0;
// const rollNum = function () {
//   num = Math.trunc(Math.random() * 6 + 1);
// };
// const select = function (e1, e2) {
//   document.querySelector(`.player--${e1}`).classList.remove('player--active');
//   document.querySelector(`.player--${e2}`).classList.add('player--active');
// };
// const fun = function (players) {
//   rollNum();
//   dice.src = `dice-${num}.png`;
//   score = score + num;
//   document.getElementById(`current--${players}`).textContent = score;
//   if (num === 1) {
//     score = 0;
//     document.getElementById(`current--${players}`).textContent = 0;
//     player === 0 ? player++ : player--;
//     players === 0 ? select(0, 1) : select(1, 0);
//   }
// };

// rollBtn.addEventListener('click', () => {
//   if (player === 0) {
//     fun(player);
//   } else {
//     fun(player);
//   }
// });

//selecting elements

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//strating conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentscore = 0;
let activePlayer = 0;
const scores = [0, 0];

//Swtich player function
const swtichPlayer = function () {};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //check for rolled 1
  if (dice !== 1) {
    //add the dice to score
    currentscore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentscore;
    // current0El.textContent = currentscore;
  } else {
    //swtich player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentscore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
btnHold.addEventListener('click', function () {
  //add currentscore to scores
  // if scores >= 100
  if (scores[activePlayer]) {
    //player ? win the game
  } else {
    // swtich player
  }
});
