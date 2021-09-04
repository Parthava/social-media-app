import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken.js'

//@desc Auth user & get token
//@route POST  /api/user/login
//@access Public
const authUser = asyncHandler(async(req,res) => {
	const { email, password } = req.body
	const user = await User.findOne({email})

	if(user) {
		const { hashPassword } = user
		const verified = bcrypt.compareSync(password, hashPassword);
		if(verified) {
			res.status(201).json({
				_id: user._id,
				firstname: user.firstname,
				lastname: user.lastname,
				email: user.email,
				token: generateToken(user._id)
			})
		}
		else {
			res.status(400)
			throw new Error('Incorrect password')
		}
	}
	else {
		res.status(404)
		throw new Error('User not found')
	}
})

//@desc Register a new user
//@route POST  /api/user/register
//@access Public
const registerUser = asyncHandler(async(req,res) => {
	const { firstname,
			lastname,
			email,
			password } = req.body

	const userExits = await User.findOne({email})

	if(userExits) {
		res.status(400)
		throw new Error('User already exits')
	}

	const salt = bcrypt.genSaltSync(10);
	const hashPassword = bcrypt.hashSync(password, salt);

	const user = await User.create({
		firstname,
		lastname,
		email,
		hashPassword
	})

	if(user) {
		res.status(201).json({
			_id: user._id,
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
			token: generateToken(user._id)
		})
	}
	else {
		res.status(400)
		throw new Error('Invalid user data')
	}
})

export { authUser, registerUser }