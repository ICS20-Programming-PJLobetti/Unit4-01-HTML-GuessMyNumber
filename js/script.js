// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays your guess
 */
function buttonClicked () {
    function displayAnswer () {
    // constants of the code
  const MAX = 6
  const MIN = 1

    // Random Number Generator
      Math.floor((Math.random() * 6) + 1);

  	// initialize variables
	let number = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)

  	// if number equal to guess, display “Great Guess!”
	if (guess == number) {
		answer = "Great Guess!"
	} 
    
	// if number isn't equal to guess, display “You’ll get it next time :( it was _.”	
	else if (guess != number) {
		answer = "You'll get it next time :(, it was" + number "."
	}
      
  // display the answer
  document.getElementById('answer').innerHTML = answer
}
