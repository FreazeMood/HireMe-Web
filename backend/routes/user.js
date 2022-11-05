import express from "express";
import { registerView, loginView } from "../controllers/userController.js";
import cors from 'cors';
import { ORIGIN } from "../settings/appConfig.js";

const router = express.Router();
router.post('/register', cors(ORIGIN) ,registerView);
router.get('/login', cors(ORIGIN), loginView); 
export default router;