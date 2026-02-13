// function declaration

// Function declarations are hoisted means
// 👉 You can call the function before it is written in the code, and it will still work.

function showMessage() {
    console.log("Hello, World!");
}

showMessage();

function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum);


// function expression

let showMessageExpression = function() {
    console.log("Hello from function expression!");
};
showMessageExpression();

