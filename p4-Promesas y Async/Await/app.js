// Variable global simular invent
const mesasTotales = 10;

// Verificar Disponibilidad
const verificarDisponibilidad = (mesasSolicitadas) => {
    return new Promise((resolve, reject) => {
        console.log("Verificando disponibilidad...");
        setTimeout(() => {
            if (mesasSolicitadas <= mesasTotales) {
                resolve("Mesas disponibles encontradas.");
            } else {
                reject("No hay suficientes mesas para esa cantidad.");
            }
        }, 1500);
    });
};

// Simular Envío de Correo
const enviarConfirmacionReserva = (nombreCliente) => {
    return new Promise((resolve, reject) => {
        console.log(`Envio de correo a ${nombreCliente}...`);
        setTimeout(() => {
            const exito = Math.random() > 0.2; 
            if (exito) {
                resolve(`Confirmación enviada exitosamente a ${nombreCliente}.`);
            } else {
                reject("El servidor de correos falló. La reserva se hizo pero el correo no salió.");
            }
        }, 2000);
    });
};

// Función Principal
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    console.log(`Iniciando reserva para ${nombreCliente}`);
    
    try {
        // Esperar disponibilidad de mesa
        const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        console.log(disponibilidad);

        // La mesa si está lista. Ahora enviar correo.
        const confirmacion = await enviarConfirmacionReserva(nombreCliente);
        console.log(confirmacion);
        
        console.log("Proceso de reserva finalizado con éxito.");
    } catch (error) {
        console.error("Hubo un error con tu reserva:");
        console.error(error);
    }
}

// Caso exitoso
hacerReserva("Emanuel", 4);

// Caso de error por falta de mesas
setTimeout(() => {
    hacerReserva("Invitado VIP", 20);
}, 5000);