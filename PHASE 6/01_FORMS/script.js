// HTML FORMS - they are used to collect data from the user and send it for processing. 
/*
User Input → Form → Submit → Process

HTML <form> ELEMENT - It holds the input elements 
Syntax:
<form> </form>

Clicking a button
Pressing Enter inside an input
👉 triggers the submit event


--> By default, form submission reloads the page.
event.preventDefault() stops the default behaviour.
it prevents page reload on form submit.

*/

let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload
});


// FORM EVENTS
// It occurs during the interaction with the form elements.

// common form events:
// 1. submit - when the form is submitted
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function() {
    alert("Form Submitted!");
});



// 2. change - when the value of an input element changes and the element loses focus
let nameInput = document.getElementById("username");
nameInput.addEventListener("change", function() {
    console.log("Name changed to: " + nameInput.value);
});


// 3. input - when the value of an input element changes (real-time)
let emailInput = document.getElementById("email");
emailInput.addEventListener("input", function() {
    console.log("Email input: " + emailInput.value);
});

// 4. focus - when an input element gains focus
let passwordInput = document.getElementById("password");
passwordInput.addEventListener("focus", function() {
    console.log("Password input focused");
});


// 5. blur - when an input element loses focus  
passwordInput.addEventListener("blur", function() {
    console.log("Password input lost focus");
});


// Other HTML ELEMENTS
// <select> - creates a dropdown list
// syntax : <select> <option> </option> </select>

// <option> - defines an option in a dropdown list
// syntax : <option value="value1"> Option 1 </option>

// value  attribute - specifies the value to be sent to the server when the form is submitted.
// selected attribute - pre-selects an option in the dropdown list.


let countrySelect = document.createElement("select");
let option1 = document.createElement("option");
option1.value = "usa";
option1.text = "USA";
let option2 = document.createElement("option");
option2.value = "canada";
option2.text = "Canada";


countrySelect.add(option1);
countrySelect.add(option2);
document.body.appendChild(countrySelect);



// Radio input - allows selecting one option from a list
// name attribute -  groups radio buttons together
// checked attribute - pre-selects a radio button
let labelMale = document.createElement("label");
labelMale.innerText = "Male";
document.body.appendChild(labelMale);


let genderMale = document.createElement("input");
genderMale.type = "radio";
genderMale.name = "gender";
genderMale.value = "male";
document.body.appendChild(genderMale);



let labelFemale = document.createElement("label");
labelFemale.innerText = "Female";
document.body.appendChild(labelFemale);

let genderFemale = document.createElement("input");
genderFemale.type = "radio";
genderFemale.name = "gender";
genderFemale.value = "female";
document.body.appendChild(genderFemale);    






