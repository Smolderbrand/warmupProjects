var answer;

function clickPlay() {
	var totalButtons = document.getElementById("Number").value;
	window.answer = Math.floor(Math.random() * totalButtons) + 1;
	var navButtons = document.getElementById("Content");
	navButtons.innerHTML = "";
	for (var i = 1; i <= totalButtons; i++)
	{
		console.log(i + " ");
		var button = document.createElement("button");
		button.setAttribute("pageto", i);
		button.innerHTML = "Button " + i;
		navButtons.appendChild(button);
		button.addEventListener("click", function(event) {
			var btn = event.target;
			var page = btn.getAttribute("pageto");
    			// navButtons.appendChild(btn);
			if (page == window.answer) {
				document.getElementById("Answer").textContent = "You won!";
			} else {
				document.getElementById("Answer").textContent = "You lost";
			}
    		});
		navButtons.appendChild(document.createTextNode(" "));
	}
}

