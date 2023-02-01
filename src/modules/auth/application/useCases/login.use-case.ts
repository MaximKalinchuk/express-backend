import { LoginInputModel } from '../../api/models/login.input-model.js';
import UsersRepository from '../../../users/infrastructure/users.repository.js';
import pkg from 'bcryptjs';
import AuthService from '../auth.service.js';
import { TokensViewModel } from '../dto/tokens.view-model.js';
const { compare } = pkg;

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

		return await AuthService.generateTokens(userByEmail);
	}
}

export default new LoginUseCase();
