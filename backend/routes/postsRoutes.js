import express from 'express';
import { createdPost } from '../controllers/postsController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/create').post(protect, createdPost)

export default router;