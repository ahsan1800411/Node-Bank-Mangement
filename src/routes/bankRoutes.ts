import express from 'express';
import { createBanker } from './../controllers/bankControllers';

const router = express.Router();

router.route('/banker').post(createBanker);

export default router;
