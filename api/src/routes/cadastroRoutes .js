import { Router } from 'express';
import cadastroController from '../controllers/CadastroController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', cadastroController.index);
router.post('/', cadastroController.store);
router.put('/:id', cadastroController.update);
router.get('/:id', cadastroController.show);
router.delete('/:id', cadastroController.delete);

export default router;
