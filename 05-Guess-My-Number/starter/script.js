'use strict';

let guessNum = 0;
let num = Math.floor(Math.random() * 20 + 1);
let timeNum = 20;

const msg = document.querySelector('.message');
const click1 = document.querySelector('.check');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const again = document.querySelector('.again');

again.addEventListener('click', event => {
  guessNum = 0;
  guess.value = '';
  num = Math.floor(Math.random() * 20 + 1);
  msg.textContent = 'Start guessing...';
  timeNum = score.textContent = 20;
});
click1.addEventListener('click', event => {
  if (guess.value > 20 || guess.value < 0) {
    msg.textContent = '⛔️ No between 1 to 20!';
  } else {
    guessNum = Number(guess.value);
    score.textContent = --timeNum;
    if (timeNum > 1) {
      if (guessNum === num) {
        msg.textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = guessNum;
      } else if (guessNum > num) {
        msg.textContent = '📈 Too High';
      } else {
        msg.textContent = '📉 Too Low';
      }
    } else {
      msg.textContent = 'You lost the game';
    }
  }
});
