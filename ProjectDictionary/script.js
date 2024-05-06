var words = [];

function clickSave() {
	var word = document.getElementById("NewWord").value;
	var wordsdisplay = "Words: ";
	window.words.push(word);
	for (var i = 0; i < window.words.length; i++)
		wordsdisplay += window.words[i] + " ";
	document.getElementById("Words").textContent = wordsdisplay;
}

function clickSearch() {
	var fl = 0;
	var word = document.getElementById("SearchWord").value;
	for (var i = 0; i < window.words.length; i++)
		if (window.words[i].toLowerCase() == word.toLowerCase())
			fl = 1;
	if (fl == 1) {
		document.getElementById("Answer").textContent = "Found in dictionary";
	} else {
		document.getElementById("Answer").textContent = "Not found in dictionary";
	}
}