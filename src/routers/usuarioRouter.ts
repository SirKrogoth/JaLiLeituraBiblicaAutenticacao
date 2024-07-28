import { Router } from 'express';
import usuarioController from '../controllers/usuarioController';
import { validarAutorizacao } from './middlewares/usuarioMiddleware';

const router = Router();

router.post('/usuario', validarAutorizacao, usuarioController.create);
router.post('/login', usuarioController.logarUsuario);

export default router;