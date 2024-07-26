import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';
import { validarAutorizacao } from './middlewares/usuarioMiddleware';

const router = Router();

router.post('/usuario', usuarioController.create);

export default router;