const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

loginForm.style.textAlign = "center";

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USER_NAME, username);

  paintGreetins(username);
}

function paintGreetins(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.style.textAlign = "center";
  greeting.style.color = "White";
}

const savedUserName = localStorage.getItem(USER_NAME);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetins(savedUserName);
}
