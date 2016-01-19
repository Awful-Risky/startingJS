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

function birthPrompt () {
	var number = prompt("Please enter a birthdate using the xx/xx/xxxx format", "Enter Birth Data Here");

	if (number.charAt(2) === '/' && number.charAt(5) === '/' && number.length == 10) {
		alert('The birth date you entered apears valid.');
	}
	else {
		alert('The birth date you entered apears invalid.');
	}
}


var vicitmNameList = []
var vicitmPhoneList = []
var vicitmStreetList = []
function reportVictimPrompt () {
	var numberVictims = prompt("How many disaster victims do you wish to report?", "Enter number here");
	for (var i = 1; i <= numberVictims; i+= 1) {
		
		var victimName = prompt("Please enter the name for victim " + i, "Enter Name Here");
		vicitmNameList.push(victimName)
		
		// var victimPhone = prompt("Please enter the phone number for victim " + i, "Enter Number Here");
		// vicitmPhoneList.push(victimPhone)
		
		// var victimStreet = prompt("Please enter the name for victim " + i, "Enter Name Here");
		// vicitmStreetList.push(victimStreet)
		
		console.log(vicitmNameList)
		// console.log(vicitmPhoneList)
		// console.log(vicitmStreetList)
	}

	// name.length = objectSize
}

