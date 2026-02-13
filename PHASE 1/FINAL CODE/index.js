// VARIABLE DECLARATION
let message;
console.log(message); // undefined

// DOM SELECTION
let heading = document.getElementById("heading");
let inputElement = document.getElementById("userInput");

// EVENT FUNCTION
function handleClick() {

  // GET INPUT VALUE (string)
  let inputValue = inputElement.value;
  console.log(typeof inputValue); // string

  // STRING → NUMBER
  let numberValue = parseInt(inputValue);
  console.log(typeof numberValue); // number

  // RANDOM NUMBER (1–100)
  let randomNumber = Math.ceil(Math.random() * 100);

  // CONDITIONAL STATEMENT
  if (numberValue === randomNumber) {
    message = "🎉 You guessed it right!";
    heading.style.color = "green";
  } else {
    message = "❌ Try again!";
    heading.style.color = "red";
  }

  // DOM TEXT MANIPULATION
  heading.textContent = message;

  // STYLE MANIPULATION (camelCase)
  heading.style.backgroundColor = "lightyellow";
}





