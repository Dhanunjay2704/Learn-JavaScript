// CALLBACK FUNCTION
// A callback is a function passed as an argument to another function and executed later.
// Function → passed → executed inside another function

/*

Main Function
   ↓
Calls another function (callback)

*/


// PASSING A FUNCTION AS AN ARGUMENT - A function can be passed directly as an argument.
function displayGreeting(displayName){
    console.log("starting ");
    displayName();
    console.log("Ending");
}

displayGreeting(function(){
    console.log("Kaya Dhanunjaya");
});

// PASSING A FUNCTION NAME AS AN ARGUNEMNT - We pass only the function name, not ().

function displayMessage(displayNameFunction){
    console.log("function 2 starting");
    displayNameFunction();
    console.log("Function 2 ending");
}

function displayNameFunction(){
    console.log("Kaya Dhanunjaya");
}

displayMessage(displayNameFunction)


// PASSING A FUNCTION EXPRESSION AS AN ARGUMENT - A function stored in a variable can be passed as a callback.
function displayExpression(displayNameExpression){
    console.log("Expression function starting");
    displayNameExpression();
    console.log("Exprssion function ending");
}

let displayNameExpression = function(){
    console.log("Kaya Dhanunjaya");
}

displayExpression(displayNameExpression);
