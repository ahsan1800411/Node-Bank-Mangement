import express from 'express';
import { createTransaction } from './../controllers/transactionContollers';

const router = express.Router();

router.route('/client/:id/transaction').post(createTransaction);

export default router;
