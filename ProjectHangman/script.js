var word;
var guessed;

function start() {
	var words = ["veterotestamentary", "apple", "banana", "rotten", "disgrace", "hoeflation", "mineral", "automotive", "fit", "call"];
	var choice = Math.floor(Math.random() * words.length);
	window.word = words[choice];
	window.answer = Math.floor(Math.random() * 3) + 1;
	var noAnswer = "";
	guessed = "";
	for (var i = 0; i < window.word.length; i++)
		noAnswer += "_ ";
	document.getElementById("GamePanel").textContent = noAnswer;
}

function validate(input) {
	input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toLowerCase();
}

function clickGuess() {
	window.guessed += document.getElementById("SearchChar").value;
	var lives = 7;
	var fl = 0;
	var guessedLetters = 0;
	var newString = "";
	for (var i = 0; i < window.guessed.length; i++) {
		fl = 0;
		for (var j = 0; j < window.word.length; j++)
			if (window.guessed[i] == window.word[j])
				fl = 1;
		if (fl == 0)
			lives -= 1;
	}
	for (var i = 0; i < window.word.length; i++) {
		fl = 0;
		for (var j = 0; j < window.guessed.length; j++)
			if (window.word[i] == window.guessed[j])
				fl = 1;
		if (fl == 0)
			newString += "_ ";
		if (fl == 1) {
			newString += window.word[i] + " ";
			guessedLetters += 1;
		}
	}
	document.getElementById("GamePanel").textContent = newString;
	if ((guessedLetters == window.word.length) && (lives > 0)) {
		document.getElementById("GameStats").textContent = "You won!";
	} else {
		if (lives <= 0)
			document.getElementById("GameStats").textContent = "You lost!";
		else
			document.getElementById("GameStats").textContent = "You have " + lives + " lives left.";
	}
}
