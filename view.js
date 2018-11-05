// Updates the front-end using variables from the 'back-end'
function update() {

    document.getElementById("word").innerText = "";
    document.getElementById("message").innerText = message;

    for (var i = 0; i < currentWord.length; i++) {
        document.getElementById("word").innerText += currentWord[i];
    }

    document.getElementById("definition").innerText = definition;
    document.getElementById("chances").innerText = guessesLeft;
    document.getElementById("guessedLetters").innerText = lettersGuessed;
    document.getElementById("score").innerText = currentScore;

    var tableBody = document.getElementById("leaderboard").getElementsByTagName('tbody')[0];

    for (var i = 0; i < table.length; i++) {
        var tr = document.createElement('TR');
        var user = document.createElement('TD');
        var score = document.createElement('TD');
        user.appendChild(document.createTextNode(table[i].User));
        score.appendChild(document.createTextNode(table[i].Score));
        tr.appendChild(user);
        tr.appendChild(score);
        tableBody.appendChild(tr);
    }
}

// Disables all the buttons on the front-end
function disableButtons() {
    for (var i = 65; i < 91; i++) {
        document.getElementById(String.fromCharCode(i)).disabled = true;
    }
    document.getElementById("restart").disabled = true;
}

// Enables all the buttons on the front-end
function enableButtons() {
    for (var i = 65; i < 91; i++) {
        document.getElementById(String.fromCharCode(i)).disabled = false;
    }
    document.getElementById("restart").disabled = false;
}