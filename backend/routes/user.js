import express from "express";
import { createUser, loginUser, listUsers, retrieveUser } from "../controllers/userController.js";
import cors from 'cors';
import { ORIGIN } from "../settings/appConfig.js";
import { Validator } from "express-json-validator-middleware";
import { userCreationSchema } from "../controllers/validators/userValidator.js";


const { validate } = new Validator()

const router = express.Router();
router.post('/login', cors(ORIGIN), loginUser);
 
router.post('/', validate({body: userCreationSchema}), cors(ORIGIN) ,createUser);
router.get('/', cors(ORIGIN), listUsers);
router.get('/:id?', cors(ORIGIN), retrieveUser);

export default router;