function namePrompt () {
	var name = prompt("Please enter your name", "Enter Name Here");

	if (name != null) {
		document.getElementById("demo").innerHTML =
		"Hello " + name + "! how you doin?";
	}
}


for(var i = 0; i <= 10; i++) {
	console.log(i);
}

for(var i = 0; i <= 500; i+=100) {
	console.log(i);
}

for(var i = 1; i <= 64; i*=2) {
	console.log(i);
}

for(var i = 0; i <= 10; i+=2) {
	console.log(i);
}

for(var i = 1; i < 4; i++) {
	for(var j = 1; j < 4; j++) {
		console.log(i);
	}
}

for(var i = 3; i <= 15; i+=3) {
	console.log(i);
}

for(var i = 10; i >= 0; i-=1) {
	console.log(i);
}

for(var i = 0; i <= 3; i+=1) {
	for(var j = 1; j < 4; j++) {
		console.log(i);
	}
}
