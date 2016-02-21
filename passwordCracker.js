//Password Cracker
//Program written by Zach Hofmeister
//READ THE README BEFORE USING ANY OF MY CODE!!!


//"userPassword" will not be read by the computer, instead it will be guessed and reguessed.
var userPassword = prompt("Enter a 4 digit password for the computer to guess.","Only Upper/Lower case letters and numbers.") + ''

//the following variable contains an array of all the possible characters that can be present.
var possibleCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];

//the following variable is the default guess of the computer, which will be changed later.
var computerGuess = 'AAAA';

//establishes that the computer has not correctly guessed the password, will be changed when password is discovered.
var correctGuess = null;

//the following variable keeps track of how many guesses it takes for the computer to crack the password.
var totalGuesses = 0;

//the following variable keeps track of what character is currently being tested.
var i = [0,0,0,0,0,0,0,0,0,0];

//the following function 
var checkPassword = function(passwordGuess) {

    if(passwordGuess === userPassword) {
		console.log("Your password is " + computerGuess + ".");
		console.log("Took " + totalGuesses + " tries to guess your password.");
	}else{
		//console.log("Guessing again.");
	};
};

var charGuess = function(charNumberDigit) {
	computerGuess = computerGuess.substr(0, charNumberDigit - 1) + possibleCharacters[i[charNumberDigit - 1]] + computerGuess.substr(charNumberDigit);
	checkPassword(computerGuess);
	if(charNumberDigit !== 4){i[charNumberDigit] = 0};
	i[charNumberDigit - 1]++;
	totalGuesses++;
};

while(computerGuess !== userPassword) {
	while(i[3] <= 61 && computerGuess !== userPassword) {
		charGuess(4);
		while(i[2] <= 61 && i[3] === 61 && computerGuess !== userPassword) {
			charGuess(3);
			while(i[1] <= 61 && i[2] === 61 && computerGuess !== userPassword) {
				charGuess(2);
				while(i[0] <= 61 && i[1] === 61 && computerGuess !== userPassword) {
					charGuess(1);
				};
			};
		};
	};
};
