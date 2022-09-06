'use strict';
const wray = {
  firstName: 'wray',
  lastName: 'chan',
  age: 27,
};
const john = new wray();
john.age = 22;
console.log(wray);
console.log(john);
