import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import usuarioRouter from '../routers/usuarioRouter';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(usuarioRouter);

export default app;