import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
// import router from './router/router'; 
// import { dbconnect } from './config/dbConnection';
import logger from 'morgan';
import cors from 'cors'
import rabbitConnect from './config/connectRabbitMQ';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3003;
app.use(logger('dev'));
app.use(express.json());
app.use(cors())
// dbconnect()
rabbitConnect()

// app.use('/', router)


app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});