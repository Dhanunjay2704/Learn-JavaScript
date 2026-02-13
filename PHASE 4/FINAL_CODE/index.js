/* =========================
   CALLBACK FUNCTION
========================= */
function greetUser(callback) {
    console.log("Hello");
    callback();
    console.log("Good Morning");
}

function printName() {
    console.log("Dhanunjaya");
}

greetUser(printName);

/* =========================
   SCHEDULERS – setInterval
========================= */
let counter = 0;
let intervalId;

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

startBtn.onclick = function () {
    intervalId = setInterval(function () {
        console.log("Interval Count:", counter);
        counter = counter + 1;
    }, 1000);
};

stopBtn.onclick = function () {
    clearInterval(intervalId);
};

/* =========================
   setTimeout & clearTimeout
========================= */
let timeoutBtn = document.getElementById("timeoutBtn");

timeoutBtn.addEventListener("click", function () {
    console.log("Time out button preed");
    let timeoutId = setTimeout(function () {
        alert("Timeout executed after 2 seconds");
    }, 2000);

    // cancel immediately for demo
    clearTimeout(timeoutId);
});

/* =========================
   EVENT LISTENERS (3 ways)
========================= */

/* onevent listener */
let inputEl = document.getElementById("textInput");

inputEl.onkeyup = function () {
    console.log("Key released");
};

/* addEventListener */
inputEl.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
});

/* =========================
   EVENT OBJECT
========================= */
let outputEl = document.getElementById("output");

inputEl.addEventListener("keydown", function (event) {
    outputEl.textContent =
        "Event Type: " + event.type +
        " | Key: " + event.key;

    console.log("Target Element:", event.target);
});

/* =========================
   OPERATORS
========================= */
let a = 10;
let b = "10";

console.log(a == b);   // true
console.log(a === b);  // false
console.log(a !== b);  // true

let age = 25;

if (age >= 18 && age <= 60) {
    console.log("Eligible Age Group");
}

console.log(!(age < 18)); // NOT operator
