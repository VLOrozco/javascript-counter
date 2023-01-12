// Counter
const counterValue = document.getElementById('counter');

// Variable to track count
var count = 0;

// Display initial count value
counterValue.innerHTML = count;


// All buttons
const buttons = document.querySelectorAll('.btn');
// Individual button
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');


// Event listeners per button
buttons.forEach(button => button.addEventListener('click', changeCounterValue));

function changeCounterValue(event) {
  var eventTarget = event.target;

  // Increase, decrease or reset counter value and display updated count value
  if(eventTarget == decrease){
    count--;
    counterValue.innerHTML = count;
  } else if(eventTarget == increase){
    count++;
    counterValue.innerHTML = count;
  } else {
    count = 0;
    counterValue.innerHTML = count;
  }

  // change color of counter value based on negative or positive digit
  if(count < 0){
    counterValue.style.color = "red";
  } else if(count > 0){
    counterValue.style.color = "green";
  } else {
    counterValue.style.color = "deeppink";
  }
}
