var semaphor;

function start() {
	document.getElementById("button").style.background = "#FF0000";
	window.semaphor = 0;
	var intervalId = setInterval(function() { clickButton() }, 10000);
}

function clickButton() {
	if (window.semaphor == 0) {
		document.getElementById("button").style.background = "#FFFF40";
		window.semaphor = 1;
	} else if (window.semaphor == 1) {
		document.getElementById("button").style.background = "#00C000";
		window.semaphor = 2;
	} else if (window.semaphor == 2) {
		document.getElementById("button").style.background = "#FF0000";
		window.semaphor = 0;
	}
}
