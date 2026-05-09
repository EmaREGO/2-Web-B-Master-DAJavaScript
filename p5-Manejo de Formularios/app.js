document.getElementById('registroEvento').addEventListener('submit', function(event) {
    event.preventDefault();

  // Selección de elementos
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const fechaInput = document.getElementById('fecha').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const errorContainer = document.getElementById('mensajeError');
    
    let errores = [];

  // val 1 nombre al menos dos valores
    if (nombre.split(' ').length < 2) {
        errores.push("Por favor, ingresa tu nombre completo (Nombre y Apellido).");
    }

  // val 2 Teléfono 10 digitos
    const regexTelefono = /^[0-9]{10}$/;
    if (!regexTelefono.test(telefono)) {
        errores.push("El teléfono debe contener exactamente 10 dígitos numéricos.");
    }

  // val 3 No se puede poner una fecha pasada
    const fechaSeleccionada = new Date(fechaInput);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Resetear horas para comparar solo fechas

    if (fechaSeleccionada < hoy) {
        errores.push("La fecha del evento no puede ser anterior a hoy.");
    }

    //
    if (intereses.length === 0) {
        errores.push("Debes seleccionar al menos un interés.");
    }

  // Mostrar errores o proceder
    if (errores.length > 0) {
        errorContainer.innerHTML = errores.join('<br>');
        errorContainer.style.display = 'block';
    } else {
        errorContainer.style.display = 'none';
        alert(`¡Éxito! Registro procesado para: ${nombre}`);
        this.reset();
    }
});