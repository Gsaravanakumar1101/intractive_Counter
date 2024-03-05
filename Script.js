// JavaScript - script.js
let count = 0;

function incrementCounter() {
  count++;
  updateCounter();
}

function decrementCounter() {
  count--;
  updateCounter();
}

function resetCounter() {
  count = 0;
  updateCounter();
}

function updateCounter() {
  document.getElementById('counter').innerText = count;
}
