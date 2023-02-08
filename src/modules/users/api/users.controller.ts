import { Response, Request } from 'express';
import createUserUseCase from '../application/useCases/createUser.use-case.js';
import UsersService from '../application/users.service.js';

class UsersController {
	async getAllUsers(req: Request, res: Response): Promise<void> {
		try {
			const users = await UsersService.getAllUsers();
			res.status(200).json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async getUserByUsername(req: Request, res: Response): Promise<void> {
		try {
			const params = req.params;
			const user = await UsersService.getUserByUsername(params.username);
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	}
	async createUser(req: Request, res: Response): Promise<void> {
		try {
			const userData = req.body;
			const user = await createUserUseCase.execute(userData);
			res.status(201).json(user);
		} catch (err) {
			if (err instanceof Error) {
				res.status(500).json({ message: err.message });
			}
		}
	}
}

export default new UsersController();
