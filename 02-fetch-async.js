console.log("A — Inicio del programa");

setTimeout(() => {
    console.log("D — setTimeout de 100ms");
}, 100);

fetch("https://jsonplaceholder.typicode.com/users/1")
    then((res) => res.json())
    .then((user) => {
        console.log("E — Usuario recibido del servidor:", user.name);
    })
    .catch((err) => console.error("Error en fetch:", err));

console.log("B — Continuamos con la siguiente línea (síncrono)");

Promise.resolve().then(() => {
    console.log("C — Microtask de Promise.resolve");
});