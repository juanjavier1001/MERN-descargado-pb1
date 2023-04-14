import { Router } from 'express';
import {
	getTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
} from '../controllers/controllers.js';

const router = Router();

//traer todas
router.get('/task', getTasks);

//traer una
router.get('/task/:id', getTask);

//crear
router.post('/task', createTask);

//actualizar una
router.put('/task/:id', updateTask);

//borrar una
router.delete('/task/:id', deleteTask);

export { router };
