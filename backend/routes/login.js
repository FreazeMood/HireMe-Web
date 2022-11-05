import express from "express";
import { registerView, loginView } from "../controllers/loginController.js";
import cors from 'cors';

const router = express.Router();
router.get('/api/register', cors('http://localhost:3000/') ,registerView);
router.get('/api/login', cors('http://localhost:3000/'), loginView);
export default router;