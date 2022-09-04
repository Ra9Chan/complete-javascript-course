'use strict';

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

const player1Style = document.querySelector('.player--0');
const player2Style = document.querySelector('.player--1');
const player1Current = document.querySelector('#current--0');
const player2Current = document.querySelector('#current--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');

let player = 0;
let current = 0;
let num = Math.trunc(Math.random() * 6 + 1);
let scorePlayer1 = 0,
  scorePlayer2 = 0;

const rollNum = function () {
  num = Math.trunc(Math.random() * 6 + 1);
};

const select = function (players) {
  if (players === 0) {
    player2Style.classList.remove('player--active');
    player1Style.classList.add('player--active');
  } else {
    player1Style.classList.remove('player--active');
    player2Style.classList.add('player--active');
  }
};

const fun = function () {
  if (scorePlayer1 >= 100 || scorePlayer2 >= 100) {
  } else {
    rollNum();
    dice.src = `dice-${num}.png`;
    current = current + num;
    player === 0
      ? (player1Current.textContent = current)
      : (player2Current.textContent = current);
    if (num === 1) {
      current = 0;
      player === 0
        ? (player1Current.textContent = 0)
        : (player2Current.textContent = 0);
      player === 0 ? player++ : player--;
      select(player);
    }
  }
};

const fun2 = function () {
  if (player === 0) {
    scorePlayer1 = scorePlayer1 + current;
    if (scorePlayer1 >= 100) {
      player1Score.textContent = 'Winner';
      current = 0;
    } else {
      player2Score.textContent = scorePlayer1;
      player++;
      select(player);
      current = 0;
      player1Current.textContent = 0;
    }
  } else {
    scorePlayer2 = scorePlayer2 + current;
    if (scorePlayer2 >= 100) {
      player2Score.textContent = 'Winner';
      current = 0;
    } else {
      player2Score.textContent = scorePlayer2;
      player--;
      select(player);
      current = 0;
      player2Current.textContent = 0;
    }
  }
};
const init = function () {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  dice.src = `dice-${num}.png`;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  player1Score.textContent = scorePlayer1;
  player2Score.textContent = scorePlayer2;
  player = 0;
  select(player);
};

rollBtn.addEventListener('click', fun);
holdBtn.addEventListener('click', fun2);
resetBtn.addEventListener('click', init);
