import express from 'express';
import { bankerClientController } from './../controllers/bankerClientControllers';

const router = express.Router();

router.route('/banker/:bankerId/client/:clientId').put(bankerClientController);

export default router;
