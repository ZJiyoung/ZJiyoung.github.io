const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
    greeting.innerText = `Hello ${username} hahaha`; 
    greeting.classList.remove(HIDDEN_CLASS);
}



function onLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASS); 
    
    const username = loginInput.value; 
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username) 

    paintGreetings(username);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername===null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASS); 
    loginForm.addEventListener("submit", onLoginSubmit); 
} else {
    //show the greetings
    paintGreetings(savedUsername);
}

