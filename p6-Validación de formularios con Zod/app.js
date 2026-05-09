// Inicializacion zod
const { z } = window.Zod;

const registerSchema = z.object({
    // Nombre no debe estar vacio
    name: z.string().min(1, "El nombre es obligatorio"), 
    // Formato de correo
    email: z.string().email("El formato del correo es inválido"), 

    // Minimo 6 en contraseña
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres") 
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const errorDisplay = document.getElementById("errors");
    errorDisplay.textContent = ""; 

    // Capturar datos
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    try {
            // Validar datos
            registerSchema.parse(formData);
            
            // Registro exitoso
            alert("¡Registro exitoso!");
            document.getElementById("registerForm").reset();

    } catch (error) {
        if (error instanceof z.ZodError) {
        errorDisplay.innerHTML = error.errors
            .map(e => `• ${e.message}`)
            .join("<br>");
        } else {
        errorDisplay.textContent = "Ocurrió un error inesperado.";
        }
    }
});