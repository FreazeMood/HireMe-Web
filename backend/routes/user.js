import express from "express";
import { createUser, loginUser, listUsers } from "../controllers/userController.js";
import cors from 'cors';
import { ORIGIN } from "../settings/appConfig.js";
import { Validator } from "express-json-validator-middleware";
import { userCreationSchema } from "../controllers/validators/userValidator.js";


const { validate } = new Validator()

const router = express.Router();
router.post('/register', validate({body: userCreationSchema}), cors(ORIGIN) ,createUser);
router.get('/login', cors(ORIGIN), loginUser); 
router.get('/', cors(ORIGIN), listUsers)

export default router;