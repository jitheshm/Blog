import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import router from './routes/router';
import { dbconnect } from './config/connection';
 
//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;
dbconnect()
app.use('/', router)

 
app.listen(port, () => { 
  console.log(`Server is Fire at http://localhost:${port}`);
});