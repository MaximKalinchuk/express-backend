import { body } from 'express-validator';

export default {
	emailValidation: [
		body('email').isEmail().withMessage('Should be email.'),
		body('email').isString().withMessage('Is not a string.'),
	],

	passwordValidation: [
		body('password').isLength({ min: 6, max: 30 }).withMessage('Password lingth should be from 6 to 30 symbols.'),
		body('password').isString().withMessage('Is not a string.'),
	],

	usernameValidation: [
		body('username').isString().withMessage('Is not a string.'),
		body('username').isLength({ min: 2, max: 30 }).withMessage('Username lingth should be from 2 to 30 symbols.'),
	],
};
