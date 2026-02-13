let headingElement = document.getElementById("heading");
console.log(headingElement);

headingElement.style.color = "blue";
headingElement.style.backgroundColor = "lightgray";

console.log(headingElement.innerText);
headingElement.innerText = "Hello Dhanu! Welcome to DOM Manipulation.";

console.log(headingElement.innerText);

/*
🧠 Core Reason (Interview Gold)

👉 document exists ONLY in the browser, NOT in Node.js

Environment	Has document?
Browser (Chrome, Edge, Firefox)	✅ YES
Node.js (Terminal)	❌ NO
Why?

document is part of the DOM (Document Object Model)

DOM is created only when HTML is rendered by a browser

Node.js runs JavaScript without a browser

So when Node sees:

document.getElementById(...)


It says:

❌ “I don’t know what document is”


HTML + CSS + JS  → Browser → DOM → document ✅
JS alone         → Node.js → No DOM → document ❌

*/



