const btnPedido = document.getElementById('btnPedido');
const listaPedidos = document.getElementById('listaPedidos');
let pedidoCounter = 0;

// Preparación, asincronia con setTimeout y Promises 
function prepararPedido(id) {
    const tiempoPreparacion = Math.floor(Math.random() * 3000) + 2000; // 2 - 5 s
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Pedido #${id} listo`);
        }, tiempoPreparacion);
    });
}

// Actualizar interfaz 
function agregarALista(id) {
    const div = document.createElement('div');
    div.id = `pedido-${id}`;
    div.className = 'pedido en-proceso';
    div.innerHTML = `<strong>Pedido #${id}</strong>: Preparando orden...`;
    listaPedidos.appendChild(div);
    return div;
}

// Async - Await
async function gestionarPedido() {
    pedidoCounter++;
    const idActual = pedidoCounter;
    // Mostrar en interfaz inmediatamente
    const elementoUI = agregarALista(idActual);

    try {
        // Asincrono
        await prepararPedido(idActual);
        
        // Actualizamos estado al "terminar pedido"
        elementoUI.className = 'pedido completado';
        elementoUI.innerHTML = `<strong>Pedido #${idActual}</strong>: ¡Completado!`;
    } catch (error) {
        console.error("Error en la cafetera:", error);
    }
}

// Evento de clic
btnPedido.addEventListener('click', gestionarPedido);