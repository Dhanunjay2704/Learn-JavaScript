// Data Types - Primitives and Non-Primitives

// Primitive Data Types
let stringData = "Hello, World!"; // String
let numberData = 42; // Number
let booleanData = true; // Boolean
let undefinedData; // Undefined
let nullData = null; // Null

console.log("Primitive Data Types:");
console.log("String:", stringData);
console.log("Number:", numberData);
console.log("Boolean:", booleanData);
console.log("Undefined:", undefinedData);
console.log("Null:", nullData);

// Non-Primitive Data Types
let arrayData = [1, 2, 3, 4, 5];
let objectData = { name: "Alice", age: 30, city: "New York" };
let functionData = function() {
    return "This is a function!";
}

console.log("\nNon-Primitive Data Types:");
console.log("Array:", arrayData);
console.log("Object:", objectData);
console.log("Function Output:", functionData());



// type of operator
console.log("\nUsing typeof operator:");
console.log("Type of stringData:", typeof stringData);
console.log("Type of numberData:", typeof numberData);
console.log("Type of booleanData:", typeof booleanData);
console.log("Type of undefinedData:", typeof undefinedData);
console.log("Type of nullData:", typeof nullData); // Note: this will return 'object' due to a quirk in JavaScript

console.log("Type of arrayData:", typeof arrayData);
console.log("Type of objectData:", typeof objectData);


// StrinG Conversion
// parseInt and parseFloat
let numString = "123.45";
let convertedInt = parseInt(numString);
let convertedFloat = parseFloat(numString);
console.log("\nString Conversion:");
console.log("Original String:", numString);
console.log("Converted to Integer:", convertedInt);
console.log("Converted to Float:", convertedFloat);


console.log(parseInt("100abc")); // 100
console.log(parseFloat("12.34xyz"));    // 12.34
console.log(Number("56.78")); // 56.78
console.log(Number("abc")); // NaN
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false   