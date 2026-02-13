// to set the key value pair in the local storage
ocalStorage.setItem("fullName", "Kaya Dhanunjaya");
localStorage.setItem("city", "Delhi");


// to the get the value 
let name = localStorage.getItem("fullName");
console.log(name);

// to remove an item from the local storage
localStorage.removeItem("city");

// to clear all the items present in the local storage
localStorage.clear();