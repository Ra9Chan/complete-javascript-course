'use strict';
const button = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const closeFun = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openFun = function () {
  modal.classList.remove('hidden'); //TODO
  overlay.classList.remove('hidden');
};

for (let index = 0; index < button.length; index++) {
  button[index].addEventListener('click', openFun);
}
close.addEventListener('click', closeFun);
overlay.addEventListener('click', closeFun);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeFun();
  }
});
