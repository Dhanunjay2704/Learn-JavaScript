/* =====================================
   PHASE 5 – COMPLETE HTTP (GoREST)
===================================== */

/* -------- URL (Protocol + Domain + Path) -------- */
let API_URL = "https://gorest.co.in/public-api/users";

/* -------- ACCESS TOKEN -------- */
let ACCESS_TOKEN = "0f6c877cb49d314a05886caca4f7e55805c3c9c3ba9391fd3bbc67a476105ce6";

/* -------- DOM Elements -------- */
let spinner = document.getElementById("spinner");
let usersList = document.getElementById("usersList");
let searchInput = document.getElementById("searchInput");

let getBtn = document.getElementById("getBtn");
let postBtn = document.getElementById("postBtn");
let putBtn = document.getElementById("putBtn");
let deleteBtn = document.getElementById("deleteBtn");

/* -------- Utility -------- */
function showSpinner() {
  spinner.style.display = "inline-block";
}

function hideSpinner() {
  spinner.style.display = "none";
}

/* =====================================
   GET REQUEST (READ)
===================================== */
function getUsers() {
  showSpinner();

  let options = {
    method: "GET"
  };

  fetch(API_URL, options)
    .then(function (response) {
      console.log("GET Status:", response.status);
      return response.json();
    })
    .then(function (data) {
      hideSpinner();
      displayUsers(data.data);
    });
}

function displayUsers(users) {
  usersList.innerHTML = "";
  let searchValue = searchInput.value.toLowerCase();

  users.forEach(function (user) {
    if (user.name.toLowerCase().includes(searchValue)) {
      let li = document.createElement("li");
      li.textContent = user.name + " (" + user.email + ")";
      usersList.appendChild(li);
    }
  });
}

/* =====================================
   POST REQUEST (CREATE)
===================================== */
function createUser() {
  showSpinner();

  let data = {
    name: "Rahul",
    gender: "male",
    email: "rahul" + Date.now() + "@gmail.com",
    status: "active"
  };

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + ACCESS_TOKEN
    },
    body: JSON.stringify(data)
  };

  fetch(API_URL, options)
    .then(function (response) {
      console.log("POST Status:", response.status);
      return response.json();
    })
    .then(function (jsonData) {
      hideSpinner();
      console.log("Created User:", jsonData);
      getUsers();
    });
}

/* =====================================
   PUT REQUEST (UPDATE)
===================================== */
function updateUser() {
  showSpinner();

  let userId = 1359; // existing user id

  let data = {
    name: "Rahul Updated"
  };

  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + ACCESS_TOKEN
    },
    body: JSON.stringify(data)
  };

  fetch(API_URL + "/" + userId, options)
    .then(function (response) {
      console.log("PUT Status:", response.status);
      return response.json();
    })
    .then(function (jsonData) {
      hideSpinner();
      console.log("Updated User:", jsonData);
      getUsers();
    });
}

/* =====================================
   DELETE REQUEST (DELETE)
===================================== */
function deleteUser() {
  showSpinner();

  let userId = 1359; // existing user id

  let options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + ACCESS_TOKEN
    }
  };

  fetch(API_URL + "/" + userId, options)
    .then(function (response) {
      console.log("DELETE Status:", response.status);
      hideSpinner();
      getUsers();
    });
}

/* =====================================
   EVENTS
===================================== */
getBtn.onclick = getUsers;
postBtn.onclick = createUser;
putBtn.onclick = updateUser;
deleteBtn.onclick = deleteUser;

searchInput.addEventListener("keyup", getUsers);

/* Initial Load */
getUsers();
