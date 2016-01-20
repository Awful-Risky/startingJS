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

var alertArray = []

var victimNameList = []
var victimPhoneList = []
var victimStreetList = []
function reportVictimPrompt () {
	var numberVictims = prompt("How many disaster victims do you wish to report?", "Enter number here");
	for (var i = 1; i <= numberVictims; i+= 1) {
		
		var victimName = prompt("Please enter the name for victim " + i, "Enter Name Here");
		victimNameList.push(victimName)
		
		var victimPhone = prompt("Please enter the phone number for victim " + i, "Enter Number Here");
		victimPhoneList.push(victimPhone)
		
		var victimStreet = prompt("Please enter the Street for victim " + i, "Enter Name Here");
		victimStreetList.push(victimStreet)
	}
	var victimArray = [
		{victimNames: victimNameList},
		{victimPhones: victimPhoneList},
		{victimStreets: victimStreetList}
	]
	
	
	alertArray.push(victimArray)
	return victimArray
}


var volunteerNameList = []
var volunteerPhoneList = []
var volunteerStreetList = []
function reportVolunteerPrompt () {
	var numberVolunteers = prompt("How many disaster volunteers do you wish to report?", "Enter number here");
	for (var i = 1; i <= numberVolunteers; i+= 1) {
		
		var volunteerName = prompt("Please enter the name for volunteer " + i, "Enter Name Here");
		volunteerNameList.push(volunteerName)
		
		var volunteerPhone = prompt("Please enter the phone number for volunteer " + i, "Enter Number Here");
		volunteerPhoneList.push(volunteerPhone)
		
		var volunteerStreet = prompt("Please enter the Street for volunteer " + i, "Enter Street Here");
		volunteerStreetList.push(volunteerStreet)
	}	
	var volunteerArray = [
		{volunteerNames: volunteerNameList},
		{volunteerPhones: volunteerPhoneList},
		{volunteerStreets: volunteerStreetList}
	]
	
	alertArray.push(volunteerArray);
	return volunteerArray;
}


function summaryPrompt () {
	// console.log(alertArray)
	if (alertArray.length == 2) {

		alert(alertArray.join("\n"));
	}
	else {
		alert('Summary is not ready yet...insert both victms and volunteers');
	}
}

function tripleFive () {
	for (i = 0; i < 3; i++) {
		console.log('Five!');
	}
}

function lastLetter (inputString) {
	var stringLength = inputString.length;
	var finalLetter = (stringLength - 1);
	var string2Array = inputString.split('');
	
	console.log(stringLength);
	console.log(finalLetter);
	console.log(string2Array);
	
	return string2Array[finalLetter];
}

testLetter = lastLetter('Applz')
console.log(testLetter)

function square (root) {
	var n = (root * root);
	return n
}

testSquare = square(5) 
console.log(testSquare)


function negate (singleNumber) {
	var turnNegative = (singleNumber - (singleNumber * 2));
	return turnNegative;
}

testNegate = negate(1)
console.log(testNegate)

function toArray (index0, index1, index2) {
	var makeArray = [];
	makeArray.push(index0);
	makeArray.push(index1);
	makeArray.push(index2);
	return makeArray;
}

testToArray = toArray(1,2,3)
console.log(testToArray)


function startsWithA (singleString) {
	var string2Array = singleString.split('')
	if (string2Array[0] == 'a') {
		return true
	}
	else {
		return false
	}
}

testStartsWithA = startsWithA('fapple')
console.log(testStartsWithA)

function excite (singleString) {
	var concate = singleString + "!!!"
	return concate
}

testExcite = excite('string')
console.log(testExcite)

function sun (singleString) {
	if (singleString.indexOf('sun') !=  -1) {
		return true;
	}
	else {
		return false;
	}
}

testSun = sun('sunbird')
console.log(testSun)


function tiny (singleNumber) {
	if (singleNumber <= 1 && singleNumber >= 0) {
		return true;
	}
	else {
		return false;
	}
}

testTiny = tiny(1.5);
console.log(testTiny)


function getSeconds (singleString) {
	var n = singleString;
	var pArray = n.split(':')
	var minutes = Number(pArray[0])
	var seconds = Number(pArray[1])
	var totalSeconds = ((60 * minutes) + seconds)
	return totalSeconds;
}

testGetSeconds = getSeconds("01:30");
console.log(testGetSeconds);



















