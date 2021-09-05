import express from 'express';
import { authUser, registerUser, updateUser } from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', authUser)
router.post('/register', registerUser)
router.route('/profile').put(protect, updateUser)

export default router;