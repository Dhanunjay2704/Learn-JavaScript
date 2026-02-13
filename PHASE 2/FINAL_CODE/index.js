/* ======================
   ARRAY
====================== */
let skills = ["JavaScript", "HTML", "CSS"];
skills.push("React");
skills.pop();

/* ======================
   FUNCTION DECLARATION
====================== */
function showMessage() {
  console.log("Hello from function declaration");
}
showMessage();

/* ======================
   FUNCTION EXPRESSION
====================== */
let greet = function () {
  console.log("Hello from function expression");
};
greet();

/* ======================
   OBJECT
====================== */
let person = {
  firstName: "Rahul",
  age: 28,
  skills: skills,
  run: function () {
    console.log("Start Running");
  },
  car: {
    brand: "Audi",
    model: "A6"
  }
};

/* ACCESS OBJECT */
console.log(person.firstName);
console.log(person["age"]);
console.log(person.skills[0]);
console.log(person.car.brand);
person.run();

/* ======================
   DOM – CREATE & APPEND
====================== */
let container = document.getElementById("container");

let heading = document.createElement("h1");
heading.textContent = "Web Technologies";
container.appendChild(heading);

/* ======================
   ADD BUTTON
====================== */
let addBtn = document.createElement("button");
addBtn.textContent = "Add Style";
container.appendChild(addBtn);

/* ======================
   REMOVE BUTTON
====================== */
let removeBtn = document.createElement("button");
removeBtn.textContent = "Remove Style";
container.appendChild(removeBtn);

/* ======================
   EVENTS + CLASSLIST
====================== */
addBtn.onclick = function () {
  heading.textContent = "4.0 Technologies";
  heading.classList.add("heading");
};

removeBtn.onclick = function () {
  heading.classList.remove("heading");
};
