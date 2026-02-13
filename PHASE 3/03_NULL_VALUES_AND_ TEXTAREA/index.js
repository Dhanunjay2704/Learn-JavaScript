// null value - value is intentionally empty


let selectedColor = null;
console.log(selectedColor);
console.log(typeof selectedColor);
// null is different from undefined

let value;
console.log(value);


// undefined → not assigned
// null      → intentionally empty




// TEXT AREA
let saveButtonEl = document.getElementById("saveButton");
let messageEl = document.getElementById("message");

saveButtonEl.onclick = function(){
    let userEnteredText = messageEl.value;
    localStorage.setItem("message", userEnteredText);
}




