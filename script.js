// Menú responsive
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Año automático en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Botones "Me interesa" rellenan el campo destino
const paqueteButtons = document.querySelectorAll("[data-paquete]");
const destinoInput = document.getElementById("destinoInteres");

paqueteButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const nombrePaquete = btn.getAttribute("data-paquete");
        if (destinoInput) {
            destinoInput.value = nombrePaquete;
            destinoInput.focus();
            window.location.hash = "#contacto";
        }
    });
});

// Manejo sencillo del formulario
const formCotizacion = document.getElementById("formCotizacion");
const formMensaje = document.getElementById("formMensaje");

if (formCotizacion) {
    formCotizacion.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!nombre || !email) {
            if (formMensaje) {
                formMensaje.textContent = "Por favor, llena al menos tu nombre y correo.";
                formMensaje.style.color = "#ff4d4f";
            }
            return;
        }

        // Aquí podrías integrar envío real (backend / servicio externo)
        if (formMensaje) {
            formMensaje.textContent = "Tu solicitud fue registrada. En breve nos pondremos en contacto contigo.";
            formMensaje.style.color = "#3ecf8e";
        }

        formCotizacion.reset();
    });
}
