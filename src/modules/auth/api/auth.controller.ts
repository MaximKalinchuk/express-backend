import { Request, Response } from 'express';
import RegistrationUseCase from '../application/useCases/registration.use-case.js';
import LoginUseCase from '../application/useCases/login.use-case.js';

class AuthController {
	async registration(req: Request, res: Response): Promise<void> {
		try {
			const userData = req.body;
			const tokens = await RegistrationUseCase.execute(userData);
			res.status(201).json({ access_token: tokens.access_token });
		} catch (err) {
			if (err instanceof Error) {
				res.status(500).json({ message: err.message });
			}
		}
	}

	async login(req: Request, res: Response): Promise<void> {
		try {
			const userData = req.body;
			const tokens = await LoginUseCase.execute(userData);
			res.status(200).json({ access_token: tokens.access_token });
		} catch (err) {
			if (err instanceof Error) {
				res.status(500).json({ message: err.message });
			}
		}
	}
}

export default new AuthController();
