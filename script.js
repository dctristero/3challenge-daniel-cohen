// Assignment code here
//Arrays for lowercase alphabet, uppercase, special characters, and numbers
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var askLength;
var askLower;
var askUpper;
var askNumber;
var askSpecial;
var userInput;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// var password is now the value generated by function generatePassword
// var passwordText is now the location the pw should be written on the page
  passwordText.value = password;
// this puts the output value of generatePassword into the #password text box
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  askLength = prompt("How many characters would you like your password to include (must be between 8 and 128)?");

  if(isNaN(askLength) || askLength < 8 || askLength > 128) {
    alert("Please start over and enter a numerical value between 8 and 128.")
  }

  else {
  askLower = confirm("Should the password contain lowercase letters?");
  askUpper = confirm("Should the password contain uppercase letters?");
  askNumber = confirm("Should the password contain numbers?");
  askSpecial = confirm("Should the password contain special characters?");
  };

  if(!askLower && !askUpper && !askNumber && !askSpecial) {
    alert("Please start over and select at least one kind of character to include.")
  }
  // userchoices?

  else if(askLower && askUpper && askNumber && askSpecial) {
    userInput = lowers.concat(uppers, numbers, specials);
  }

  // 3 types
  
  else if(askLower && askUpper && askNumber) {
    userInput = lowers.concat(uppers, numbers);
  }

  else if(askLower && askUpper && askSpecial) {
    userInput = lowers.concat(uppers, specials);
  }

  else if(askLower && askNumber && askSpecial) {
    userInput = lowers.concat(numbers, specials);
  }

  else if(askUpper && askNumber && askSpecial) {
    userInput = uppers.concat(numbers, specials);
  }

  // 2 types

  else if(askLower && askUpper) {
    userInput = lowers.concat(uppers);
  }
  else if(askLower && askNumber) {
    userInput = lowers.concat(numbers);
  }
  else if(askLower && askSpecial) {
    userInput = lowers.concat(specials);
  }

  else if(askUpper && askNumber) {
    userInput = uppers.concat(numbers);
  }
  else if(askUpper && askSpecial) {
    userInput = uppers.concat(specials);
  }
  else if(askNumber && askSpecial) {
    userInput = numbers.concat(specials);
  }

  // 1 type

  else if(askLower) {
    userInput = lowers;
  }
  else if(askUpper) {
    userInput = uppers;
  }
  else if(askNumber) {
    userInput = numbers;
  }
  else if(askSpecial) {
    userInput = specials;
  };


   // empty holder
   var passHolder = [];
  
   // Loop for random character selection
   for (var i = 0; i < askLength; i++) {
     var char = userInput[Math.floor(Math.random() * userInput.length)];
     // adds each successive random character
     passHolder.push(char);
   }
  // joins characters into one array output without commas
   var password = passHolder.join("");
  return password;
}