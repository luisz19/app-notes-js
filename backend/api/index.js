import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes.js';
import express from 'express'

const app = express();
const port = 8080;

app.use(cors());

app.use(cors({
    origin: '*', // Permitir todas as origens. Para produção, ajuste isso para domínios específicos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server rodando na porta: ${port}`);
});

app.use('/', userRoutes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});