import express from 'express';
import { createdPost, getPosts } from '../controllers/postsController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/create').post(protect, createdPost)
router.route('/all').get(protect, getPosts)

export default router;