// Array Methods

// Array Methods
//  ├─ Finding        → includes, indexOf, lastIndexOf, find, findIndex
//  ├─ Adding         → push, unshift, splice
//  ├─ Removing       → pop, shift, splice
//  ├─ Combining      → concat, slice
//  ├─ Joining        → join
//  └─ Sorting        → sort


// splice() method
// splice() changes the original array by removing, adding, or replacing elements.

// 🔹 Syntax (CORE)
// arr.splice(start, deleteCount, item1, item2, ...);


// start → index to begin
// deleteCount → number of items to remove
// item1, item2 → items to add (optional)


// Removing Existing Elements
console.log("Removing Existing Elements");
let myArray = [5, "six", 2, 8.2];
console.log(myArray);
myArray.splice(2, 2);

console.log(myArray); // [5, "six"]


// Getting Deleted Items
console.log("Getting Deleted Items")

let myArray1 = [5, "six", 2, 8.2];
let deletedItems = myArray1.splice(2, 2);

console.log(deletedItems); // [2, 8.2]


// Adding New Items
console.log("Adding New Items")

let myArray2 = [5, "six", 2, 8.2];
myArray2.splice(2, 0, "one", false);

console.log(myArray2);
// [5, "six", "one", false, 2, 8.2]


// Replacing Existing Items
console.log("Replacing Existing Items")
let myArray3 = [5, "six", 2, 8.2];
myArray3.splice(2, 1, true);

console.log(myArray3);
// [5, "six", true, 8.2]


// findIndex() METHOD
// findIndex() returns the index of the first element that satisfies a condition.
// findIndex → gives position, not value

let arr = [5, 12, 8, 130, 44];

let itemIndex = arr.findIndex(function(eachItem) {
    return eachItem === 8;
});

console.log(itemIndex);



