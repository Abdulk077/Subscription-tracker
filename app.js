import express from 'express';
import {PORT} from './config/env.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import suscription from './routes/post.route.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/suscription', suscription);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, (req, res) => {
  console.log('Server is running on port 3000');
});