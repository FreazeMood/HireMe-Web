import express from 'express';
import cors from 'cors';
import ConnectDB from './models/connection.js';
import { DEV_CONFIG } from './settings/dbConfig.js';
import { PORT } from './settings/appConfig.js';

const app = express();

ConnectDB(DEV_CONFIG).catch(err => console.log(err));

const corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/', cors('http://localhost:3000/'), (req, res) => {
  res.send({ msg: 'Hello React from Express' }); 
});

app.listen(PORT, () => {
  console.log(`Api listening on port ${PORT}`);
});