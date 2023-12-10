const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const greeting = document.querySelector("#loginUserName");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

const plusHidden = document.querySelector("#clock");
const plusHidden1 = document.querySelector("#goodword");

function loginsubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  greeting.innerText = `User:${username}`;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  plusHidden.classList.remove(HIDDEN_CLASSNAME);
  plusHidden1.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  plusHidden.classList.add(HIDDEN_CLASSNAME);
  plusHidden1.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginsubmit);
} else {
  greeting.innerText = `User:${savedUserName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
