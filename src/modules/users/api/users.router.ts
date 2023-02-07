import { Router } from 'express';
import { validationMiddleware } from '../../../common/middlewares/validation-middleware.js';
import UsersController from './users.controller.js';
import validation from '../../../common/validation/validation.js';

const userRouter = Router();

userRouter.get('/users', UsersController.getAllUsers);
userRouter.get('/users/:username', UsersController.getUserByUsername);
userRouter.post(
	'/users',
	...validation.usernameValidation,
	...validation.emailValidation,
	...validation.passwordValidation,
	validationMiddleware,
	UsersController.createUser,
);

export default userRouter;
