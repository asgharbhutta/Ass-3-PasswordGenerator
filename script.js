//Variables that hold character sets
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*()_-+=";
//Function to generate password, len = length of password inputted by prompt
//characters = character set being used, in this case fullCharacters
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

//Setting initial value of 7 to ensure password length cannot be lower than 8
//or higher than 128 characters
var lenOfPassword = 7;
while (lenOfPassword <= 7 || lenOfPassword >= 129){  
  var lenOfPassword = window.prompt("How long do you want the password to be?");
}
//Setting an empty string to accept possible values
var fullCharacters = "";
  //While loop until fullCharacters has atleast 1 character set added
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
  }//while looper end
    //changed name to generate password function
    var password = generatePassword(lenOfPassword, fullCharacters);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);