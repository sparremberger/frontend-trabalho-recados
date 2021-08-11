invalid = document.getElementById("invalid_alert");

function start() {
    invalid.style.display = "none";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username == localStorage.username && password == localStorage.password) {
        window.location.href = "./recados.html";
    }
    else {
        invalid.style.display = "inline-block";
    }

}

start();