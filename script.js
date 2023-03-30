// console.log('Hello World');   Check the link

//Guess That Number
// Define Variables Messager to be used throughout the project

const enterNumText = 'Please enter a number greater than zero';

// For restarting game
let restartGame = true;

//for storing the range of the number to be guessed.
let rangeNum;

// For storing the number of attempts the user has left
let lives;

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
    randomNum = Math.floor(Math.random() * rangeNum) + 1;
    console.log(`randomNum`, randomNum, `rangeNum`, rangeNum);

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
            alert(`A helpful hint...The number is ${randomNum}`);
        }

        // Tries to convert user's guess into a number
        guess = parseInt(guess); 

        //Verify the user's guess is a number greater than zero and less than or equal to the range they set
        while(!guess || guess < 1 || guess > rangeNum) {
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`))
        }

        // Remove life from after each incorrect guess
        lives--;

        // if else
        if (guess === randomNum) {
            alert(`CONGRATULATIONS! YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;
            // Check if user has any lives left. If not the the game ends and the number is displayed to the user.
        } else if (lives === 0) {
            alert(`Sorry but you have run out of lives. the number was ${randomNum}`);
            break;
        } else if (guess == cat) {
            lives +=2;
            guess = prompt(`You found Cael's cat. You gained extra lives. You have ${lives} left.`)
        } 
        // Check if guess was too low
        else if (guess < randomNum) {
            guess = (prompt(`Too Low... You have ${lives} left.`));
        } // Check if guess was too high ... last possibility
        else {
            guess = (prompt(`Too High... You have ${lives} left.`));
        } 
    }
        playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);
        
        // Loop until user submits a valid response
        while (true) {
            // Check if the user's answer is no
            if (playAgain.toUpperCase === 'N') {
                alert(`Thanks for playing!`);
                restartGame = false;
                break;
            } else if (playAgain.toUpperCase === 'Y') {
                // The game restarts
                break;
            } else {
                playAgain = prompt(`Please enter Y or N`);
            }


        


       } 
       

};










