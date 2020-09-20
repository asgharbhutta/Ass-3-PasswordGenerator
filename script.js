// Assignment code here
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*()_-+=";

function generatePassword(len,characters){
  var pwd = "";

  for(var i = 0; i < len; i++){
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lenOfPassword = window.prompt("How long do you want the password to be?");
  var fullCharacters = "";

while(fullCharacters == ""){  
  var lowCharTrue = window.confirm("Add lower case letters?");
  if(lowCharTrue){
    fullCharacters += lowChar;
  }else{
    fullCharacters += "";
  }

  var upperCharTrue = window.confirm("Add upper case letters?");
  if(upperCharTrue){
    fullCharacters += upperChar;
  }else{
    fullCharacters += "";
  }

  var numTrue = window.confirm("Add numbers?");
  if(numTrue){
    fullCharacters += num;
  }else{
    fullCharacters += ""
  }

  var symTrue = window.confirm("Add symbols?");
  if(symTrue){
    fullCharacters += sym;
  }else{
    fullCharacters += "";
  }
}
  var password = generatePassword(lenOfPassword, fullCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);