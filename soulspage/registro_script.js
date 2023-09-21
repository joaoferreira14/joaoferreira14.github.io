document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registro-form");
    const mensagem = document.getElementById("mensagem");

    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        mensagem.textContent = "Registro bem-sucedido!";
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