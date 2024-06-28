
import express from 'express';
import { registerUser } from '../controllers/user-controller.js';

const router = express.Router();

router.post('/apply', registerUser);


export default router;

