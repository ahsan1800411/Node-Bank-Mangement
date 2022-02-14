import express from 'express';
import {
  createClient,
  deleteClient,
  getClient,
} from './../controllers/clientControllers';

const router = express.Router();

router.route('/client').post(createClient).get(getClient);
router.route('/client/:id').delete(deleteClient);

export default router;
