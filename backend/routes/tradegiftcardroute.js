import express from 'express';
import { giftcardupload } from '../handlers/tradeGiftCardHandler.js';
const router = express.Router();
router.post('/uploadgiftcard', giftcardupload);
export default router;