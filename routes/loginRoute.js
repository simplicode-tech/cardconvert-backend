import express from 'express';
const router = express.Router();
import {login} from '../handlers/loginHandler.js';
router.post('/loginpage', login);
export default router;