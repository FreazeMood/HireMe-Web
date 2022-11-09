import express from 'express';
import ConnectDB from './models/connection.js';
import { DEV_CONFIG } from './settings/dbConfig.js';
import { PORT } from './settings/appConfig.js';
import router from './routes/user.js';
import { ValidationError } from 'express-json-validator-middleware';


const app = express();
await ConnectDB(DEV_CONFIG).catch(err => console.log(err));

//Middlewares
app.use(express.json())

//Routes
app.use('/api/users', router);

//Exceptions
app.use((error, request, response, next) => {

  if (error instanceof ValidationError) {
    response.status(400).send(error.validationErrors.body[0].message); // shows the error message only
    next();
  } else {
    next(error);
  }

});

app.listen(PORT, console.log("Server has started at port " + PORT));
