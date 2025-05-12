import { Router } from 'express';
import {
  createClient,
  getClients,
  getClientById,
  deleteClientById,
  updateClientById,
} from '../controllers/clientes.controller';

export const router = Router();

router.get('/', getClients);
router.get('/:id', getClientById);
router.post('/', createClient);
router.put('/:id', updateClientById);
router.delete('/:id', deleteClientById);
