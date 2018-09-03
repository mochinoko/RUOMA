'use strict'

// pick a random number in range 0-100, 0 and 100 included
var numberToGuess = Math.floor(Math.random() * (100 + 1) );

// debug message for the developer, comment out or remove in production
console.log("To guess: " + numberToGuess);

// variable to hold the latest guess
// initial value is undefined to be able to tell if any guesses have been made
var guess = undefined;
var counter = 0;
// define variables also for the best upper and lower side guess as well as the
var lowest = 0;
var highest = 100;
//
// event handler for form submission
// ver hintElem = document.getElementById('hint');
//
function guessMade() {
  // fetch the input value and convert it into a number
  var input = document.getElementById('number').value;
  guess = Number(input);
  console.log("Guess: " + guess);
  counter++;
  // clear the form for a new guess
  document.getElementById('input-form').reset();
  document.getElementById('counter').innerHTML = 'Your guesses: ' + counter;

  if(!(guess >=0 && guess <= 100)) {
    document.getElementById('hint').innerHTML = 'Please enter number 1-100.';
    return false;
  } else if (numberToGuess === guess) {
    document.getElementById('hint').innerHTML = 'Correct!';
    document.getElementById('middle-bar').innerHTML = guess;
  } else if (numberToGuess > guess) {
    if(guess> lowest) {
      lowest = guess;
    }
    document.getElementById('hint').innerHTML = 'Nope. It is bigger number.';
    document.getElementById('lower-best').innerHTML = 'Your best lowest guess is: ' + lowest;
    document.getElementById('lower-bar').innerHTML = lowest;

  } else if (numberToGuess < guess) {
    if(guess < highest) {
      highest = guess;
    }
    document.getElementById('hint').innerHTML = 'Nope. It is smaller number.';
    document.getElementById('upper-best').innerHTML = 'Your best highest guess is: ' + highest;
    document.getElementById('lower-bar').innerHTML = highest;
  }

// if(guess < numberToGuess) {
//   console.log("Too low");
//   hintElem.innerHTML = 'Too low';
// } else if( numberToGuess <guess) {
//   console.log('Too high');
//   hitElem.innerHTML = 'Too high';
// } else {
//   consle.log('Correct');
//   hintElem.innerHTML = 'Correct,'+ guesses + 'guesses';
//
//   var s ='';
//   for(let i= 0; i< numberToguess + 1; i++) {
//     s = s + i + '<br>';
//     document.getElementById('numbers').innerHTML = s;
//   }

  // let i = 0;
  // while(i < numberToGuess + 1) {
  //   s= s + i + '<br>';
  //   i++;
  // }

// }

  /*
  TODO: Implement algorithm:

  Update the number of guesses
  If the guess is lower than the number to guess
  Give hint that the number is higher
  If the guess if better than the current best lower side guess
  Update the best lower side guess
  If the guess is higher than the number to guess
  Give hint that the number is lower
  If the guess if better than the current best upper side guess
  Update the best upper side guess
  Otherwise
  Display the game over message and the number of guesses in the hint element
  Display all the numers from zero to the number to guess in the numbers element (note that you'll need to output them as html code to make them
  render correctly)
  */

  // submit handler returns false to prevent form submission
  // which would cause a page reload and reset everything
  return false;
}
// set submit handler for the form, that is tell which function
// to call when the user presses submit
document.getElementById('input-form').onsubmit = guessMade;
