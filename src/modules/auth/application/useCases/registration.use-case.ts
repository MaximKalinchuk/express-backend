import { CreateUserInputModel } from '../../../users/api/models/createUserInputModel.js';
import usersService from '../../../users/application/users.service.js';
import UsersRepository from '../../../users/infrastructure/users.repository.js';

class RegistrationUseCase {
	async execute(userData: CreateUserInputModel) {
		const userByEmail = await UsersRepository.getUserByEmail(userData.email);

		if (userByEmail) {
			throw new Error('This email is already registered.');
		}

		const userByUsername = await UsersRepository.getUserByUsername(userData.username);

		if (userByUsername) {
			throw new Error('This username is already registered.');
		}

		return await usersService.createUser(userData);
	}
}

export default new RegistrationUseCase();
