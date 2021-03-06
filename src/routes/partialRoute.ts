import express from 'express';
import controller from '../controllers/partialController';

const router = express.Router();
router.get('/', controller.todasPropostas);
router.post('/', controller.gravaProposta);
router.delete('/', controller.deletaProposta); //rota de teste 

export default router;