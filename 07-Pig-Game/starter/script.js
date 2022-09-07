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
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//strating conditions
let currentscore, activePlayer, scores, playing;
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  currentscore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
};
init();

//Swtich player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      //switch Player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //add currentscore to scores
    scores[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if scores >= 100
    if (scores[activePlayer] >= 100) {
      //player ? win the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // switch Player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
