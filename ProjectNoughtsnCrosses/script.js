var currentPlayer;
var state = [];

function start() {
	window.currentPlayer = 0;
	window.state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function clickNew() {
	window.currentPlayer = 0;
	window.state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (var i = 0; i < 9; i++)
		document.getElementById("button" + String.fromCharCode(65 + i)).textContent = " ";
	checkState();
}

function checkState() {
	if (window.currentPlayer == 0)
		document.getElementById("GameStats").textContent = "X to click";
	else
		document.getElementById("GameStats").textContent = "O to click";
	for (var i = 0; i < 3; i++)
		if ((window.state[i] == window.state[i + 3]) && (window.state[i] == window.state[i + 6]) && (window.state[i] > 0))
			if (window.state[i] == 1)
				document.getElementById("GameStats").textContent = "X has won!";
			else
				document.getElementById("GameStats").textContent = "O has won!";
	for (var i = 0; i < 7; i += 3)
		if ((window.state[i] == window.state[i + 1]) && (window.state[i] == window.state[i + 2]) && (window.state[i] > 0))
			if (window.state[i] == 1)
				document.getElementById("GameStats").textContent = "X has won!";
			else
				document.getElementById("GameStats").textContent = "O has won!";
	if ((window.state[0] == window.state[4]) && (window.state[0] == window.state[8]) && (window.state[0] > 0))
		if (window.state[0] == 1)
			document.getElementById("GameStats").textContent = "X has won!";
		else
			document.getElementById("GameStats").textContent = "O has won!";
	if ((window.state[2] == window.state[4]) && (window.state[2] == window.state[6]) && (window.state[2] > 0))
		if (window.state[2] == 1)
			document.getElementById("GameStats").textContent = "X has won!";
		else
			document.getElementById("GameStats").textContent = "O has won!";
}

function clickA() {
	wrapperButton(0);
}

function clickB() {
	wrapperButton(1);
}

function clickC() {
	wrapperButton(2);
}

function clickD() {
	wrapperButton(3);
}

function clickE() {
	wrapperButton(4);
}

function clickF() {
	wrapperButton(5);
}

function clickG() {
	wrapperButton(6);
}

function clickH() {
	wrapperButton(7);
}

function clickI() {
	wrapperButton(8);
}

function wrapperButton(number) {
	if (window.state[number] == 0) {
		if (currentPlayer == 0) {
			currentPlayer = 1;
			window.state[number] = 1;
			document.getElementById("button" + String.fromCharCode(65 + number)).textContent = "X";
		} else {
			currentPlayer = 0;
			window.state[number] = 2;
			document.getElementById("button" + String.fromCharCode(65 + number)).textContent = "O";
		}
		checkState();
	}
}