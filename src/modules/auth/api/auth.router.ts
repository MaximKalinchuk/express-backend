import { Router } from 'express';
import { validationMiddleware } from '../../../common/middlewares/validation-middleware.js';
import validation from '../../../common/validation/validation.js';
import AuthController from './auth.controller.js';

const AuthRouter = Router();

AuthRouter.post(
	'/auth/registration',
	...validation.usernameValidation,
	...validation.emailValidation,
	...validation.passwordValidation,
	validationMiddleware,
	AuthController.registration,
);
AuthRouter.post(
	'/auth/login',
	...validation.emailValidation,
	...validation.passwordValidation,
	validationMiddleware,
	AuthController.login,
);

export default AuthRouter;
