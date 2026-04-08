import express from 'express';
import cors from 'cors';
import taskRouter from './route/taskRoute.js';

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://chimerical-maamoul-3d6a80.netlify.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());
app.use('/task', taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});