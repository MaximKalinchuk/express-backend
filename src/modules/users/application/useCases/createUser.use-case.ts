import { CreateUserInputModel } from '../../api/models/createUserInputModel.js';
import { UserRoles, UsersEntity } from '../../domain/users.entity.js';
import UsersRepository from '../../infrastructure/users.repository.js';
import pkg from 'bcryptjs';
const { hash } = pkg;

class CreateUserUseCase {
	async execute(userData: CreateUserInputModel): Promise<UsersEntity> {
		const userByEmail = await UsersRepository.getUserByEmail(userData.email);
		if (userByEmail) {
			throw new Error('This email is already registered.');
		}
		const passwordHash = await hash(userData.password, 10);

		const newUser = new UsersEntity();

		newUser.username = userData.username;
		newUser.email = userData.email;
		newUser.passwordHash = passwordHash;
		newUser.role = UserRoles.USER;

		return await UsersRepository.saveUser(newUser);
	}
}

export default new CreateUserUseCase();
