/* ======================================
   PHASE 6 – HTML FORMS CONSOLIDATION
====================================== */

let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameErrorEl = document.getElementById("nameError");
let statusEl = document.getElementById("status");

/* ======================================
   FORM SUBMIT EVENT
====================================== */
myFormEl.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  let selectedGender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  if (nameEl.value === "") {
    nameErrorEl.textContent = "Name is required";
  } else {
    nameErrorEl.textContent = "";
    console.log("Name:", nameEl.value);
    console.log("Status:", statusEl.value);
    console.log("Gender:", selectedGender);
  }
});

/* ======================================
   BLUR EVENT
====================================== */
nameEl.addEventListener("blur", function () {
  if (nameEl.value === "") {
    nameErrorEl.textContent = "Name cannot be empty";
  } else {
    nameErrorEl.textContent = "";
  }
});
