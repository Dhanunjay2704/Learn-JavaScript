/* ============================
   PHASE 1–6 MASTER PROJECT
============================ */

/* ---------- VARIABLES & DOM ---------- */
let form = document.getElementById("userForm");
let nameEl = document.getElementById("name");
let nameError = document.getElementById("nameError");
let statusEl = document.getElementById("status");
let usersList = document.getElementById("usersList");
let searchInput = document.getElementById("searchInput");
let spinner = document.getElementById("spinner");

/* ---------- LOCAL STORAGE ---------- */
let users = JSON.parse(localStorage.getItem("users")) || [];

/* ---------- BLUR EVENT ---------- */
nameEl.addEventListener("blur", function () {
  if (nameEl.value === "") {
    nameError.textContent = "Name is required";
  } else {
    nameError.textContent = "";
  }
});

/* ---------- FORM SUBMIT ---------- */
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nameEl.value === "") {
    nameError.textContent = "Name is required";
    return;
  }

  let gender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  let user = {
    name: nameEl.value,
    status: statusEl.value,
    gender: gender
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers(users);

  form.reset();
});

/* ---------- SEARCH EVENT ---------- */
searchInput.addEventListener("keyup", function () {
  let keyword = searchInput.value.toLowerCase();

  let filteredUsers = users.filter(function (user) {
    return user.name.toLowerCase().includes(keyword);
  });

  renderUsers(filteredUsers);
});

/* ---------- RENDER USERS ---------- */
function renderUsers(list) {
  usersList.innerHTML = "";

  list.forEach(function (user, index) {
    let li = document.createElement("li");
    li.textContent =
      user.name + " - " + user.gender + " (" + user.status + ")";
    usersList.appendChild(li);
  });
}

/* ---------- FETCH USERS (HTTP) ---------- */
function fetchUsersFromAPI() {
  spinner.style.display = "inline-block";

  fetch("https://gorest.co.in/public-api/users", { method: "GET" })
    .then(function (response) {
      console.log("Status:", response.status);
      return response.json();
    })
    .then(function (data) {
      spinner.style.display = "none";
      console.log("API Users:", data.data);
    });
}

/* ---------- CALLBACK + SCHEDULER ---------- */
setTimeout(function () {
  fetchUsersFromAPI();
}, 2000);

/* ---------- INITIAL LOAD ---------- */
renderUsers(users);
