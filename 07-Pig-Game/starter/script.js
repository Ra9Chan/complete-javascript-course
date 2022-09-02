'use strict';

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

let player = 0;
let num = Math.trunc(Math.random() * 6 + 1);
let score = 0;
const rollNum = function () {
  num = Math.trunc(Math.random() * 6 + 1);
};
const select = function (e1, e2) {
  document.querySelector(`.player--${e1}`).classList.remove('player--active');
  document.querySelector(`.player--${e2}`).classList.add('player--active');
};
const fun = function (players) {
  rollNum();
  dice.src = `dice-${num}.png`;
  score = score + num;
  document.getElementById(`current--${players}`).textContent = score;
  if (num === 1) {
    score = 0;
    document.getElementById(`current--${players}`).textContent = 0;
    player === 0 ? player++ : player--;
    players === 0 ? select(0, 1) : select(1, 0);
  }
};

rollBtn.addEventListener('click', () => {
  if (player === 0) {
    fun(player);
  } else {
    fun(player);
  }
});
