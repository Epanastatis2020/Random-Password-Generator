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
      //console.log(passwordConfigArray);
    }
    if(upperCharactersCheck.checked){
      passwordConfigArray.push.apply(passwordConfigArray, upperCharactersArray);
      //console.log(passwordConfigArray);
    }
    if(numericCharactersCheck.checked){
     passwordConfigArray.push.apply(passwordConfigArray, numericCharactersArray);
     //console.log(passwordConfigArray);
    }
    if(specialCharactersCheck.checked){
      passwordConfigArray.push.apply(passwordConfigArray, specialCharactersArray);
      //console.log(passwordConfigArray);
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
  //console.log(ranVar);
  return ranVar;
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
document.querySelectorAll('.options input').forEach(item => {
  item.addEventListener('click', event => {
    if (lowerCharactersCheck.checked || upperCharactersCheck.checked || numericCharactersCheck.checked || specialCharactersCheck.checked) {
      generateBtn.disabled = false;
    } else {
      generateBtn.disabled = true;
    }
  })
})