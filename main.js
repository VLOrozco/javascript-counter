// Counter
const counterValue = document.getElementById('counter');

// Variable to track count
var count = 0;

// Display initial count value
counterValue.innerHTML = count;

// Get each button
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

// Event listeners per button
reset.addEventListener('click', resetValue);
increase.addEventListener('click', increaseValue);
decrease.addEventListener('click', decreaseValue);

// Counter functions to be shown in innerHTML
function resetValue() {
  count = 0;
  counterValue.innerHTML = count;
}
function increaseValue() {
  count++;
  counterValue.innerHTML = count;
}
function decreaseValue() {
  count--;
  counterValue.innerHTML = count;
}
