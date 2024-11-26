import { Router } from 'express';
import JogadorController from './app/controllers/JogadorController';
import PatenteController from './app/controllers/PatenteController';
const router = Router();

router.post('/jogadores', JogadorController.store);
router.post('/Patente', PatenteController.store);
export default router;
