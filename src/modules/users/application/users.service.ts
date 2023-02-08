import { UsersEntity } from '../domain/users.entity.js';
import UsersRepository from '../infrastructure/users.repository.js';
import pkg from 'bcryptjs';
const { hash } = pkg;

class UsersService {
	async getAllUsers() {
		return await UsersRepository.getAllUsers();
	}

	async getUserByUsername(username: string): Promise<UsersEntity | null> {
		return await UsersRepository.getUserByUsername(username);
	}

	async updateRefreshToken(user: UsersEntity, refresh_token: string | null) {
		try {
			if (typeof refresh_token === 'string') {
				const tokenHash = await hash(refresh_token, 10);
				const updatedUser = await UsersRepository.saveUser({ ...user, refresh_token: tokenHash });
				return updatedUser;
			}
			const updatedUser = await UsersRepository.saveUser({ ...user, refresh_token });
			return updatedUser;
		} catch (e) {
			throw new Error('Refresh token does not been updated');
		}
	}
}

export default new UsersService();
