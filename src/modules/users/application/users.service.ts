import { UserRoles, UsersEntity } from '../domain/users.entity.js';
import UsersRepository from '../infrastructure/users.repository.js';
import { CreateUserInputModel } from '../api/models/createUserInputModel.js';
import pkg from 'bcryptjs';
const { hash } = pkg;

class UsersService {
	async createUser(userData: CreateUserInputModel): Promise<UsersEntity | unknown> {
		const userByEmail = await UsersRepository.getUserByEmail(userData.email);
		if (userByEmail) {
			throw new Error('This email is already registered.');
		}

		const newUser = new UsersEntity();
		Object.assign(newUser, userData);

		const passwordHash = await hash(userData.password, 10);
		newUser.passwordHash = passwordHash;
		newUser.role = UserRoles.USER;

		return await UsersRepository.createUser(newUser);
	}

	async getAllUsers() {
		return await UsersRepository.getAllUsers();
	}

	async getUserByUsername(username: string): Promise<UsersEntity | null> {
		console.log(username);
		return await UsersRepository.getUserByUsername(username);
	}
}

export default new UsersService();
