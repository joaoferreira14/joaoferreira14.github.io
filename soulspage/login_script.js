document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "usuario" && password === "senha") {
            mensagem.textContent = "Login bem-sucedido!";
        } else {
            mensagem.textContent = "Nome de usuário ou senha incorretos.";
        }
    });
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("show-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.textContent = "Ocultar Senha";
    } else {
        passwordInput.type = "password";
        showPasswordButton.textContent = "Mostrar Senha";
    }
}