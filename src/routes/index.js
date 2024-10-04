import Header from '../templates/Header';
import Home from '../pages/Home';
import LaunchDetails from '../pages/LaunchDetails';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

const routes = {
    '/': Home,
    '/:id': LaunchDetails,
};

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    // Extraer el launchId
    const launchId = route.split('/')[1]; // Esto asume que el ID está en la ruta

    // Renderizar el contenido
    if (render === LaunchDetails && launchId) {
        content.innerHTML = await render(launchId); // Pasar el launchId a LaunchDetails
    } else {
        content.innerHTML = await render(); // Llamar a render sin parámetros
    }
};

export default router;