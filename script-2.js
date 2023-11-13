document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".btn-close");
  
    closeButton.addEventListener("click", function () {
      // Cerrar el formulario cuando se hace clic en el botón de cierre
      const containerBox = document.querySelector(".container-box");
      containerBox.style.display = "none";
    });
  
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evitar que el formulario se envíe (comportamiento predeterminado)
  
      const usernameOrEmail = document.querySelector("input[placeholder='Username or Email']").value;
      const password = document.querySelector("input[placeholder='Password']").value;
  
      // Aquí puedes agregar la lógica para verificar el inicio de sesión
      // Por ejemplo, puedes hacer una solicitud AJAX a un servidor para la autenticación.
  
      if (usernameOrEmail === "usuario" && password === "contraseña") {
        // Autenticación exitosa, redirigir al usuario a la página deseada
        window.location.href = "dashboard.html";
      } else {
        // Autenticación fallida, mostrar un mensaje de error
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    });
  });
  