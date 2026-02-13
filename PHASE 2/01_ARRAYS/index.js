// ARRAYS  DATA STRUCTURE

// let myArray = [5, "six", 1.2, true, null, undefined, {name: "John"}, [1, 2, 3]];
// console.log(myArray);


let myArray = [5, "six", 2, 8.2];

console.log("Original Array:", myArray);

// Accessing elements
console.log("First Element:", myArray[0]);
console.log("Third Element:", myArray[2]);

// Modifying elements
myArray[1] = "seven";
console.log("Modified Array:", myArray);

// Array length
console.log("Array Length:", myArray.length);

// Adding elements
myArray.push("new element");
console.log("Array after push:", myArray);


// Removing elements
let removedElement = myArray.pop();
console.log("Removed Element:", removedElement);
console.log("Array after pop:", myArray);


// Iterating over array
console.log("Iterating over array:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
