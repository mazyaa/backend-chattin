import * as chatController from '../controllers/chatController';
import express from 'express';

const router = express.Router();

router.get('/test', chatController.testAPI);

export default router;