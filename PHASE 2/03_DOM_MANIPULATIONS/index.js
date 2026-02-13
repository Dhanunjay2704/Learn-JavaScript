// DOM MANIPULATIONS/index.js

// Create a new heading element
let headingElement = document.createElement('h1');
headingElement.textContent = 'Hello, DOM Manipulations!';


// Append the heading element to the body of the document
document.body.appendChild(headingElement);

// Appending to an existing div with id 'container'
let divElement = document.getElementById('container');

let paragraphElement = document.createElement('p');
paragraphElement.textContent = 'This is a dynamically added paragraph.';

divElement.appendChild(paragraphElement);

// Add a button element with a click event listener
let buttonElement = document.createElement('button');
buttonElement.textContent = 'Click Me';
divElement.appendChild(buttonElement);

buttonElement.addEventListener('click', function () {
    console.log('Button was clicked!');
});

// Modify styles of the heading element
headingElement.style.color = 'blue';
headingElement.style.textAlign = 'center';

// adding css to the paragraph
paragraphElement.classList.add('highlight');

// remove the button after it is clicked
buttonElement.addEventListener('click', function () {
    buttonElement.remove();
    paragraphElement.textContent = 'The button has been removed.';
    paragraphElement.classList.remove('highlight');
});





