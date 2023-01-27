import express from 'express';
import { dotenvConfig } from './config/dotenv.config.js';
import router from './modules/users/api/users.router.js';
import { config } from './config/typeorm.config.js';

dotenvConfig();

config
	.initialize()
	.then(() => {
		console.log('Data Source has been initialized!');
	})
	.catch((err) => {
		console.error('Error during Data Source initialization:', err);
	});

const app = express();
app.use(express.json());
app.use('/api', router);

// app.useGlobalPipes(
// 	new ValidationPipe({
// 		whitelist: true,
// 		transform: true,
// 		forbidUnknownValues: false,
// 		forbidNonWhitelisted: true,
// 		transformOptions: {
// 			enableImplicitConversion: true,
// 		},
// 	}),
// );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
