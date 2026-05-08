// Estructura de datos json

// libros.json (simulado dentro de una variable)
let biblioteca = [
    { titulo: "El Psicoanalista", autor: "John Katzenbach", genero: "Thriller", disponible: true },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo Mágico", disponible: false }
];

//Simulador de almacenamiento para callback
//Uso de set Timeout

function leerLibros(callback) {
    console.log("Leyendo base de datos...");
    setTimeout(() => {
        //Ejecutar call back con datos
        callback(biblioteca);
    }, 1500);
}

// Funcion para guardar
function guardarLibros(nuevaBiblioteca, callback) {
    console.log("Guardar cambios en formato JSON...");
    setTimeout(() => {
        const dataJson = JSON.stringify(nuevaBiblioteca);
        biblioteca = JSON.parse(dataJson);
        callback("Guardado satisfactoriamente.");
    }, 1500);
}

function consultarInventario() {
    leerLibros((datos) => {
        console.table(datos);
    });
}

function agregarLibro(nuevoLibro) {
    leerLibros((librosActuales) => {
        librosActuales.push(nuevoLibro);
        guardarLibros(librosActuales, (mensaje) => {
            console.log(mensaje);
            console.log(`Libro añadido: ${nuevoLibro.titulo}`);
        });
    });
}

//Actualizar disponibilidad
function actualizarDisponibilidad(tituloLibro, estado) {
    leerLibros((libros) => {
        //Buscar libro
        const libro = libros.find(l => l.titulo === tituloLibro);
        if (libro) {
            libro.disponible = estado;
            guardarLibros(libros, (msg) => console.log(msg));
        } else {
            console.log("Libro no encontrado.");
        }
    });
}

//Agregar libro
agregarLibro({ titulo: "Clean Code", autor: "Robert C. Martin", genero: "Software", disponible: true });

//Esperar para consultar
setTimeout(() => {
    consultarInventario();
}, 5000);