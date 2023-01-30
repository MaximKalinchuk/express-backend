import { Request, Response } from 'express';
import RegistrationUseCase from '../application/useCases/registration.use-case.js';
// import LoginUseCase from '../application/useCases/login.use-case.js';

class AuthController {
	async registration(req: Request, res: Response): Promise<void> {
		try {
			const userData = req.body;
			const user = await RegistrationUseCase.execute(userData);
			res.status(201).json(user);
		} catch (err) {
			if (err instanceof Error) {
				res.status(500).json({ message: err.message });
			}
		}
	}

	async login(req: Request, res: Response): Promise<void> {
		try {
			const userData = req.body;
			// const user = await LoginUseCase.execute(userData);
			// res.status(200).json(user);
		} catch (err) {
			if (err instanceof Error) {
				res.status(500).json({ message: err.message });
			}
		}
	}
}

export default new AuthController();
