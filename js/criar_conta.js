let passAlert = document.getElementById("password_error");
let successAlert = document.getElementById("success");
let userAlert = document.getElementById("username_error")

// Inicializa os alertas em seu estado padrão escondido
function start() {
    passAlert.style.display = "none";
    successAlert.style.display = "none";
    userAlert.style.display = "none";
}

// Função executa quando o usuário clica no botão
function criarConta() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("password_confirm").value;

    // Mostra alerta dizendo que o username está vazio
    if (username == "") {
        userAlert.style.display = "inline-block";
    }

    // Confirma se as senhas batem e o username está preenchido, e mostra o alerta de suceso
    if ((password == passwordConfirm)&&(username != "")) {
        localStorage.username = username;
        localStorage.password = password;
        passAlert.style.display = "none";
        userAlert.style.display = "none";
        username = "e";
        successAlert.style.display = "inline-block";
    } 
    // Caso contrário, outro erro.
    else {
        successAlert.style.display = "none";
        userAlert.style.display = "none";
        passAlert.style.display = "inline-block";

    }



}

start();