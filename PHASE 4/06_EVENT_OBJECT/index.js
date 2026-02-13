// Event Object - whenever an event occurs the browser creates an event object containig the details about the event.

/*
Event happens → Browser creates event object
To know what event occurred

To know which element triggered it

To get event-specific data (like pressed key)

the event object provide the information about 
*/

/*
The event object has properties and methods, such as:

    type
    target
    key
    timeStamp
    stopPropagation()

Not all the events have same kind of propeties


*/


// event.type - gives the name of the event occured
// event.target - gives the HTML element that triggered the event
// event.key - get the value of the key clicked by the user (only for the keyboard events)

let inputEl = document.getElementById("input");

function printKeydown(event){
    console.log("Event object", event);
    console.log("Event type: ", event.type);
    console.log("Event target: ", event.target);
    console.log("Event key: ", event.key);
}

inputEl.addEventListener("keydown", printKeydown);



let buttonEl = document.getElementById("button");
buttonEl.addEventListener("click",  (event) => {
    console.log(event);
});




