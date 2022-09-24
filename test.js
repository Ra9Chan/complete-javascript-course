"use strict";

const a = "wray";
first();
function first() {
  const b = "Hello!";
  second();
  function second() {
    const c = "Hi";
    third();
  }
}
function third() {
  const d = "Hey!";
  console.log(a, d);
}

function test(person) {
  person.age = 26;
  person = {
    name: "ttt",
    ago: 30,
  };
  return person;
}

const p1 = {
  name: "yyk",
  age: 25,
};
const p2 = test(p1);
console.log(p1);
console.log(p2);
