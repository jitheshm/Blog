import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
// import router from './routes/router';
// import { dbconnect } from './config/connection';
// import logger from 'morgan';
// import cors from 'cors'
//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3001;
// app.use(logger('dev'));
app.use(express.json()); 
// app.use(cors())
// dbconnect()

 app.use('/', ()=>{
    console.log('Hello from the server')
 })


app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});