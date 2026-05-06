console.log("1. Arrancando script...");

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        console.log("2. Llegó la respuesta. Status:", response.status);
        // response NO es el JSON todavía: es un objeto Response.
        // Hay que convertirlo (también devuelve una Promise).
        return response.json();
    })
    .then((usuario) => {
        console.log("3. Datos del usuario:");
        console.log("   Nombre:", usuario.name);
        console.log("   Email :", usuario.email);
        console.log("   Ciudad:", usuario.address.city);
    });

    console.log("4. Esta línea sale ANTES que los datos. ¿Por qué?");