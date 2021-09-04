import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config()

connectDB()

const app = express()

app.use(express.json()); //middleware

app.get('/', (req,res) => {
	res.send('Backend of SocialMedia app');
});

app.use('/api/users', userRoutes)

const port = 8000 || process.env.PORT;

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});