var answer;

function start() {
	window.answer = Math.floor(Math.random() * 3) + 1;
}

function clickButtonA() {
	if (window.answer == 1) {
		document.getElementById("Answer").textContent = "You won!";
	} else {
		document.getElementById("Answer").textContent = "You lost";
	}
}

function clickButtonB() {
	if (window.answer == 2) {
		document.getElementById("Answer").textContent = "You won!";
	} else {
		document.getElementById("Answer").textContent = "You lost";
	}
}

function clickButtonC() {
	if (window.answer == 3) {
		document.getElementById("Answer").textContent = "You won!";
	} else {
		document.getElementById("Answer").textContent = "You lost";
	}
}
