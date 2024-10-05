import { Router } from './router.js';

const router = new Router();
router.add('/', '/pages/home.html', '1');
router.add('/the-universe', '/pages/the_universe.html', '2');
router.add('/exploration', '/pages/exploration.html', '3');
router.add(404, '/pages/404.html', '1');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();