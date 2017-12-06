//Global Variablel
//========================================
//arrays and variables
var brewOptions = ["dogfishhead","deschutes", "threefloyds", "founders", "lagunitas", "boulevard", "odell", "victory", "surly", "indeed", "twelveeyes", "baldman", "insight", "bahaus"];
var guessedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndWords = []; // N _ _ _ _ _ _ _
var wrongLetters = [];

// Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
//Functions
//=========================================
function startGame () {
	guessedWord = brewOptions[Math.floor(Math.random() * brewOptions.length)];
	lettersinWord = guessedWord.split("");
	numBlanks = lettersinWord.length;

	//Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndWords = [];

	//Updated Blanks
	for (var i=0; i < numBlanks; i++) {
		blanksAndWords.push("_");
	}

	//change HTML for new conditions
	document.getElementById("word").innerHTML = blanksAndWords.join(" ");
	document.getElementById("guesses").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = winCount;
	document.getElementById("losses").innerHTML = lossCount;

	//Testing
	console.log(guessedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndWords);
}

function checkLetters(letter) {
	//check if letter exists

	var isletterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if(guessedWord[i] == letter) {
			isletterInWord = true;
		}
	}

	//check where letter is in word
	if (isletterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (guessedWord[i] == letter) {
				blanksAndWords[i] = letter;
			}
		}
	}

	else{
		wrongLetters.push(letter);
		guessesLeft--
	}

	//testing
	console.log(blanksAndWords);

}

function gameComplete(){
	console.log("Wins: " +winCount+"  | Losses: " + lossCount + "| Guesses: " + guessesLeft);


	//Update HtML
	document.getElementById("guesses").innerHTML = guessesLeft;
	document.getElementById("word").innerHTML = blanksAndWords.join(" ");
	document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");

	//Check if Won
	if(lettersinWord.toString() == blanksAndWords.toString()) {
		winCount++;
		alert("You're a Brew Master!")


		document.getElementById("wins").innerHTML = winCount;

		startGame();
}

//Check if lost
	else if (guessesLeft == 0) {
		lossCount ++;
		alert("You must drink Bud Light");

		document.getElementById("losses").innerHTML = lossCount;

		startGame();
	}

}



//Main Process
//=========================================

//Start Code
startGame();

//letters typed
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	gameComplete();
//testing
console.log(letterGuessed);
	
}