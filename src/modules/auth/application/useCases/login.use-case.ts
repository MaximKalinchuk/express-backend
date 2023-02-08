import { LoginInputModel } from '../../api/models/login.input-model.js';
import UsersRepository from '../../../users/infrastructure/users.repository.js';

import AuthService from '../auth.service.js';
import { TokensViewModel } from '../dto/tokens.view-model.js';
import pkg from 'bcryptjs';
const { compare } = pkg;
import UsersService from '../../../users/application/users.service.js';

class LoginUseCase {
	async execute(userData: LoginInputModel): Promise<TokensViewModel> {
		const userByEmail = await UsersRepository.getUserByEmail(userData.email);

		if (!userByEmail) {
			throw new Error('Email not found.');
		}

		const passwordStatus = await compare(userData.password, userByEmail.passwordHash);

		if (!passwordStatus) {
			throw new Error('Wrong password.');
		}

		const tokens = await AuthService.generateTokens(userByEmail);
		await UsersService.updateRefreshToken(userByEmail, tokens.refresh_token);
		return tokens;
	}
}

export default new LoginUseCase();
