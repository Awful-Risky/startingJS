function namePrompt () {
	var name = prompt("Please enter your name", "Enter Name Here");

	if (name != null) {
		document.getElementById("repeat").innerHTML =
		"You entered " + name + "!";
	}
	if (name != null) {
		document.getElementById("length").innerHTML =
		name + " is " + name.length + " characters in length";
	}
	if (name != null) {
		document.getElementById("charN").innerHTML =
		"The third character in " + name + " is " + name.charAt(2);
	}
	if (name != null) {
		document.getElementById("lower").innerHTML =
		name + " in all lower case is " + name.toLowerCase() + "!";
	}
	if (name != null) {
		document.getElementById("upper").innerHTML =
		name + " in all lower case is " + name.toUpperCase() + "!";
	}
	if (name != null) {
		document.getElementById("subString").innerHTML =
		"The subword from 2nd to 4th character is " + name.substring(1, 4) + "!";
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

function phonePrompt () {
	var number = prompt("Please enter a valid phone number using dashes", "Enter Phone Number Here");

	if (number.charAt(3) === '-' && number.charAt(7) === '-') {
		alert('The phone number you entered apears valid.');
	}
	else {
		alert('The phone number you entered apears invalid.');
	}
}





