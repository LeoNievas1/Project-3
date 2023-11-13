// Espera a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Escuchar el evento "DOMContentLoaded" para asegurarnos de que el documento HTML se haya cargado completamente.

    // Manejar el botón de cierre
    const closeButton = document.querySelector(".btn-close");
    closeButton.addEventListener("click", function () {
        // Agregar un evento click al botón de cierre
        const containerBox = document.querySelector(".container-box");
        containerBox.style.display = "none";
    });

    // Manejar el envío del formulario
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar que el formulario se envíe (comportamiento predeterminado)

        // Obtener los valores de los campos del formulario
        const username = document.querySelector("input[placeholder='Username']").value;
        const email = document.querySelector("input[placeholder='Email']").value;
        const password = document.querySelector("input[placeholder='Password']").value;
        const confirmPassword = document.querySelector("input[placeholder='Confirm Password']").value;

        // Realizar alguna lógica con los valores del formulario
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    });
});


// Obtén todos los campos de entrada y sus mensajes correspondientes
const camposDeEntrada = document.querySelectorAll("input[placeholder]");
const mensajesObligatorios = document.querySelectorAll(".obligatorio");

// Agrega un evento de cambio para cada campo de entrada
camposDeEntrada.forEach((campo, index) => {
    campo.addEventListener("input", function () {
        if (campo.value.trim() === "") {
            // Si el campo está vacío, muestra el mensaje "Campo obligatorio"
            mensajesObligatorios[index].style.display = "block";
        } else {
            // Si el campo no está vacío, oculta el mensaje "Campo obligatorio"
            mensajesObligatorios[index].style.display = "none";
        }
    });
});
