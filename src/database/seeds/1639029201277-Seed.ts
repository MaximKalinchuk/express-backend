import { MigrationInterface, QueryRunner } from 'typeorm';

export class Seed1639029201277 implements MigrationInterface {
	name = 'Seed1639029201277';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO users (email, username, "passwordHash", role, refresh_token) 
      VALUES 
      ('alex@mail.ru', 'Шмакова Маргарита Алексеевна', '$2a$10$WKV2ft8nB1ikLAcYX5wNw.21.HkHVCagDGr7qSyq4ZnTlzuDTGpTm', 'User', '$2a$10$kGMewyFIAZkuv7Jl6UYDjO0moyF5JFfeIqboRLNrwcChluuOfWRfy'),
      ('admin@mail.ru', 'Администратор Админ Админович', '$2a$10$WKV2ft8nB1ikLAcYX5wNw.21.HkHVCagDGr7qSyq4ZnTlzuDTGpTm', 'Admin', '$2a$10$nWN/5jZRz3iNoT/./dFNHemtxZb4SEnI5QRgexq3nvOkh.OiwEoOa')
      `,
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public async down(): Promise<void> {}
}
