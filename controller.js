// Called when the game is started. Clears all variables / headings / inputs
// turns on the buttons, and updates the front-end.
function gameInit(){

    lettersGuessed = [];
    currentWord = [];
    guessesLeft = attempts;
    message = [];

    currentWordSelection = Math.floor(Math.random() * (bank.length));

    for(var i = 0; i < bank[currentWordSelection].length; i++){
        currentWord.push('_');
    }

    definition = definitions[currentWordSelection];
    enableButtons();
    update();

}

// Checks to see if the game is won or lost by checking the amount of guesses and the number of spaces.
function checkWin(){
    if(guessesLeft == 0){
        message = "You lose!";
        disableButtons();
        update();
        setTimeout(function(){gameInit()}, 3000);
    }

    if(currentWord.indexOf('_') === -1){
        message = "You win!";
        disableButtons();
        update();
        setTimeout(function(){gameInit()}, 3000);
    }
    update();
}

// Checks if the current guess is valid.
function guess(letter){

    if(lettersGuessed.indexOf(letter) === -1){
        lettersGuessed.push(letter);
        checkLetter(letter);
    }
    checkWin();
}
// Compares the guessed letter to the currently selected word to guess.
function checkLetter(letter){

    letter = letter.toLowerCase();

    var positions = [];

    for (var i = 0; i < bank[currentWordSelection].length; i++){
        if(bank[currentWordSelection][i] === letter){
            positions.push(i);
        }
    }

    if (positions.length <= 0){
        guessesLeft--;
        currentScore--;
    } else {
        for(var i = 0; i < positions.length; i++){
            currentWord[positions[i]] = letter;
            currentScore++;
        }
    }
    checkWin();
}