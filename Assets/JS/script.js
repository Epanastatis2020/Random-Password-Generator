// Assignment Code
const generateBtn = document.querySelector("#generate");

// Array of special characters
const specialCharactersArray = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters
const numericCharactersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters
const lowerCaseCharactersArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters 
const upperCaseCharactersArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Empty array to represent configuration of above arrays
const passwordConfigArrayPH = [];

//Create variables to track checkbox status
const lowerCharactersCheck = document.querySelector('#lowerCharacters');
const upperCharactersCheck = document.querySelector('#upperCharacters');
const numericCharactersCheck = document.querySelector('#numericCharacters');
const specialCharactersCheck = document.querySelector('#specialCharacters');

//Create variables to track password length slider (and display value in HTML)
const range = document.getElementById("passwordLength");
const lengthOutput = document.getElementById("lengthValue");
lengthOutput.innerHTML = range.value; 

range.oninput = function () {
  lengthOutput.innerHTML = this.value;
  passwordConfig.passwordLength = this.value;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {


}

function passwordConfiguration () {
  lowerCharactersCheck.addEventListener('change', function(e){
    if(lowerCharactersCheck.checked){
      const passwordConfigArray = passwordConfigArrayPH.concat(lowerCaseCharactersArray);
    }
  })
  upperCharactersCheck.addEventListener('change', function(e){
    if(upperCharactersCheck.checked){
      Array.prototype.push.apply('passwordConfigArray', 'upperCaseCharactersArray');
    }
  })
  numericCharactersCheck.addEventListener('change', function(e){
    if(numericCharactersCheck.checked){
      Array.prototype.push.apply('passwordConfigArray', 'numericCharactersArray');
    }
  })
  specialCharactersCheck.addEventListener('change', function(e){
    if(specialCharactersCheck.checked){
      Array.prototype.push.apply('passwordConfigArray', 'specialCharactersArray');
    }
  })
};

passwordConfiguration();

console.log(passwordConfigArray);

console.log(lowerCharactersCheck);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

