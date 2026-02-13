// More Array Methods

// Original array
let arr = [5, 12, 8, 130, 44];
console.log("Original:", arr);

// includes → existence check
console.log("includes 12:", arr.includes(12)); // true
console.log("includes 20:", arr.includes(20)); // false

// indexOf → first index
console.log("indexOf 8:", arr.indexOf(8)); // 2
console.log("indexOf 100:", arr.indexOf(100)); // -1

// lastIndexOf → last index
let arr2 = [1, 2, 3, 2];
console.log("lastIndexOf 2:", arr2.lastIndexOf(2)); // 3

// find → returns value
let foundValue = arr.find(function (eachItem) {
  return eachItem > 10;
});
console.log("find > 10:", foundValue); // 12

// unshift → add at start
arr.unshift(1);
console.log("after unshift:", arr); // [1, 5, 12, 8, 130, 44]

// shift → remove from start
let removedFirst = arr.shift();
console.log("removed by shift:", removedFirst); // 1
console.log("after shift:", arr);

// concat → merge arrays
let a = [1, 2];
let b = [3, 4];
let merged = a.concat(b);
console.log("concat:", merged); // [1, 2, 3, 4]

// slice → copy part
let sliced = arr.slice(1, 4);
console.log("slice(1,4):", sliced);

// join → array to string
let skills = ["JS", "HTML", "CSS"];
let resultString = skills.join(", ");
console.log("join:", resultString); // JS, HTML, CSS

// sort → ascending order
let nums = [3, 1, 2];
nums.sort();
console.log("sorted:", nums); // [1, 2, 3]
