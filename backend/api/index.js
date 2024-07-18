import bodyParser from 'body-parser';
// const cors = require('cors');
import userRoutes from './routes.js';
import express from 'express'

const app = express();
const port = 8080;



app.use(bodyParser.json());



// Usar as rotas de usuários


app.listen(port, () => {
    console.log(`Server rodando na porta: ${port}`);
});

app.use('/', userRoutes);