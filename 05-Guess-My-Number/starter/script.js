'use strict';

let guessNum = 0;
let screctNum = Math.floor(Math.random() * 20 + 1);
let scoreNum = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const click1 = document.querySelector('.check');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');

const again = document.querySelector('.again');
const number = document.querySelector('.number');
const bgc = document.querySelector('body').style;

click1.addEventListener('click', event => {
  guessNum = Number(guess.value);
  if (!guess.value) {
    displayMessage('Not a Number');
  } else {
    if (guess.value > 20 || guess.value < 0) {
      displayMessage('⛔️ No between 1 to 20!');
    } else {
      if (guessNum === screctNum) {
        displayMessage('🎉 Correct Number!');
        console.log(bgc);
        bgc.backgroundColor = '#60b347';
        //TODO 为什么需要.backgroundColor
        number.textContent = guessNum;
        number.style.width = '30rem';
        score.textContent = scoreNum--;

        if (score.textContent > highscore) {
          highscore = score.textContent;
          document.querySelector('.highscore').textContent = score.textContent;
        }
      } else if (guessNum !== screctNum) {
        if (scoreNum > 1) {
          displayMessage(guessNum > screctNum ? '📈 Too High' : '📉 Too Low');
          scoreNum--;
          score.textContent = scoreNum;
        } else {
          displayMessage('💥 You lost the game');
          score.textContent = 0;
        }
      }
    }
  }
});
again.addEventListener('click', event => {
  screctNum = Math.floor(Math.random() * 20 + 1);
  guessNum = 0;
  guess.value = '';
  displayMessage('Start guessing...');

  scoreNum = score.textContent = 20;
  number.textContent = '?';
  number.style.width = '15rem';
  bgc.backgroundColor = '#222';
});
