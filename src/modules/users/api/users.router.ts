import { Router } from 'express';
import UsersController from './users.controller.js';

const router = Router();

router.get('/users', UsersController.getAll);
router.post('/user', UsersController.createUser);

export default router;
