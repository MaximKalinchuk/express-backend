import { DataSource } from 'typeorm';
import { UsersEntity } from '../modules/users/domain/users.entity.js';
import { dotenvConfig } from './dotenv.config.js';
import { dirname } from 'path';

dotenvConfig();

export const config = new DataSource({
	type: 'postgres',
	host: process.env.PG_HOST,
	port: 5432,
	username: process.env.PG_USERNAME,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE,
	entities: [UsersEntity],
	synchronize: false,
	migrations: [dirname('/migrations/**/*{.ts,.js}')],
});
