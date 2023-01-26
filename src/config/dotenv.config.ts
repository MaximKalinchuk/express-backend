import * as dotenv from 'dotenv';

export function dotenvConfig() {
	dotenv.config({
		path: `.${process.env.NODE_ENV}.env`,
	});
}
