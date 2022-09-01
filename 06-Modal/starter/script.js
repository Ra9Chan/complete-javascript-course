'use strict';
const button = document.getElementsByClassName('show-modal');
const content = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
console.log(button);

for (let index = 0; index < button.length; index++) {
  button[index].addEventListener('click', () => {
    content.className = 'modal';
    overlay.className = 'overlay';
  });
}

close.addEventListener('click', () => {
  content.className = 'modal hidden';
  overlay.className = 'overlay hidden';
});
