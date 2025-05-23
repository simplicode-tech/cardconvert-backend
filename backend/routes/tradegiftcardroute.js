import express from 'express';
import { giftcardupload } from '../handlers/tradeGiftCardHandler.js';
import authenticateUser from '../middlewares/authenticateUser.js';
const router = express.Router();
router.post('/uploadgiftcard',authenticateUser, giftcardupload);
export default router;