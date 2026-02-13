// Input elements collect user data in web pages.

let inputElement = document.getElementById('textInput');
let buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', function() {
    // Retrieve the value from the input element when the button is clicked
    let inputValue = inputElement.value;
    console.log('Input value on button click:', inputValue);
}
);






