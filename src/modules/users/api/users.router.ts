import { Router } from 'express';
import { body } from 'express-validator';
import { validationMiddleware } from '../../../common/middlewares/validation-middleware.js';
import UsersController from './users.controller.js';

const userRouter = Router();

userRouter.get('/users', UsersController.getAllUsers);
userRouter.get('/users/:username', UsersController.getUserByUsername);
userRouter.post(
	'/users',
	body('username').isString().withMessage('Is not a string.'),
	body('username').isLength({ min: 2, max: 30 }).withMessage('Username lingth should be from 2 to 30 symbols.'),
	body('email').isEmail().withMessage('Should be email.'),
	body('email').isString().withMessage('Is not a string.'),
	body('password').isLength({ min: 6, max: 30 }).withMessage('Username lingth should be from 6 to 30 symbols.'),
	body('password').isString().withMessage('Is not a string.'),
	validationMiddleware,
	UsersController.createUser,
);

export default userRouter;
