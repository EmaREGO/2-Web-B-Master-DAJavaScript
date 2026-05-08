const container = document.getElementById('data-container');
const API_URL = 'https://rickandmortyapi.com/api/character';

// FUNCIÓN PARA RENDERIZAR
const renderCharacters = (characters) => {
    container.innerHTML = "";
    characters.forEach(char => {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card">
                <img src="${char.image}" alt="${char.name}">
                <h3>${char.name}</h3>
                <p>Status: ${char.status}</p>
            </div>
        `;
        container.appendChild(card);
    });
};

// MÉTODO FETCH Nativo js ---
const getWithFetch = () => {
    console.log("Cargando con Fetch...");
    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error("Error en la petición");
            return response.json(); 
        })
        .then(data => renderCharacters(data.results))
        .catch(err => console.error("Error con Fetch:", err));
};

// MÉTODO AXIOS libreria externa
const getWithAxios = () => {
    console.log("Cargando con Axios...");
    axios.get(API_URL)
        .then(response => {
            renderCharacters(response.data.results); // Axios ya da los datos convertidos en .data
        })
        .catch(err => console.error("Error con Axios:", err));
};

// Event Listeners
document.getElementById('btn-fetch').addEventListener('click', getWithFetch);
document.getElementById('btn-axios').addEventListener('click', getWithAxios);