import getData from '../utils/getData.js';
import getHash from '../utils/getHash.js';

const LaunchDetails = async () => {
    const launchId = getHash();
    const launchDetails = await getData(); // Obtén todos los lanzamientos

    // Busca el lanzamiento por flight_number
    const launch = launchDetails.find(item => item.flight_number === parseInt(launchId));

    if (!launch) {
        return `<h2>Lanzamiento no encontrado</h2>`; // Maneja el caso donde no se encuentra el lanzamiento
    }

    // Verifica que 'links' y 'patch' existan antes de acceder a ellos
    const links = launch.links || {};  // links será un objeto vacío si no está definido
    const patchImage = links.patch && links.patch.large ? links.patch.large : 'default-image.png'; // Usa imagen por defecto si no hay patch

    const failures = launch.failures || []; // Maneja el caso donde no hay fallas

    const view = `
        <div>
            <h1>${launch.name}</h1>
            <img src="${patchImage}" alt="${launch.name}" class="rocket-image">
            <h2>Fallas:</h2>
            <ul>
                ${failures.length > 0 ? failures.map(failure => `<li>${failure.reason} (Tiempo: ${failure.time} segundos)</li>`).join('') : '<li>No hubo fallas</li>'}
            </ul>
            <h2>Detalles:</h2>
            <p>${launch.details || 'Sin detalles'}</p>
            <h2>Número de vuelo:</h2>
            <p>${launch.flight_number}</p>
            <h2>Fecha y hora de despegue:</h2>
            <p>${new Date(launch.date_utc).toLocaleString()}</p>
        </div>
    `;

    return view;
};

export default LaunchDetails;