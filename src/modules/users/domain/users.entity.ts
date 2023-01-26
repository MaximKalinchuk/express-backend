import { Entity } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column.js';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn.js';

export enum UserRoles {
	ADMIN = 'Admin',
	USER = 'User',
}

@Entity({ name: 'users' })
export class UsersEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email: string;

	@Column()
	username: string;

	@Column()
	passwordHash: string;

	@Column()
	role: UserRoles;

	@Column({ default: null, nullable: true })
	refresh_token: string;

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
	createdAt: Date;

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
	updatedAt: Date;
}
