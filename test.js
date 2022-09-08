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
