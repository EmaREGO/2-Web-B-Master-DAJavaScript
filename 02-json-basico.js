const usuario = {
    id: 1,
    nombre: "Luna",
    edad: 22,
    activo: true,
    hobbies: ["leer", "correr", "código"],
    direccion: {
    ciudad: "Guadalajara",
    pais: "México",
    },
};

const textoJSON = JSON.stringify(usuario);
console.log("Como string JSON:");
console.log(textoJSON);
console.log("Tipo:", typeof textoJSON); // string