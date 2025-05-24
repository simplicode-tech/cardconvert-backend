import express from 'express';
const router = express.Router();
import { findAllCardBase } from '../handlers/findAllInAllCardBase.js';
router.get('/updatecardbase', findAllCardBase);
export default router;