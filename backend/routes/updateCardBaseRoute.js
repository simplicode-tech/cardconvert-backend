import express from 'express';
const router = express.Router();
import { updateCardBase } from '../handlers/updateCardBaseHandler.js';
router.post('/updatecardbase', updateCardBase);
export default router;