import express from 'express';
const router = express.Router();
import {loginhandle} from '../handlers/loginHandler.js';
router.post('/login', loginhandle);
export default router;