import express from 'express';
const router = express.Router();
import { signup } from "../handlers/signUpHandler.js";
router.post('/signup', signup);
export default router;
