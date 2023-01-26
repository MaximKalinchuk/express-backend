import { config } from '../../../config/typeorm.config.js';
import { UsersEntity } from '../domain/users.entity.js';

export class UsersRepository {
	async createUser(userData: UsersEntity): Promise<UsersEntity> {
		return await config.getRepository(UsersEntity).save(userData);
	}
}

export default new UsersRepository();
