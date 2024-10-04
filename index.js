import router from './src/routes';

window.addEventListener('hashchange', router);
window.addEventListener('load', router);