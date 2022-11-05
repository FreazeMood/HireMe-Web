import express from 'express';
import ConnectDB from './models/connection.js';
import { DEV_CONFIG } from './settings/dbConfig.js';
import { PORT } from './settings/appConfig.js';
import router from './routes/user.js';

const app = express();
ConnectDB(DEV_CONFIG).catch(err => console.log(err));

// middlewares
app.use(express.json())

//Routes
app.use('/api/users', router);
app.listen(PORT, console.log("Server has started at port " + PORT));