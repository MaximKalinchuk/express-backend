import { UsersEntity } from '../domain/users.entity.js';
import UsersRepository from '../infrastructure/users.repository.js';

class UsersService {
	async getAllUsers() {
		return await UsersRepository.getAllUsers();
	}

	async getUserByUsername(username: string): Promise<UsersEntity | null> {
		return await UsersRepository.getUserByUsername(username);
	}
}

export default new UsersService();
