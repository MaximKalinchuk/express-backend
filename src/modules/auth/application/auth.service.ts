import { UsersEntity } from '../../users/domain/users.entity.js';
import { TokensViewModel } from './dto/tokens.view-model.js';
import jwt from 'jsonwebtoken';
import { dotenvConfig } from '../../../config/dotenv.config.js';

dotenvConfig();

class AuthService {
	async generateTokens(user: UsersEntity): Promise<TokensViewModel> {
		const payload = { email: user.email, username: user.username };

		let access_token = '';
		let refresh_token = '';

		const PRIVATE_ACCESS_KEY = process.env.PRIVATE_ACCESS_KEY;
		const PRIVATE_REFRESH_KEY = process.env.PRIVATE_REFRESH_KEY;

		if (PRIVATE_ACCESS_KEY) {
			access_token = jwt.sign({ payload }, PRIVATE_ACCESS_KEY, { expiresIn: '15m' });
		}
		if (PRIVATE_REFRESH_KEY) {
			refresh_token = jwt.sign({ payload }, PRIVATE_REFRESH_KEY, { expiresIn: '168h' });
		}
		return {
			access_token,
			refresh_token,
		};
	}
}

export default new AuthService();
