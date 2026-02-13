// JSON NOTATION

// It is language for the web
// Client-side storage

// Server-side storage

// Client ↔ Server communication


// JavaScript Object

let person = {
    name : "Dhanu",
    age : 21,
    gender : "male"
};


// JSON OBJECT

let profile = {
    "name" : "Praveen",
    "age" : 21,
    "gender" : "Male"

};

//JSON METHODS

// 🔹 JSON.stringify()
// Converts a JavaScript value into a JSON string.

let jsonString = JSON.stringify(person);
console.log("JSON String", jsonString);

// 🔹 JSON.parse()
// Converts a JSON string back into a JavaScript object.

let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object",parsedObject);
