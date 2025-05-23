import express from 'express';
const router = express.Router();
import {login} from '../handlers/loginHandler.js';
router.post('/login', login);
export default router;