/* =========================
   EXECUTION CONTEXT
   (Created on load, reset on reload)
========================= */

/* =========================
   ARRAY METHODS (PHASE 3)
========================= */
let numbers = [10, 20, 30, 40, 20];

// includes
console.log(numbers.includes(20)); // true

// indexOf & lastIndexOf
console.log(numbers.indexOf(20));     // 1
console.log(numbers.lastIndexOf(20)); // 4

// find
let foundItem = numbers.find(function(eachItem) {
  return eachItem > 25;
});
console.log(foundItem); // 30

// findIndex
let foundIndex = numbers.findIndex(function(eachItem) {
  return eachItem > 25;
});
console.log(foundIndex); // 2

// unshift & shift
numbers.unshift(5);
numbers.shift();

// concat & slice
let moreNumbers = [50, 60];
let combined = numbers.concat(moreNumbers);
let sliced = combined.slice(1, 4);

// join & sort
console.log(combined.join(", "));
combined.sort();

/* =========================
   DOM – CHECKBOX & LABEL
========================= */
let container = document.getElementById("container");

// checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.id = "statusCheckbox";
container.appendChild(checkbox);

// label
let label = document.createElement("label");
label.textContent = "Completed";
label.htmlFor = "statusCheckbox";
container.appendChild(label);

// toggle class on click
checkbox.onclick = function () {
  label.classList.toggle("checked");
  console.log("Is Checkbox checked: ", checkbox.checked);
};

/* =========================
   PLACEHOLDER + ALERT
========================= */
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your name";
container.appendChild(input);

let alertBtn = document.createElement("button");
alertBtn.textContent = "Validate";
container.appendChild(alertBtn);

alertBtn.onclick = function () {
  if (input.value === "") {
    alert("Enter Valid Text");
  } else {
    alert("Hello, " + input.value);
  }
};

/* =========================
   TEXTAREA + LOCAL STORAGE
========================= */
let textArea = document.createElement("textarea");
textArea.rows = 4;
textArea.cols = 30;
textArea.id = "message";
container.appendChild(textArea);

let saveBtn = document.createElement("button");
saveBtn.textContent = "Save Message";
container.appendChild(saveBtn);

saveBtn.onclick = function () {
  localStorage.setItem("userText", textArea.value);
};

/* restore on reload */
let storedText = localStorage.getItem("userText");

if (storedText === null) {
  textArea.textContent = "";
} else {
  textArea.textContent = storedText;
}

/* =========================
   JSON (STRINGIFY & PARSE)
========================= */
let profile = {
  name: "Dhanu",
  age: 21,
  city: "Delhi"
};

let jsonString = JSON.stringify(profile);
localStorage.setItem("profileData", jsonString);

let parsedProfile =
JSON.parse(localStorage.getItem("profileData"));

console.log(parsedProfile.name);

/* =========================
   removeChild()
========================= */
let removeBtn = document.createElement("button");
removeBtn.textContent = "Remove Textarea";
container.appendChild(removeBtn);

removeBtn.onclick = function () {
  container.removeChild(textArea);
};

/* =========================
   null VALUE
========================= */
let selectedColor = null;
console.log(selectedColor);           // null
console.log(typeof selectedColor);    // object
