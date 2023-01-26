import { Response, Request } from 'express';
import UsersService from '../application/users.service.js';

class UsersController {
	async getAll(req: Request, res: Response) {
		try {
			res.json([{ id: 1, username: 'Василий' }]);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async createUser(req: Request, res: Response): Promise<void> {
		try {
			const userData = req.body;
			const user = await UsersService.createUser(userData);
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	}
}

export default new UsersController();
