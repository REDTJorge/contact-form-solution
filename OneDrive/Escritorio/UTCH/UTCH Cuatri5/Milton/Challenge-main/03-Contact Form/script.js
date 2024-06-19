document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const email = document.getElementById("email");
        const queryType = document.querySelector('input[name="query"]:checked');
        const message = document.getElementById("message");
        const checkbox = document.getElementById("checkbox");

        document.querySelectorAll(".error").forEach((error) => {
            error.style.display = "none";
            error.textContent = "";
        });

        if (!firstName.value.trim()) {
            document.getElementById("first-name-error").textContent =
                "El nombre es obligatorio.";
            document.getElementById("first-name-error").style.display = "block";
            isValid = false;
        }

        if (!lastName.value.trim()) {
            document.getElementById("last-name-error").textContent =
                "El apellido es obligatorio.";
            document.getElementById("last-name-error").style.display = "block";
            isValid = false;
        }

        if (!email.value.trim()) {
            document.getElementById("email-error").textContent =
                "El correo electrónico es obligatorio.";
            document.getElementById("email-error").style.display = "block";
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            document.getElementById("email-error").textContent =
                "Por favor, ingrese una dirección de correo electrónico válida.";
            document.getElementById("email-error").style.display = "block";
            isValid = false;
        }

        if (!queryType) {
            document.getElementById("query-error").textContent =
                "Por favor, seleccione un tipo de consulta.";
            document.getElementById("query-error").style.display = "block";
            isValid = false;
        }

        if (!message.value.trim()) {
            document.getElementById("message-error").textContent =
                "El mensaje es obligatorio.";
            document.getElementById("message-error").style.display = "block";
            isValid = false;
        }

        if (!checkbox.checked) {
            document.getElementById("checkbox-error").textContent =
                "Debe aceptar ser contactado.";
            document.getElementById("checkbox-error").style.display = "block";
            isValid = false;
        }

        if (isValid) {
            document.getElementById("success-message").textContent =
                "¡Formulario enviado con éxito!";
            document.getElementById("success-message").style.display = "block";
            form.reset();
                        showToast('¡Formulario enviado con éxito!');

        }
       
    });
      function showToast(message, duration = 3000) {
        const toast = document.getElementById('toastMessage');
        if (toast) {
          toast.textContent = message;
          toast.style.display = 'block';
          setTimeout(() => {
            toast.style.display = 'none';
          }, duration);
        }
      }


    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    document.querySelectorAll("input, textarea, select").forEach((element) => {
        element.addEventListener("input", () => {
            const errorId = `${element.id}-error`;
            const errorElement = document.getElementById(errorId);
            if (element.value.trim() && errorElement.style.display === "block") {
                errorElement.style.display = "none";
                errorElement.textContent = "";
            }
        });

        if (element.type === "radio") {
            element.addEventListener("change", () => {
                const errorId = `${element.name}-error`;
                const errorElement = document.getElementById(errorId);
                if (errorElement.style.display === "block") {
                    errorElement.style.display = "none";
                    errorElement.textContent = "";
                }
            });
        }
    });
});
