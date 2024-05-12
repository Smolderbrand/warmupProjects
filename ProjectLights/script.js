var semaphorColor;

function start() {
	document.getElementById("button").style.background = "#FF0000";
	window.semaphorColor = 0;
	var intervalId = setInterval(function() { clickButton() }, 10000);
}

function clickButton() {
	if (window.semaphorColor == 0) {
		document.getElementById("button").style.background = "#FFFF40";
		window.semaphorColor = 1;
	} else if (window.semaphorColor == 1) {
		document.getElementById("button").style.background = "#00C000";
		window.semaphorColor = 2;
	} else if (window.semaphorColor == 2) {
		document.getElementById("button").style.background = "#FF0000";
		window.semaphorColor = 0;
	}
}
