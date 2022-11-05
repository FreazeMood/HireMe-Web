import express from 'express';
import ConnectDB from './models/connection.js';
import { DEV_CONFIG } from './settings/dbConfig.js';
import { PORT } from './settings/appConfig.js';
import router from './routes/login.js';

const app = express();
ConnectDB(DEV_CONFIG).catch(err => console.log(err));

//Routes
app.use('/', router);
app.listen(PORT, console.log("Server has started at port " + PORT))