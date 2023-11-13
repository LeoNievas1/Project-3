document.addEventListener("DOMContentLoaded", function () {
    const recoveryForm = document.getElementById("recovery-form");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");

    recoveryForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = emailInput.value;

        // Aquí puedes agregar la lógica para enviar un correo de recuperación
        // Esto es solo un ejemplo simulado.
        if (email) {
            message.textContent = "Se ha enviado un correo de recuperación a " + email;
            message.style.color = "green";
        } else {
            message.textContent = "Por favor, ingresa un correo electrónico válido.";
            message.style.color = "red";
        }
    });
});
