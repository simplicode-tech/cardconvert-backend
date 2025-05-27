import express from 'express';
const router = express.Router();
import { giftcardupload } from '../handlers/tradeGiftCardHandler.js';
import {authenticateUser} from '../middlewares/authenticateUser.js'
router.post('/uploadgiftcard', authenticateUser, giftcardupload);
export default router;