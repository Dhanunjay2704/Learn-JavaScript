// Eventlisteners allows javascript to respond to user actions on HTML elements

/*
User action → Event → Callback function runs
it connects useractions with javascript logic
*/ 

/* 
    Three ways to add event listeners
    1. inline
    2. onevent
    3. addEventListener
*/

/*
1. inline - event handling code is written directly inside HTML.
HTML calls js function direclty
*/

function greeting(){
    console.log("inline event listener greeting")
    let containerEl = document.getElementById("container");
    let paraEl = document.createElement("p");
    paraEl.textContent = "Hello Everyone this is inline event listener";
    containerEl.appendChild(paraEl);
}





/*
2. ONEVENT LISTENERS (onclick) - assigned using DOM  property
Only one handler per event (new one overwrites old one)
*/

let buttonEl = document.getElementById("button");
buttonEl.onclick = function() {
    console.log("onevent listener greeting");   
    let containerEl = document.getElementById("container2");
    let paraEl = document.createElement("p");
    paraEl.textContent = "Hello Everyone this is onevent listener";
    containerEl.appendChild(paraEl);
}


/*
3. addEventListener (modern approach)
adds an event listener without overwriting existing ones
Syntax : 
    element.addEventListener(event, function);
        event → event name (string)
        function → callback


*/

let buttonElement = document.getElementById("button2");
buttonElement.addEventListener("click", function(){
    console.log("addEventListenergreeting");   
    let containerEl = document.getElementById("container3");
    let paraEl = document.createElement("p");
    paraEl.textContent = "Hello Everyone this is addEventListener";
    containerEl.appendChild(paraEl);
});



let button = document.getElementById("btn2");

button.addEventListener("click", () => {
    alert("First handler");
});

button.addEventListener("click", () => {
    alert("Second handler");
});

