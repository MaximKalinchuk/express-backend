import { config } from '../../../config/typeorm.config.js';
import { UsersEntity } from '../domain/users.entity.js';

export class UsersRepository {
	async saveUser(userData: UsersEntity): Promise<UsersEntity> {
		return await config.getRepository(UsersEntity).save(userData);
	}

	async getAllUsers(): Promise<UsersEntity[]> {
		return await config.getRepository(UsersEntity).find();
	}

	async getUserByEmail(email: string): Promise<UsersEntity | null> {
		return await config.getRepository(UsersEntity).findOneBy({ email });
	}

	async getUserByUsername(username: string): Promise<UsersEntity | null> {
		return await config.getRepository(UsersEntity).findOne({ where: { username } });
	}
}

export default new UsersRepository();
