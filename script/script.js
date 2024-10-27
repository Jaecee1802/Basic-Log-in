const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("log-in-submit");
const loginErrorMess = document.getElementById("error-message");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.pass.value;

    if(username === "crim" && password === "password"){
        alert("Log-in Successful");
        location.reload();
    }

    else if(username != "crim" && password != "password"){
        loginErrorMess.innerHTML = "Enter both fields!";
        loginErrorMess.style.color = "Red";
    }

    else if(username != "crim" && password === "password"){
        loginErrorMess.innerHTML = "Incorrect Username!";
        loginErrorMess.style.color = "Red";
    }

    else if(username === "crim" && password != "password"){
        loginErrorMess.innerHTML = "Incorrect Password!";
        loginErrorMess.style.color = "Red";
    }

})