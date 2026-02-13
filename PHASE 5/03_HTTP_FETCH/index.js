// HTTP Requests using JavaScript (fetch)
// fetch() is used to send the http requests and fetch resources from the internet \

/*  
SYNTAX: 
fetch(URL, OPTIONS);

URL → address of the resource
OPTIONS → request configuration

Request Configuration
We can configure the fetch request with many options like,
•	Request Method
•	Headers
•	Body
•	Credentials
•	Cache, etc.


fetch() returns a Promise that resolves to a Response object.

We configure HTTP requests by passing an options object.

*/

let options = {  // Creates an object named options
    method: "GET",  // tells the server : I want to read the data
    headers: {
        "Content-Type": "application/json"
    },
    // body: JSON.stringify(data)
};
// options → how request behaves

// fetch("https://gorest.co.in/public-api/users", options);

// Calls the API endpoint
// Sends a GET request
// Server responds with user data in JSON format






// HTTP methods using fetch()


// GET REQUEST - Retrieve the data from the server. GET is the default method if options are not provided.
let getOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
}


// fetch("https://gorest.co.in/public-api/users", getOptions)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonData) {
//         console.log(jsonData);
//     });




// POST REQUEST - send data to the server

let data = {
    "name" : "Kaya Praveen",
    "gender" : "Male",
    "email" : "Kaya@test.com",
    "status" : "Active"
};

let postOptions = {
    method : "POST", // Tells server: create new data
    headers : {
        "Content-Type" : "application/json", // Says i am sending the data in the JSON format
        Accept : "application/json", //  I want the response in JSON format
        Authorization : "Bearer 0f6c877cb49d314a05886caca4f7e55805c3c9c3ba9391fd3bbc67a476105ce6" // Auth token to verify client identity
    },

    body : JSON.stringify(data) // converts JS object to JSON string
};

// fetch("https://gorest.co.in/public-api/users", postOptions)
// .then(function(response){
//     return response.json(); // converts JSON stream to usable JSON
// })
// .then(function(jsonData){
//     console.log(jsonData) // prints the response data
// })
// .catch(error => {
//     console.log(error); // handle errors
// })


// GET this user by ID
let getUserOptions = {
    method : "GET",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
        Authorization : "Bearer 0f6c877cb49d314a05886caca4f7e55805c3c9c3ba9391fd3bbc67a476105ce6"
    }
};

// fetch("https://gorest.co.in/public-api/users/8340450", getUserOptions)
// .then(function(response){
//     return response.json();
// })
// .then(function(jsonData){
//     console.log(jsonData);
// })
// .catch(error => {
//     console.log(error);
// })







// PUT REQUEST - Update a existing resource

let putData = {
    name : "Kaya Praveen Salaar",
};

let putUserOptions = {
    method : "PUT",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
        Authorization : "Bearer 0f6c877cb49d314a05886caca4f7e55805c3c9c3ba9391fd3bbc67a476105ce6"
    },
    body : JSON.stringify(putData)
};

// fetch("https://gorest.co.in/public-api/users/8340450", putUserOptions)
// .then(function(response){
//     return response.json();
// })
// .then(function(jsonData){
//     console.log(jsonData);
// })
// .catch(error => {
//     console.log(error);
// })







// DELETE REQUEST - Delete a specified resource

let deleteUserOptions = {
    method : "DELETE",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
        Authorization : "Bearer 0f6c877cb49d314a05886caca4f7e55805c3c9c3ba9391fd3bbc67a476105ce6"
    },
};


// fetch("https://gorest.co.in/public-api/users/8340450", deleteUserOptions)
// .then(function(response){
//     return response.json();
// })
// .then(function(jsonData){
//     console.log(jsonData);
// })
// .catch(error => {
//     console.log(error);
// })


// fetch() returns a response object that contains response details 

/* 
| Property / Method | Meaning                |
| ----------------- | ---------------------- |
| `status`          | HTTP status code       |
| `statusText`      | Status message         |
| `headers`         | Response headers       |
| `url`             | Response URL           |
| `text()`          | Get response as text   |
| `json()`          | Parse response as JSON |

*/