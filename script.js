function namePrompt () {
	var name = prompt("Please enter your name", "Enter Name Here");

	if (name != null) {
		document.getElementById("demo").innerHTML =
		"Hello " + name + "! how you doin?";
	}
}