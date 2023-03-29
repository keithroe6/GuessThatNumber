// console.log('Hello World');   Check the link

//Guess That Number
// Define Variables Messager to be used throughout the project

const enterNumText = 'Please enter a number greater than zero';

// For restarting game
let restartGame = true;

//for storing the range of the number to be guessed.
let rangeNum;

// For storing the number of attempts the user has left
let livesleft;

// control-command-space to pull up emojis
let cat = "😼";

// For storing the user's guess
let guess;

// For storing the user's response to play again or not play again
let playAgain;

// Starting alert message
alert('Welcome to "Guess That Number!" Please click "OK" to start the game!');

// Game restarts as long as restartGame has a value of true. Main game loop.
while(restartGame) {
    // Ask user to enter a number to set the upper bound for the random number that will be created.

    rangeNum = prompt('Please enter a maximum number for the range.');
    // console.log(rangeNum);
    // Using parseInt to attempt to convert the user's response into a number value
    rangeNum = parseInt(rangeNum);
    // console.log(rangeNum);

    // Verifies the user's entry for a range number is a number greater than zero
    // Note: All numbers, positive or negative, have a default boolean value of true, except for zero which has a default boolean value of false
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    };

    // Creat the random number using the range number entered by the user
    randomNum = Math.floor(Math.random()) * rangeNum + 1;

    // Prompt user to enter a number of attempts (lives) allowed (e.g. the number of guesses)
    lives = parseInt(prompt('Please enter a number of attempts allowed'))

    // Verifying the user's entry for a number of attempts allowed is greater than zero and equal to or less than the range they set
    while(!lives || lives < 1 || lives > rangeNum) {
        lives = parseInt(prompt('Please enter a number of attempts allowed again'))

    }

    // Ask the user to enter a guess in the range they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${lives} lives left.`)

    // Continue looping until user guesses correct number or runs out of attempts. NOTE: as loop is currently set up the BREAK keyword is run
       while (true) {
        //Displays the number when a code word is entered
        if (guess === `pickle`) {
            alert(`The number is ${randomNum}`);
        }

        // Tries to convert user's guess into a number
        guess = parseInt(guess);

        // Move when needed

        break;
       } 
       // Remove when needed
    restartGame = false;










};










