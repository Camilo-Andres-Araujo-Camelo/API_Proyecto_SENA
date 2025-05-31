import { Router } from 'express';
import {
  getEmpleados,
  getEmpleadoById,
  createEmpleado,
  updateEmpleadoById,
  deleteEmpleadoById,
} from '../controllers/empleados.controller';
import { authorizeRole } from '../middlewares/auth.middleware';

export const router = Router();

router.get('/', getEmpleados);
router.get('/:id', getEmpleadoById);
router.put('/:id', authorizeRole, updateEmpleadoById);
router.delete('/:id', authorizeRole, deleteEmpleadoById);
router.post('/', authorizeRole, createEmpleado);
