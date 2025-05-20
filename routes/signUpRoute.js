import express from 'express';
const router = express.Router();
import { signup } from "../handlers/signUpHandler.js";
router.post('/signuppage', signup);
export default router;
