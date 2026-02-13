// SCHEDULERS
/*
They are used to control when a callback function runs.
callback function + time = scheduler

Schedulers
 ├─ setInterval()  → repeat
 ├─ clearInterval() → stop repeat
 ├─ setTimeout()   → run once
 └─ clearTimeout() → cancel run


*/

// setInterval() - 
/*
Runs a callback function repeatedly after a fixed time interval.

🔹 Syntax
setInterval(function, delay);


function → callback

delay → time in milliseconds
(1000 ms = 1 second)


setInterval() returns a unique ID, used to stop it later.
*/

// let counter = 0;
// setInterval(function(){
//     console.log(counter);
//     counter = counter + 1;
// }, 1000);



// clearInterval()
// Stops a scheduled interval created by setInterval().
// let count = 0;
// let uniqueId = setInterval(function(){
//     console.log(count);
//     count = count + 1;
// }, 1000);

// clearInterval(uniqueId);



// setTimeout() - executes a callback function once after a specified delay
/*
    Timeout -> wait -> run once
    used for one time delayed execution

    🔹 Syntax
        setTimeout(function, delay);


        function → callback function

        delay → time in milliseconds
        (1000 ms = 1 second)
*/

// let value = 0;
// setTimeout(function(){
//     console.log(value);
//     value = value + 1;
// }, 2000);

// RETURN VALUE OF setTimeout() (IMPORTANT)
// let uniqueId = setTimeout(function () {
//   console.log("Executed");
// }, 1000);

// setTimeout() returns a unique ID used to cancel execution.



// clearTimeout()
// clearTimeout() cancels a scheduled timeout before it runs.

// clearTimeout(uniqueId);

let num = 0;
let uniqueId = setTimeout(() => {
    console.log(num);
    num++;
}, 1000)

clearTimeout(uniqueId);
console.log("Completed");