import { CreateUserInputModel } from '../../../users/api/models/createUserInputModel.js';
import CreateUserUseCase from '../../../users/application/useCases/createUser.use-case.js';
import UsersRepository from '../../../users/infrastructure/users.repository.js';
import AuthService from '../auth.service.js';
import { TokensViewModel } from '../dto/tokens.view-model.js';

class RegistrationUseCase {
	async execute(userData: CreateUserInputModel): Promise<TokensViewModel> {
		const userByEmail = await UsersRepository.getUserByEmail(userData.email);

		if (userByEmail) {
			throw new Error('This email is already registered.');
		}

		const userByUsername = await UsersRepository.getUserByUsername(userData.username);

		if (userByUsername) {
			throw new Error('This username is already registered.');
		}
		const newUser = await CreateUserUseCase.execute(userData);
		return await AuthService.generateTokens(newUser);
	}
}

export default new RegistrationUseCase();
