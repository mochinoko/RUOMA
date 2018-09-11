"use strict";

// assign button elements in the array
var buttons = [
  document.getElementById('button0'),
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3'),
  document.getElementById('button4'),
  document.getElementById('button5'),
];

// click event handlers for buttons
buttons[0].onclick = function() { pressed(0) };
buttons[1].onclick = function() { pressed(1) };
buttons[2].onclick = function() { pressed(2) };
buttons[3].onclick = function() { pressed(3) };
buttons[4].onclick = function() { pressed(4) };
buttons[5].onclick = function() { pressed(5) };

// current active button
var current = 0;

// start the engine
// pick the first active button in 1500ms, after that every 1000ms
// 1500 is a parameter for setTimeout
// 1000 is a parameter for aktivoiSeuraava
var timer = setTimeout(pickNext, 1500, 1000);

// function to keep the engine going: pick a new button and set timer for the next pick
// TODO: add game logic
let buttonQueue = [];
function pickNext(delay) {
  // pick next button
  var next = pickNew(current);
  buttonQueue.push(next);
  console.log(buttonQueue);

  if(buttonQueue.length > 9) {
  return youR2slow();
}

  // update the colours of the buttons: restore the previous active to black, the next one red
  buttons[current].style.backgroundColor = "black"; // previous
  buttons[next].style.backgroundColor = "red"; // next

  // change the active button
  current = next;

  // set timer to pick the next button
  // TODO: make the pace increase steadily!
  delay-= 5;
  console.log("Active:", current);
  timer = setTimeout(pickNext, delay, delay*0.9);

  function pickNew(previous) {
    // This is just to demonstrate how the engine works
    // TODO: Fix this be random and note that the same button should not be activated consecutively
    var next = (previous + 1) % 6;
    var next = getRandomInt(0, 5);
    if(next !== previous) {
        return next;
    }else {
        return (next +1) %6;
    }
  }
}



// This function is called whenever a button is pressed
// TODO: Add game logic

let score=0;
function pressed(i) {
  console.log("Pressed:", i);
  if(buttonQueue[0]=== i) {
    score ++;
    document.getElementById('score').innerHTML = score;
    buttonQueue.shift();
  } else {
    return gameOver();
  }
}

// Function to call at game over
// TODO: complete this
function gameOver() {
    clearTimeout(timer); // stop timer
    for (var i = 0; i < 6; i++) {
      buttons[i].style.backgroundColor = "red"; // set all buttons red
      buttons[i].onclick = null; // disable click event handlers
    }


    // show score
    // Hint: The document already has an overlay element and an element to show the score.
    // Set the overlay-element visible and update the gameover-element
    document.getElementById('overlay').style.visibility = 'visible';
    document.getElementById('gameover').textContent = 'GAME OVER! Your score is ' + score + '! :)';

  }
  function youR2slow(){
    clearTimeout(timer);
    for (var i = 0; i < 3; i++) {
      buttons[i].style.backgroundColor = "red"; // set all buttons red
      buttons[i].onclick = null; // disable click event handlers
    }
    document.getElementById('overlay').style.visibility = 'visible';
    document.getElementById('gameover').textContent = 'You are too slow... ;( '+ ' Score: ' + score;
  }

  // generate random integer within range min - max
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
