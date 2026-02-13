// DOM htmlFor

let labelElement = document.getElementById("graduatedLabel");
console.log(labelElement.htmlFor);

let checkboxElement = document.getElementById("myCheckbox");
console.log(checkboxElement.id);

checkboxElement.checked = false;


// alert message when checkbox is checked
checkboxElement.addEventListener("change", function () {
    if (checkboxElement.checked) {
        console.log("Checkbox is checked!", checkboxElement.checked);
        alert("Checkbox is checked!");
    }
});

// DOM method : remove child()
let parentElement = document.getElementById("parentElement");
let childElement = document.getElementById("childElement");
let childButton = document.getElementById("childButton");

childButton.addEventListener("click", function () {
    parentElement.removeChild(childElement);
    console.log("Child element removed from parent.");
});

// DOM Method : classList.toggle()
let paragraphElement = document.getElementById("paragraph");

function toggle(){
    paragraphElement.classList.toggle("coloring");
}

// toggle - ON / OFF 





