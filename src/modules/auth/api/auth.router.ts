import { Router } from 'express';
import AuthController from './auth.controller.js';

const AuthRouter = Router();

AuthRouter.post('/auth/registration', AuthController.registration);
AuthRouter.post('/auth/login', AuthController.login);

export default AuthRouter;
