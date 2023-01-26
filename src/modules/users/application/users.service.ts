import { UserRoles, UsersEntity } from '../domain/users.entity.js';
import UsersRepository from '../infrastructure/users.repository.js';
import { CreateUserInputModel } from '../api/models/createUserInputModel.js';
import pkg from 'bcryptjs';
const { hash } = pkg;

class UsersService {
	async createUser(userData: CreateUserInputModel): Promise<UsersEntity> {
		const newUser = new UsersEntity();
		Object.assign(newUser, userData);

		const passwordHash = await hash(userData.password, 10);
		newUser.passwordHash = passwordHash;
		newUser.role = UserRoles.USER;

		return await UsersRepository.createUser(newUser);
	}
}

export default new UsersService();
