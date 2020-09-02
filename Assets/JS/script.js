// Assignment Code
const generateBtn = document.querySelector("#generate");

// Array of special characters
const specialCharactersArray = [ 
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters
const numericCharactersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters
const lowerCharactersArray = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters 
const upperCharactersArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

//Create variables to track checkbox status
const lowerCharactersCheck = document.querySelector('#lowerCharacters');
const upperCharactersCheck = document.querySelector('#upperCharacters');
const numericCharactersCheck = document.querySelector('#numericCharacters');
const specialCharactersCheck = document.querySelector('#specialCharacters');

//Create variables and event to track password length slider
const range = document.querySelector(".passwordLength");
const lengthOutput = document.querySelector(".lengthValue");

range.querySelector("input").addEventListener("input", event => {
  lengthOutput.setAttribute("data-length", event.target.value);
});

// Creating the pool of eligible characters from the checkbox conditions
function passwordConfiguration () {
  let passwordConfigArray = [];
    if(lowerCharactersCheck.checked){
      passwordConfigArray.push.apply(passwordConfigArray, lowerCharactersArray);
    }
    if(upperCharactersCheck.checked){
      passwordConfigArray.push.apply(passwordConfigArray, upperCharactersArray);
    }
    if(numericCharactersCheck.checked){
     passwordConfigArray.push.apply(passwordConfigArray, numericCharactersArray);
    }
    if(specialCharactersCheck.checked){
      passwordConfigArray.push.apply(passwordConfigArray, specialCharactersArray);
    }
    return passwordConfigArray;
  };

// Generating the password based on checkbox conditions
function generatePassword() {
  let passwordConfigArray = passwordConfiguration ();
  let ranVar = '';
  for (let i = 0; i < lengthOutput.getAttribute("data-length"); i++) {
    ranVar = ranVar + passwordConfigArray[Math.floor(Math.random() * passwordConfigArray.length)]
  }
  if (passwordValid(ranVar)) {
    return ranVar;
  } else {
    return generatePassword();
  }
}

// Creating functions to test if password meets criteria
function passwordValid(ranVar) {
  if (testNumeral(ranVar) && testSpecial(ranVar) && testUpper(ranVar) && testLower(ranVar)) {
  return true;
  }
  else {
    return false;
  }
}

function testNumeral(ranVar) {
  if (!numericCharactersCheck.checked) {
    return true;
  }
  return ranVar.match(/[0-9]/);
}

function testSpecial(ranVar) {
  if (!specialCharactersCheck.checked) {
    return true;
  }
  const specialResult = ranVar.match(/([^A-Z^a-z^0-9])/);
  return specialResult;
}

function testUpper(ranVar) {
  if (!upperCharactersCheck.checked) {
    return true;
  }
  return ranVar.match(/[A-Z]/);
}

function testLower(ranVar) {
  if (!lowerCharactersCheck.checked) {
    return true;
  }
  return ranVar.match(/[a-z]/);
}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Disable Generate Password button if no options checked
document.querySelectorAll('.collection input').forEach(item => {
  item.addEventListener('click', event => {
    if (lowerCharactersCheck.checked || upperCharactersCheck.checked || numericCharactersCheck.checked || specialCharactersCheck.checked) {
      generateBtn.disabled = false;
    } else {
      generateBtn.disabled = true;
    }
  })
})